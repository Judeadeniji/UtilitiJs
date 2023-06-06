import { CustomError } from "./index";
/**
 * Sends an HTTP request with the specified method.
 *
 * @private
 * @param {string} method - The HTTP method.
 * @param {string} url - The URL to send the request to.
 * @param {Object} [data] - The body of the request (optional).
 * @param {Object} [header={}] - The headers of the request (optional).
 * @param {AbortSignal} [signal] - The abort signal (optional).
 * @returns {Promise<Response>} A promise that resolves to the response from the server.
 * @throws {CustomError} Throws a CustomError if the method, URL, headers, or interceptors are invalid.
 */
async function sendRequest(method, url, data = undefined, header = {}, signal) {
    if (typeof method !== 'string') {
        throw new CustomError('Method must be a string');
    }
    if (typeof url !== 'string') {
        throw new CustomError('URL must be a string');
    }
    if (typeof header !== 'object') {
        throw new CustomError('Header must be an object');
    }
    const options = {
        method,
        headers: header,
        signal, // Assign the abort signal to the request options
    };
    if (data) {
        if (typeof data === 'string') {
            options.body = data;
        }
        else if (typeof data === 'object' && data instanceof FormData) {
            options.body = data;
        }
        else if (typeof data === 'object') {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }
        else {
            options.body = data;
        }
    }
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    }
    catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
/**
 * HTTP client for making HTTP requests with support for interceptors.
 * @class Http
 */
class Http {
    /**
     * The array of request interceptors.
     * @private
     * @type {Function[]}
     */
    interceptors;
    /**
     * The array of scoped request interceptors.
     * @private
     * @type {Function[]}
     */
    scopedInterceptors;
    constructor() {
        this.interceptors = [];
        this.scopedInterceptors = [];
    }
    /**
     * Adds an interceptor function to the list of request interceptors.
     *
     * @memberof Http
     * @method addInterceptor
     * @param {Function} interceptor - The interceptor function.
     * @throws {CustomError} Throws a CustomError if the interceptor is not a function.
     */
    addInterceptor(interceptor) {
        if (typeof interceptor !== 'function') {
            throw new CustomError('Interceptor must be a function');
        }
        this.interceptors.push(interceptor);
    }
    /**
     * Adds a scoped interceptor function to the list of request interceptors.
     *
     * @memberof Http
     * @method addScopedInterceptor
     * @param {Function} interceptor - The interceptor function.
     * @throws {CustomError} Throws a CustomError if the interceptor is not a function.
     */
    addScopedInterceptor(interceptor) {
        if (typeof interceptor !== 'function') {
            throw new CustomError('Interceptor must be a function');
        }
        this.scopedInterceptors.push(interceptor);
    }
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
    sendRequestWithInterceptors(method, url, data = undefined, header = {}, signal) {
        if (typeof method !== 'string') {
            throw new CustomError('Method must be a string');
        }
        if (typeof url !== 'string') {
            throw new CustomError('URL must be a string');
        }
        if (typeof header !== 'object') {
            throw new CustomError('Header must be an object');
        }
        if (!Array.isArray(this.interceptors)) {
            throw new CustomError('Interceptors must be an array');
        }
        const interceptorsCount = this.interceptors.length;
        let requestPromise = Promise.resolve({
            method,
            url,
            data,
            header,
            signal,
        });
        for (let i = 0; i < interceptorsCount; i++) {
            const interceptor = this.interceptors[i];
            requestPromise = requestPromise.then((request) => {
                return interceptor({
                    method: request.method,
                    url: request.url,
                    data: request.data,
                    header: request.header,
                    signal: request.signal,
                }, ({ method, url, data, header }) => sendRequest(method || request.method, url || request.url, data || request.data, signal || request?.signal, request.header));
            }).then((response) => {
                if (response && response.constructor.name === 'Response') {
                    // If the interceptor returned a response, convert it back to the request object
                    return {
                        method,
                        url,
                        data,
                        header,
                        signal,
                    };
                }
                else {
                    // If the interceptor returned the request object, continue with it
                    return response;
                }
            });
        }
        return requestPromise.then((request) => {
            return sendRequest(request.method, request.url, request.data, request.header, request.signal);
        });
    }
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
    async get(url, header = {}, signal) {
        return await this.sendRequestWithInterceptors('GET', url, undefined, header, signal);
    }
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
    async post(url, data, header = {}, signal) {
        return await this.sendRequestWithInterceptors('POST', url, data, header, signal);
    }
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
    async put(url, data, header = {}, signal) {
        return await this.sendRequestWithInterceptors('PUT', url, data, header, signal);
    }
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
    async patch(url, data, header = {}, signal) {
        return await this.sendRequestWithInterceptors('PATCH', url, data, header, signal);
    }
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
    async delete(url, header = {}, signal) {
        return await this.sendRequestWithInterceptors('DELETE', url, undefined, header, signal);
    }
    /**
     * Adds an array of interceptors to the list of global interceptors.
     *
     * @memberof Http
     * @method useInterceptors
     * @param {Function[]} interceptors - The array of interceptor functions to be added.
     * @throws {CustomError} Throws a CustomError if any of the interceptors is not a function.
     */
    useInterceptors(interceptors) {
        if (!Array.isArray(interceptors)) {
            throw new CustomError('Interceptors must be an array');
        }
        interceptors.forEach((interceptor) => {
            this.addInterceptor(interceptor);
        });
    }
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
    useScopedInterceptors(interceptors, method, url) {
        if (!Array.isArray(interceptors)) {
            throw new CustomError('Interceptors must be an array');
        }
        interceptors.forEach((interceptor) => {
            this.addScopedInterceptor((request, next) => {
                if (request.method === method && request.url === url) {
                    return interceptor(request, next);
                }
                else {
                    return next(request);
                }
            });
        });
    }
}
export default Http;
