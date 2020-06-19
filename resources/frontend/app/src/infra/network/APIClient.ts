import axios from "axios";
import { APIRequest, HTTPMethod } from "./APIRequest";
import { APIError, ValidationErrors } from "./APIError";

axios.defaults.withCredentials = true;

interface HttpError extends Error {
    response?: {
        status: number;
        data: {
            message: string;
            errors: ValidationErrors;
        };
    };
    message: string;
}

export class APIClient {
    baseURL = "/api";
    timeout: number = 15 * 1000;

    request<U, R = null>(request: APIRequest<R>): Promise<U> {
        const isRead = request.method === HTTPMethod.GET;

        return new Promise<U>((resolve, reject) => {
            axios
                .request<U>({
                    url: request.path,
                    method: request.method,
                    params: isRead && request.params,
                    data: !isRead && request.params,
                    withCredentials: true,
                    timeout: this.timeout,
                    baseURL: request.baseURL || this.baseURL,
                    headers: this.createHeaders()
                })
                .then(data => {
                    resolve(data.data);
                })
                .catch(err => {
                    const apiError = this.normalizeError(err);
                    reject(apiError);
                });
        });
    }

    // Convert axios error into APIError
    private normalizeError(error: HttpError): APIError {
        return {
            status: error.response && error.response.status,
            message: error.response?.data.message ?? "",
            errors: error.response?.data.errors ?? null,
            raw: error
        };
    }

    private createHeaders() {
        const headers = {
            "Content-Type": "application/json",
            xhrFields: true
        };

        return headers;
    }
}
