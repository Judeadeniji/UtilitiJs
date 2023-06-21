/**
 * The options for the request.
 */
interface RequestOptions {
    method?: string;
    headers?: Record<string, string>;
    data?: any;
    signal?: AbortSignal;
}
/**
 * The response data returned from the server.
 */
interface ResponseData {
    status: number;
    statusText: string;
    text: () => Promise<string>;
    json: () => Promise<any>;
}
/**
 * The callback function to handle the request and response.
 * @param request - The request object containing method, URL, and options.
 * @param response - The response data returned from the server.
 */
interface RequestCallback {
    (request: {
        method: string;
        url: string;
        options: RequestOptions;
    }, response: ResponseData): void;
}
/**
 * The interceptor object for modifying requests and responses.
 */
interface Interceptor {
    /**
     * The method called before sending the request.
     * @param request - The request object containing method, URL, and options.
     * @returns A promise that resolves to the modified request options.
     */
    request?: (request: {
        method: string;
        url: string;
        options: RequestOptions;
    }) => Promise<RequestOptions>;
    /**
     * The method called after receiving the response.
     * @param response - The response data returned from the server.
     * @returns A promise that resolves when the response handling is complete.
     */
    response?: (response: ResponseData) => Promise<void>;
    /**
     * The method called when an error occurs.
     * @param error - The error object.
     * @returns A promise that resolves when the error handling is complete.
     */
    error?: (error: any) => Promise<void>;
}
/**
 * The main request class for making HTTP requests.
 */
declare class Request {
    private url;
    private methods;
    private interceptors;
    private finish;
    private catchFn;
    /**
     * Create a new Request instance.
     * @param url - The URL for the requests.
     */
    constructor(url: string);
    /**
     * Add an interceptor to the request.
     * @param interceptor - The interceptor object.
     * @returns The modified Request instance.
     */
    useInterceptor(interceptor: Interceptor): Request;
    /**
     * Add a method to the request.
     * @param method - The HTTP method.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    addMethod(method: string, callback: RequestCallback, options: RequestOptions): Request;
    /**
     * Add a GET request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    get(callback: RequestCallback, options?: RequestOptions): Request;
    /**
     * Add a PUT request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    put(callback: RequestCallback, options?: RequestOptions): Request;
    /**
     * Add a POST request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    post(callback: RequestCallback, options?: RequestOptions): Request;
    /**
     * Add a PATCH request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    patch(callback: RequestCallback, options?: RequestOptions): Request;
    /**
     * Add a DELETE request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    delete(callback: RequestCallback, options?: RequestOptions): Request;
    /**
     * Send all the added requests.
     */
    send(): void;
    /**
     * Set the callback function to be called when all requests are successfully completed.
     * @param callback - The function to call when all requests successfully complete.
     * @returns The modified Request instance.
     */
    onend(callback: (args: Array<object>) => any): this;
    /**
     * Set the callback function to be called when an error occurs during the requests.
     * @param callback - The function to call when an error occurs.
     * @returns The modified Request instance.
     */
    onerror(callback: (error: Error) => any): this;
}
/**
 * Create a new Request instance.
 * @param url - The URL for the requests.
 * @returns A new Request instance.
 */
declare function esFetch(url: string): Request;
export default esFetch;
