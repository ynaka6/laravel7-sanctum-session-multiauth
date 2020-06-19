export interface ValidationErrors {
    [k: string]: string[] | ValidationErrors[];
}

export interface APIError {
    message: string;
    errors: ValidationErrors | null;
    status: number | undefined;
    raw: Error;
}
