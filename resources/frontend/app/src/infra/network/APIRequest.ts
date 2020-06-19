export type TupleToUnion<T> = T extends { [K in keyof T]: infer U } ? U : never;

export const HTTPMethod = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    PUT: "PUT"
} as const;

export interface APIRequest<R = null> {
    path: string;
    method: TupleToUnion<typeof HTTPMethod>;
    params?: R;
    baseURL?: string;
}
