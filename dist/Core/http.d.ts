/**
 * HTTP client for making HTTP requests with support for interceptors.
 * @class Http
 */
declare class Http {
    /**
     * The array of request interceptors.
     * @private
     * @type {Function[]}
     */
    private interceptors;
    /**
     * The array of scoped request interceptors.
     * @private
     * @type {Function[]}
     */
    private scopedInterceptors;
    constructor();
    /**
     * Adds an interceptor function to the list of request interceptors.
     *
     * @memberof Http
     * @method addInterceptor
     * @param {Function} interceptor - The interceptor function.
     * @throws {CustomError} Throws a CustomError if the interceptor is not a function.
     */
    addInterceptor(interceptor: Function): void;
    /**
     * Adds a scoped interceptor function to the list of request interceptors.
     *
     * @memberof Http
     * @method addScopedInterceptor
     * @param {Function} interceptor - The interceptor function.
     * @throws {CustomError} Throws a CustomError if the interceptor is not a function.
     */
    addScopedInterceptor(interceptor: Function): void;
    /**
     * Sends an HTTP request with the specified method and applies any registered interceptors.
     *
     * @private
     * @memberof Http
     * @method sendRequestWithInterceptors
     * @param {string} method - The HTTP method.
     * @param {string} url - The URL to send the request to.
     * @param {Object} [data] - The body of the request (optional).
     * @param {Object} [header={}] - The headers of the request (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {CustomError} Throws a CustomError if the method, URL, headers, or interceptors are invalid.
     */
    private sendRequestWithInterceptors;
    /**
     * Sends a GET request to retrieve data from the server.
     *
     * @memberof Http
     * @method get
     * @param {string} url - The URL to send the request to.
     * @param {Object} [header={}] - The headers of the request (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {CustomError} Throws a CustomError if the URL or headers are invalid.
     */
    get(url: string, header?: any): Promise<Response>;
    /**
     * Sends a POST request to create a new resource on the server.
     *
     * @memberof Http
     * @method post
     * @param {string} url - The URL to send the request to.
     * @param {Object} data - The body of the request.
     * @param {Object} [header={}] - The headers of the request (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {CustomError} Throws a CustomError if the URL, body, or headers are invalid.
     */
    post(url: string, data: any, header?: any): Promise<Response>;
    /**
     * Sends a PUT request to update an existing resource on the server.
     *
     * @memberof Http
     * @method put
     * @param {string} url - The URL to send the request to.
     * @param {Object} data - The body of the request.
     * @param {Object} [header={}] - The headers of the request (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {CustomError} Throws a CustomError if the URL, body, or headers are invalid.
     */
    put(url: string, data: any, header?: any): Promise<Response>;
    /**
     * Sends a PATCH request to update a resource on the server.
     *
     * @memberof Http
     * @method patch
     * @param {string} url - The URL to send the request to.
     * @param {Object} data - The body of the request.
     * @param {Object} [header={}] - The headers of the request (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {CustomError} Throws a CustomError if the URL, body, or headers are invalid.
     */
    patch(url: string, data: any, header?: any): Promise<Response>;
    /**
     * Sends a DELETE request to delete a resource on the server.
     *
     * @memberof Http
     * @method delete
     * @param {string} url - The URL to send the request to.
     * @param {Object} [header={}] - The headers of the request (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {CustomError} Throws a CustomError if the URL or headers are invalid.
     */
    delete(url: string, header?: any): Promise<Response>;
    /**
     * Adds an array of interceptors to the list of global interceptors.
     *
     * @memberof Http
     * @method useInterceptors
     * @param {Function[]} interceptors - The array of interceptor functions to be added.
     * @throws {CustomError} Throws a CustomError if any of the interceptors is not a function.
     */
    useInterceptors(interceptors: Function[]): void;
    /**
     * Adds an array of scoped interceptors to the list of interceptors for a particular request.
     *
     * @memberof Http
     * @method useScopedInterceptors
     * @param {Function[]} interceptors - The array of interceptor functions to be added.
     * @param {string} method - The HTTP method of the request.
     * @param {string} url - The URL of the request.
     * @throws {CustomError} Throws a CustomError if any of the interceptors is not a function.
     */
    useScopedInterceptors(interceptors: Function[], method: string, url: string): void;
}
export default Http;
