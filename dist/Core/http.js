"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
/**
 * Custom error class for HTTP request errors.
 */
class HttpRequestError extends Error {
    /**
     * The HTTP method of the failed request.
     */
    method;
    /**
     * The URL of the failed request.
     */
    url;
    /**
     * The body of the failed request.
     */
    data;
    /**
     * The headers of the failed request.
     */
    headers;
    /**
     * Creates an instance of HttpRequestError.
     *
     * @param {string} message - The error message.
     * @param {string} method - The HTTP method of the failed request.
     * @param {string} url - The URL of the failed request.
     * @param {Object} data - The body of the failed request.
     * @param {Object} headers - The headers of the failed request.
     */
    constructor(message, method, url, data) {
        super(message);
        this.name = "Utiliti-HttpRequestError";
        this.method = method;
        this.url = url;
        this.data = data;
    }
}
/**
 * Delays the execution for the specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to delay.
 * @returns {Promise<void>} A promise that resolves after the delay.
 */
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Sends an HTTP request with the specified method.
 *
 * @private
 * @param {string} method - The HTTP method.
 * @param {string} url - The URL to send the request to.
 * @param {Object} [data] - The body of the request (optional).
 * @param {Object} [header={}] - The headers of the request (optional).
 * @param {AbortSignal} [signal] - The abort signal (optional).
 * @param {number} [retryCount=0] - The number of retry attempts (optional).
 * @param {number} [retryDelay=0] - The delay between retry attempts in milliseconds (optional).
 * @param {number} [retryAttempt=0] - The current retry attempt (optional).
 * @returns {Promise<Response>} A promise that resolves to the response from the server.
 * @throws {HttpRequestError} Throws a HttpRequestError if the method, URL, headers, or interceptors are invalid.
 */
async function sendRequest(method, url, data = undefined, header = {}, signal, retryCount = 0, retryDelay = 0, retryAttempt = 0) {
    if (typeof method !== 'string') {
        throw new HttpRequestError('Method must be a string', method, data, url);
    }
    if (typeof url !== 'string') {
        throw new HttpRequestError('URL must be a string', method, url, data);
    }
    if (typeof header !== 'object') {
        throw new HttpRequestError('Header must be an object', method, url, data);
    }
    const { params, pathname, ...requestHeaders } = header;
    let destination = url;
    if (params) {
        const urlParser = new index_js_1.UrlParser(url);
        destination = urlParser.buildUrl(null, null, pathname || urlParser.getPath(), params);
    }
    const options = {
        method,
        headers: requestHeaders,
    };
    if (signal instanceof AbortSignal) {
        options.signal = signal; // Assign the abort signal to the request options
    }
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
        const response = await fetch(destination, options);
        if (!response.ok) {
            throw new HttpRequestError(response.statusText, method, url, data);
        }
        return response;
    }
    catch (error) {
        if (retryAttempt > retryCount) {
            await delay(retryDelay); // Delay between retries
            return sendRequest(method, url, data, header, signal, retryCount + 1, retryDelay, retryAttempt);
        }
        else {
            throw new HttpRequestError(error.message, method, url, data);
        }
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
    /**
     * The number of times a request has been tried.
     * @private
     * @type {number}
     */
    retryCount;
    /**
     * The interval between a failed request and the next try.
     * @private
     * @type {number}
     */
    retryDelay;
    /**
     * The number of times a request should be tried if it failes.
     * @private
     * @type {number}
     */
    retryAttempt;
    constructor(config = {}) {
        this.interceptors = [];
        this.scopedInterceptors = [];
        this.retryCount = 0; // Default value or provided value
        this.retryDelay = config.retryDelay || 1000; // Default value or provided value
        this.retryAttempt = config.retryAttempt || 3;
    }
    /**
     * Adds an interceptor function to the list of request interceptors.
     *
     * @memberof Http
     * @method addInterceptor
     * @param {Function} interceptor - The interceptor function.
     * @throws {HttpRequestError} Throws a HttpRequestError if the interceptor is not a function.
     */
    addInterceptor(interceptor) {
        if (typeof interceptor !== 'function') {
            throw new HttpRequestError('Interceptor must be a function', '', '', 'interceptor must be of type Function');
        }
        this.interceptors.push(interceptor);
    }
    /**
     * Adds a scoped interceptor function to the list of request interceptors.
     *
     * @memberof Http
     * @method addScopedInterceptor
     * @param {Function} interceptor - The interceptor function.
     * @throws {HttpRequestError} Throws a HttpRequestError if the interceptor is not a function.
     */
    addScopedInterceptor(interceptor) {
        if (typeof interceptor !== 'function') {
            throw new HttpRequestError('Interceptor must be a function', '', '', 'interceptor must be of type Function');
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
     * @throws {HttpRequestError} Throws a HttpRequestError if the method, URL, headers, or interceptors are invalid.
     */
    sendRequestWithInterceptors(method, url, data = undefined, header = {}, signal) {
        if (typeof method !== 'string') {
            throw new HttpRequestError('Method must be a string', method, url, data);
        }
        if (typeof url !== 'string') {
            throw new HttpRequestError('URL must be a string', method, url, data);
        }
        if (typeof header !== 'object') {
            throw new HttpRequestError('Header must be an object', method, url, data);
        }
        if (!Array.isArray(this.interceptors)) {
            throw new HttpRequestError('Interceptors must be an array', method, url, data);
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
                }, ({ method, url, data, header, signal }) => sendRequest(request.method || method, request.url || url, request.data || data, request.signal || signal instanceof AbortSignal ? signal : undefined, request.header || header));
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
            return sendRequest(request.method, request.url, request.data, request.header, request.signal, this.retryCount, this.retryDelay, this.retryAttempt);
        });
    }
    /**
     * Sends a GET request to retrieve data from the server.
     *
     * @memberof Http
     * @method get
     * @param {string} url - The URL to send the request to.
     * @param {Object} [header={}] - The headers of the request (optional).
     * @param {AbortSignal} [signal] - The abort signal (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {HttpRequestError} Throws a HttpRequestError if the URL or headers are invalid.
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
     * @param {AbortSignal} [signal] - The abort signal (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {HttpRequestError} Throws a HttpRequestError if the URL, body, or headers are invalid.
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
     * @param {AbortSignal} [signal] - The abort signal (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {HttpRequestError} Throws a HttpRequestError if the URL, body, or headers are invalid.
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
     * @param {AbortSignal} [signal] - The abort signal (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {HttpRequestError} Throws a HttpRequestError if the URL, body, or headers are invalid.
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
     * @param {AbortSignal} [signal] - The abort signal (optional).
     * @returns {Promise<Response>} A promise that resolves to the response from the server.
     * @throws {HttpRequestError} Throws a HttpRequestError if the URL or headers are invalid.
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
     * @throws {HttpRequestError} Throws a HttpRequestError if any of the interceptors is not a function.
     */
    useInterceptors(interceptors) {
        if (!Array.isArray(interceptors)) {
            throw new HttpRequestError('Interceptors must be an array', '', '', 'Interceptors must be of type Function[]');
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
     * @throws {HttpRequestError} Throws a HttpRequestError if any of the interceptors is not a function.
     */
    useScopedInterceptors(interceptors, method, url) {
        if (!Array.isArray(interceptors)) {
            throw new HttpRequestError('Interceptors must be an array', method, url, 'interceptors must be of type Function[]');
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
exports.default = Http;
//# sourceMappingURL=http.js.map