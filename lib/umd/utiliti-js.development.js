(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("UtilitiJs", [], factory);
	else if(typeof exports === 'object')
		exports["UtilitiJs"] = factory();
	else
		root["UtilitiJs"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/Core/http-2.js":
/*!*****************************!*\
  !*** ./dist/Core/http-2.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The main request class for making HTTP requests.
 */
class Request {
    url;
    methods;
    interceptors;
    finish;
    catchFn;
    /**
     * Create a new Request instance.
     * @param url - The URL for the requests.
     */
    constructor(url) {
        this.url = url;
        this.methods = [];
        this.interceptors = [];
        this.finish = () => { };
        this.catchFn = (error) => console.error(error);
    }
    /**
     * Add an interceptor to the request.
     * @param interceptor - The interceptor object.
     * @returns The modified Request instance.
     */
    useInterceptor(interceptor) {
        this.interceptors.push(interceptor);
        return this;
    }
    /**
     * Add a method to the request.
     * @param method - The HTTP method.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    addMethod(method, callback, options) {
        const request = {
            method,
            callback,
            options,
        };
        this.methods.push(request);
        return this;
    }
    /**
     * Add a GET request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    get(callback, options = {}) {
        return this.addMethod('GET', callback, options);
    }
    /**
     * Add a PUT request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    put(callback, options = {}) {
        return this.addMethod('PUT', callback, options);
    }
    /**
     * Add a POST request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    post(callback, options = {}) {
        return this.addMethod('POST', callback, options);
    }
    /**
     * Add a PATCH request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    patch(callback, options = {}) {
        return this.addMethod('PATCH', callback, options);
    }
    /**
     * Add a DELETE request.
     * @param callback - The callback function to handle the response.
     * @param options - The additional options for the request.
     * @returns The modified Request instance.
     */
    delete(callback, options = {}) {
        return this.addMethod('DELETE', callback, options);
    }
    /**
     * Send all the added requests.
     */
    send() {
        const requests = this.methods.map(async ({ method, callback, options }, index) => {
            // Apply request interceptors
            let requestOptions = {
                method,
                headers: options.headers || {},
                data: options.data,
            };
            for (const interceptor of this.interceptors) {
                if (interceptor.request) {
                    requestOptions = await interceptor.request({ method, url: this.url, options: requestOptions });
                }
            }
            return fetch(this.url, requestOptions)
                .then((response) => {
                return {
                    status: response.status,
                    statusText: response.statusText,
                    text: async () => await response.text(),
                    json: async () => await response.json(),
                };
            })
                .then(async (responseData) => {
                // Apply response interceptors
                for (const interceptor of this.interceptors) {
                    if (interceptor.response) {
                        await interceptor.response(responseData);
                    }
                }
                await callback({ method, url: this.url, options: requestOptions }, responseData);
                return responseData;
            })
                .catch(async (error) => {
                // Apply error interceptors
                for (const interceptor of this.interceptors) {
                    if (interceptor.error) {
                        await interceptor.error(error);
                    }
                }
                throw error;
            });
        });
        Promise.all(requests)
            .then(this.finish)
            .catch(this.catchFn);
    }
    /**
     * Set the callback function to be called when all requests are successfully completed.
     * @param callback - The function to call when all requests successfully complete.
     * @returns The modified Request instance.
     */
    onend(callback) {
        this.finish = callback;
        return this;
    }
    /**
     * Set the callback function to be called when an error occurs during the requests.
     * @param callback - The function to call when an error occurs.
     * @returns The modified Request instance.
     */
    onerror(callback) {
        this.catchFn = callback;
        return this;
    }
}
/**
 * Create a new Request instance.
 * @param url - The URL for the requests.
 * @returns A new Request instance.
 */
function esFetch(url) {
    return new Request(url);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (esFetch);


/***/ }),

/***/ "./dist/Core/http.js":
/*!***************************!*\
  !*** ./dist/Core/http.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./dist/Core/index.js");

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
    constructor(message, method, url, data, headers) {
        super(message);
        this.name = "Utiliti-HttpRequestError";
        this.method = method;
        this.url = url;
        this.data = data;
        this.headers = headers;
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
        throw new HttpRequestError('Method must be a string', method, data, url, header);
    }
    if (typeof url !== 'string') {
        throw new HttpRequestError('URL must be a string', method, url, data, header);
    }
    if (typeof header !== 'object') {
        throw new HttpRequestError('Header must be an object', method, url, data, header);
    }
    const { params, pathname, ...requestHeaders } = header;
    let destination = url;
    if (params) {
        const urlParser = new _index_js__WEBPACK_IMPORTED_MODULE_0__.UrlParser(url);
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
            throw new HttpRequestError(response.statusText, method, url, data, header);
        }
        return response;
    }
    catch (error) {
        if (retryAttempt > retryCount) {
            await delay(retryDelay); // Delay between retries
            return sendRequest(method, url, data, header, signal, retryCount + 1, retryDelay, retryAttempt);
        }
        else {
            throw new HttpRequestError(error.message, method, url, data, header);
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
            throw new HttpRequestError('Interceptor must be a function', '', '', 'interceptor must be of type Function', {});
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
            throw new HttpRequestError('Interceptor must be a function', '', '', 'interceptor must be of type Function', {});
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
            throw new HttpRequestError('Method must be a string', method, url, data, header);
        }
        if (typeof url !== 'string') {
            throw new HttpRequestError('URL must be a string', method, url, data, header);
        }
        if (typeof header !== 'object') {
            throw new HttpRequestError('Header must be an object', method, url, data, header);
        }
        if (!Array.isArray(this.interceptors)) {
            throw new HttpRequestError('Interceptors must be an array', method, url, data, header);
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
            throw new HttpRequestError('Interceptors must be an array', '', '', 'Interceptors must be of type Function[]', {});
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
            throw new HttpRequestError('Interceptors must be an array', method, url, 'interceptors must be of type Function[]', {});
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Http);


/***/ }),

/***/ "./dist/Core/index.js":
/*!****************************!*\
  !*** ./dist/Core/index.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomError": () => (/* binding */ CustomError),
/* harmony export */   "DataFilter": () => (/* binding */ DataFilter),
/* harmony export */   "DataValidator": () => (/* binding */ DataValidator),
/* harmony export */   "DateFilter": () => (/* binding */ DateFilter),
/* harmony export */   "Http": () => (/* binding */ Http),
/* harmony export */   "Random": () => (/* binding */ Random),
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "TaskQueue": () => (/* binding */ TaskQueue),
/* harmony export */   "UrlParser": () => (/* binding */ UrlParser),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "createSubscriber": () => (/* binding */ createSubscriber),
/* harmony export */   "dataFilter": () => (/* binding */ dataFilter),
/* harmony export */   "dateFilter": () => (/* binding */ dateFilter),
/* harmony export */   "generateId": () => (/* binding */ generateId),
/* harmony export */   "mergeReducers": () => (/* binding */ mergeReducers),
/* harmony export */   "trim": () => (/* binding */ trim)
/* harmony export */ });
/**
 * Represents a custom error.
 * @class CustomError
 * @extends Error
 */
class CustomError extends Error {
    constructor(message) {
        // Call the super constructor with the error message
        super(message);
        // Set the name property of the error object to "Utiliti Error"
        this.name = "Utiliti: Error";
    }
}
/**
 * Body takes in an object
 * Headers also takes an object
 */
function Http() {
    console.warn('Use Of Core.Http has been deprecated. Use the Http module instead');
    // Send a GET request to retrieve data from the server
    this.get = async (url, header = {}) => {
        // Check if url is a string
        if (typeof url !== "string") {
            // If not, throw a CustomError
            throw new CustomError("url must be a string");
        }
        // Check if header is an object
        if (typeof header !== "object") {
            // If not, throw a CustomError
            throw new CustomError("Header must be an object");
        }
        try {
            const response = await fetch(url, { headers: new Headers(header) });
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response;
        }
        catch (error) {
            console.error("Fetch error:", error);
        }
    };
    // Send a POST request to create a new resource on the server
    this.post = async (url, data, header = {}) => {
        // Check if url is a string
        if (typeof url !== "string") {
            // If not, throw a CustomError
            throw new CustomError("url must be a string");
        }
        // Check if header is an object
        if (typeof header !== "object") {
            // If not, throw a CustomError
            throw new CustomError("header must be an object");
        }
        // Check if data is an object
        if (typeof data !== "object") {
            // If not, throw a CustomError
            throw new CustomError("the body of the request must be an object");
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: new Headers(header),
            });
            return response;
        }
        catch (error) {
            console.error("Fetch error:", error);
        }
    };
    // Send a PUT request to update an existing resource on the server
    this.put = async (url, data, header = {}) => {
        // Check if url is a string
        if (typeof url !== "string") {
            // If not, throw a CustomError
            throw new CustomError("url must be a string");
        }
        // Check if header is an object
        if (typeof header !== "object") {
            // If not, throw a CustomError
            throw new CustomError("header must be an object");
        }
        // Check if data is an object
        if (typeof data !== "object") {
            // If not, throw a CustomError
            throw new CustomError("the body of the request must be an object");
        }
        try {
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: new Headers(header),
            });
            return response;
        }
        catch (error) {
            console.error("Fetch error:", error);
        }
    };
    // Send a PATCH request to update a resource on the server
    this.patch = async (url, data, header = {}) => {
        // Check if url is a string
        if (typeof url !== "string") {
            // If not, throw a CustomError
            throw new CustomError("url must be a string");
        }
        // Check if header is an object
        if (typeof header !== "object") {
            // If not, throw a CustomError
            throw new CustomError("header must be an object");
        }
        // Check if data is an object
        if (typeof data !== "object") {
            // If not, throw a CustomError
            throw new CustomError("the body of the request must be an object");
        }
        try {
            const response = await fetch(url, {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: new Headers(header),
            });
            return response;
        }
        catch (error) {
            console.error("Fetch error:", error);
        }
    };
    // Send a DELETE request to delete a resource on the server
    this.delete = async (url, header = {}) => {
        // Check if url is a string
        if (typeof url !== "string") {
            // If not, throw a CustomError
            throw new CustomError("url must be a string");
        }
        // Check if header is an object
        if (typeof header !== "object") {
            // If not, throw a CustomError
            throw new CustomError("header must be an object");
        }
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: new Headers(header),
            });
            return response;
        }
        catch (error) {
            console.error("Fetch error:", error);
        }
    };
}
function dataFilter(item) {
    console.warn('dataFilter has been renamed to DataFilter');
    return new DataFilter(item);
}
/**
 * A class representing a data filter.
 * @class DataFilter
 * @template T - The type of data being filtered.
 */
class DataFilter {
    /**
     * The filter function used to filter the data.
     * @type {Function}
     */
    filterFn;
    /**
     * Constructs a DataFilter instance with the provided filter function.
     * @param {Function} filterFn - The filter function used to filter the data.
     */
    constructor(filterFn) {
        this.filterFn = filterFn;
    }
    /**
     * Filters an array of data using the filter function.
     * @param {Array<T>} data - The array of data to be filtered.
     * @returns {Array<T>} The filtered data array.
     * @throws {CustomError} Throws a CustomError if the filter function is not a function.
     */
    filter(data) {
        if (typeof this.filterFn !== "function") {
            throw new CustomError("The filter function must be a function.");
        }
        const filteredData = [];
        for (const item of data) {
            const result = this.filterFn(item);
            if (result === true) {
                filteredData.push(item);
            }
        }
        return filteredData;
    }
}
function dateFilter() {
    console.warn('dateFilter has been renamed to DateFilter');
    return new DateFilter();
}
/**
 * A class containing utility functions for working with dates.
 * @class DateFilter
 */
class DateFilter {
    constructor() { }
    /**
     * Converts a date to text format.
     * @param {Date} date - The date object to convert.
     * @returns {string} The date in text format.
     */
    text(date) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const monthName = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${monthName} ${day}, ${year}`;
    }
    /**
     * Formats a date based on the specified format.
     * @param {Date} date - The date object to format.
     * @param {string} format - The format to use for formatting the date.
     * Supported format specifiers: yyyy, mm, dd, HH, MM, SS, ago.
     * @returns {string} The formatted date.
     * @throws {CustomError} If the format is invalid.
     */
    formatDate(date, format) {
        if (typeof format !== "string") {
            throw new CustomError("Provide a valid date format.");
        }
        if (format === "ago") {
            const now = new Date();
            const diff = now.getTime() - date.getTime();
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const months = Math.floor(days / 30);
            const years = Math.floor(months / 12);
            if (years > 0) {
                return `${years} year${years > 1 ? "s" : ""} ago`;
            }
            else if (months > 0) {
                return `${months} month${months > 1 ? "s" : ""} ago`;
            }
            else if (days > 0) {
                return `${days} day${days > 1 ? "s" : ""} ago`;
            }
            else if (hours > 0) {
                return `${hours} hour${hours > 1 ? "s" : ""} ago`;
            }
            else if (minutes > 0) {
                return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
            }
            else {
                return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
            }
        }
        const formatReplacements = {
            yyyy: date.getFullYear().toString(),
            mm: (date.getMonth() + 1).toString().padStart(2, "0"),
            dd: date.getDate().toString().padStart(2, "0"),
            HH: date.getHours().toString().padStart(2, "0"),
            MM: date.getMinutes().toString().padStart(2, "0"),
            SS: date.getSeconds().toString().padStart(2, "0"),
        };
        return format.replace(/yyyy|mm|dd|HH|MM|SS/g, (match) => formatReplacements[match]);
    }
    /**
     * Checks if a given year is a leap year.
     * @param {number} year - The year to check.
     * @returns {boolean} Whether the year is a leap year.
     */
    isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    /**
     * Gets the number of days in a month for a given year.
     * @param {number} month - The month (1-indexed) to get the number of days.
     * @param {number} year - The year to check if it's a leap year.
     * @returns {number} The number of days in the month.
     */
    getDaysInMonth(month, year) {
        if (month === 2 && this.isLeapYear(year)) {
            return 29;
        }
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return daysInMonth[month - 1];
    }
    /**
     * Adds a specified number of days to a given date.
     * @param {Date} date - The date to add days to.
     * @param {number} days - The number of days to add.
     * @returns {Date} The resulting date after adding the days.
     */
    addDays(date, days) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }
    /**
     * Subtracts a specified number of days from a given date.
     * @param {Date} date - The date to subtract days from.
     * @param {number} days - The number of days to subtract.
     * @returns {Date} The resulting date after subtracting the days.
     */
    subtractDays(date, days) {
        return this.addDays(date, -days);
    }
    /**
     * Compares two dates and returns the difference in days.
     * @param {Date} date1 - The first date.
     * @param {Date} date2 - The second date.
     * @returns {number} The difference in days between the two dates.
     */
    compareDates(date1, date2) {
        const diffInTime = date2.getTime() - date1.getTime();
        return Math.floor(diffInTime / (1000 * 3600 * 24));
    }
    /**
     * Checks if a given date is in the past.
     * @param {Date} date - The date to check.
     * @returns {boolean} Whether the date is in the past.
     */
    isPastDate(date) {
        const today = new Date();
        return date < today;
    }
}
/**
 * Represents a store that holds the state and manages state updates.
 * @class Store
 * @template T - The type of state.
 * @template A - The type of action.
 * @param {function} reducer - The reducer function for state updates.
 * @param {T} [initialState={}] - The initial state of the store.
 *
 * @throws {CustomError} If the reducer is not a function.
 * @returns {Object} The store object with various methods.
 */
class Store {
    reducer;
    state;
    listeners;
    constructor(reducer, initialState = {}) {
        this.reducer = reducer;
        this.state = initialState;
        this.listeners = [];
        // Check if reducer is a function
        if (typeof reducer !== "function") {
            // If not, throw a CustomError
            throw new CustomError("Reducer must be a function.");
        }
    }
    /**
     * Returns the current state of the store.
     *
     * @returns {T} The current state.
     */
    getState() {
        return this.state;
    }
    /**
     * Dispatches an action to update the state.
     *
     * @param {A} action - The action representing the state update.
     */
    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach((listener) => listener(this.state));
    }
    /**
     * Subscribes a listener function to be called on state changes.
     *
     * @param {function} listener - The listener function to be called on state changes.
     * @returns {function} A function to unsubscribe the listener.
     *
     * @throws {CustomError} If the listener is not a function.
     */
    subscribe(listener) {
        // Check if listener is a function
        if (typeof listener !== "function") {
            // If not, throw a CustomError
            throw new CustomError("You must subscribe to a function.");
        }
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }
    /**
     * Replaces the current reducer function with a new one.
     *
     * @param {function} nextReducer - The new reducer function.
     */
    replaceReducer(nextReducer) {
        this.reducer = nextReducer;
    }
    /**
     * Returns the current reducer function.
     *
     * @returns {function} The current reducer function.
     */
    getReducer() {
        return this.reducer;
    }
}
/**
 * Applies middlewares to the store's dispatch function.
 *
 * @param {...function} middlewares - The middlewares to apply.
 * @returns {function} A function that wraps the store and applies the middlewares.
 */
function applyMiddleware(...middlewares) {
    return (store) => (...args) => {
        const newStore = new store(...args);
        let dispatch = newStore.dispatch;
        middlewares.forEach((middleware) => {
            dispatch = middleware(newStore)(dispatch);
        });
        return {
            ...store,
            dispatch,
        };
    };
}
/**
 * Creates a subscriber object to subscribe to store updates.
 *
 * @param {*} store - The store object to subscribe to.
 * @returns {Object} The subscriber object.
 */
const createSubscriber = (store) => {
    return {
        /**
         * Subscribes a callback function to be called on store updates.
         *
         * @param {function} callback - The callback function to be called on store updates.
         */
        subscribe(callback) {
            store.subscribe(callback);
        },
    };
};
/**
 * Merges multiple reducers into a single reducer function.
 *
 * @param {Object} reducers - An object containing the individual reducers.
 * @returns {function} The merged reducer function.
 *
 * @throws {CustomError} If reducers is not an object.
 */
function mergeReducers(reducers) {
    // Check if reducers is an object
    if (typeof reducers !== "object") {
        // If not, throw a CustomError
        throw new CustomError("Provide an object containing the reducers.");
    }
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    };
}
/**
 * Generates a unique id of a random length.
 * @returns {number} The generated id.
*/
function generateId() {
    // Generate a random number between 1 and 1000000
    const id = Math.floor(Math.random() * 1000000) + 1;
    return id;
}
/**
 * Creates and manages a queue of tasks.
 * @class TaskQueue
 */
class TaskQueue {
    /**
     * The array to store the tasks.
     * @type {Array<function>}
     */
    tasks;
    constructor() {
        this.tasks = [];
    }
    /**
     * Adds a new task to the queue.
     * @param {function} task - The task to add to the queue.
     * @returns {void}
     */
    addTask(task) {
        this.tasks.push(task);
    }
    /**
     * Executes all tasks in the queue.
     * @returns {void}
     * @throws {CustomError} If a task is not a function.
     */
    runTasks() {
        for (const task of this.tasks) {
            if (typeof task !== "function") {
                throw new CustomError("Cannot run a " +
                    typeof task +
                    " as a function. \n This requires a function");
            }
            task();
        }
    }
    /**
     * Clears the queue.
     * @returns {void}
     */
    clearTasks() {
        this.tasks = [];
    }
    /**
     * Gets the number of tasks in the queue.
     * @returns {number} The number of tasks in the queue.
     */
    getTaskCount() {
        return this.tasks.length;
    }
}
/**
 * Parses and manipulates URLs.
 * @class UrlParser
 * @param {string} url - The URL to parse and manipulate.
 * @throws {CustomError} If the url is not a string.
 */
class UrlParser {
    parsedUrl;
    constructor(url) {
        if (typeof url !== "string") {
            throw new CustomError("url must be a string");
        }
        this.parsedUrl = new URL(url);
    }
    /**
     * Gets the URL path.
     * @returns {string} The URL path.
     */
    getPath() {
        return this.parsedUrl.pathname;
    }
    /**
     * Gets the query string.
     * @returns {string} The query string.
     */
    getQueryString() {
        return this.parsedUrl.search;
    }
    /**
     * Gets a specific query parameter.
     * @param {string} param - The query parameter to retrieve.
     * @returns {string|null} The value of the query parameter, or null if not found.
     */
    getQueryParameter(param) {
        return this.parsedUrl.searchParams.get(param);
    }
    /**
     * Builds a URL from its components.
     * @param {string} protocol - The URL protocol.
     * @param {string} hostname - The URL hostname.
     * @param {string} path - The URL path.
     * @param {Object.<string, string>} queryParams - The query parameters.
     * @returns {string} The built URL.
     */
    buildUrl(protocol, hostname, path, queryParams) {
        let url = this.parsedUrl;
        if (protocol && hostname) {
            url = new URL(protocol, hostname);
        }
        url.pathname = path;
        for (const [param, value] of Object.entries(queryParams)) {
            url.searchParams.append(param, value);
        }
        return url.toString();
    }
}
/**
 * Generates random numbers or strings.
 * @class Random
 */
class Random {
    /**
     * Generates a random number within a specified range.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} The generated random number.
     */
    number(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * Generates a random string with a specified length.
     * @param {number} length - The length of the random string.
     * @returns {string} The generated random string.
     */
    string(length) {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let str = "";
        for (let i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }
}
/**
 * Validates data.
 * @class DataValidator
 */
class DataValidator {
    /**
     * Checks if a value is within a certain range.
     * @param {number} value - The value to check.
     * @param {number} min - The minimum value of the range.
     * @param {number} max - The maximum value of the range.
     * @returns {boolean} true if the value is within the range, false otherwise.
     */
    inRange(value, min, max) {
        return value >= min && value <= max;
    }
    /**
     * Checks if a string matches a certain format.
     * @param {string} str - The string to check.
     * @param {RegExp} regex - The regular expression to match against.
     * @returns {boolean} true if the string matches the format, false otherwise.
     */
    matchFormat(str, regex) {
        return regex.test(str);
    }
    /**
     * Checks if a string has a certain length.
     * @param {string} str - The string to check.
     * @param {number} length - The required length of the string.
     * @returns {boolean} true if the string has the specified length, false otherwise.
     */
    hasLength(str, length) {
        return str.length === length;
    }
}
function trim(str) {
    // Use a regular expression to match leading and trailing whitespace
    const regex = /^\s+|\s+$/g;
    // Replace the matched whitespace with an empty string
    return str.replace(regex, "");
}



/***/ }),

/***/ "./dist/Operators/array.js":
/*!*********************************!*\
  !*** ./dist/Operators/array.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chunk": () => (/* binding */ chunk),
/* harmony export */   "concat": () => (/* binding */ concat),
/* harmony export */   "entries": () => (/* binding */ entries),
/* harmony export */   "every": () => (/* binding */ every),
/* harmony export */   "fill": () => (/* binding */ fill),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "findIndex": () => (/* binding */ findIndex),
/* harmony export */   "flatMap": () => (/* binding */ flatMap),
/* harmony export */   "flatten": () => (/* binding */ flatten),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "includes": () => (/* binding */ includes),
/* harmony export */   "indexOf": () => (/* binding */ indexOf),
/* harmony export */   "join": () => (/* binding */ join),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "lastIndexOf": () => (/* binding */ lastIndexOf),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "mean": () => (/* binding */ mean),
/* harmony export */   "median": () => (/* binding */ median),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "mode": () => (/* binding */ mode),
/* harmony export */   "reduce": () => (/* binding */ reduce),
/* harmony export */   "reverse": () => (/* binding */ reverse),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "slice": () => (/* binding */ slice),
/* harmony export */   "some": () => (/* binding */ some),
/* harmony export */   "sort": () => (/* binding */ sort),
/* harmony export */   "sum": () => (/* binding */ sum),
/* harmony export */   "unique": () => (/* binding */ unique),
/* harmony export */   "values": () => (/* binding */ values)
/* harmony export */ });
/**
 * Calculates the sum of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The sum of all the elements in the array.
 */
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
/**
 * Calculates the mean of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The mean of all the elements in the array.
 */
function mean(arr) {
    return sum(arr) / arr.length;
}
/**
 * Calculates the median of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The median of all the elements in the array.
 */
function median(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid] + arr[mid - 1]) / 2;
    }
    return arr[mid];
}
/**
 * Finds the mode of an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The mode of the input array.
 */
function mode(arr) {
    const count = {};
    arr.forEach((num) => {
        count[num] = (count[num] || 0) + 1;
    });
    const mode = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
    return parseInt(mode, 10);
}
/**
 * Filters the elements of an array based on a given predicate.
 * @param {Array} arr - The input array.
 * @param {Function} predicate - The predicate function used to filter the array.
 * @returns {Array} A new array containing only the elements that satisfy the predicate function.
 */
function filter(arr, predicate) {
    return arr.filter(predicate);
}
/**
 * Transforms each element of an array using a given mapper function.
 * @param {Array} arr - The input array.
 * @param {Function} mapper - The mapper function used to transform the elements.
 * @returns {Array} A new array containing the transformed elements.
 */
function map(arr, mapper) {
    return arr.map(mapper);
}
/**
 * Reduces an array to a single value using a given reducer function and an initial value.
 * @param {Array} arr - The input array.
 * @param {Function} reducer - The reducer function used to reduce the array.
 * @param {*} initialValue - The initial value used in the reduction.
 * @returns {*} The final reduced value.
 */
function reduce(arr, reducer, initialValue) {
    return arr.reduce(reducer, initialValue);
}
/**
 * Finds the maximum element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The maximum element of the array.
 */
function max(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].compareTo(maxElement) > 0) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}
/**
 * Finds the minimum element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The minimum element of the array.
 */
function min(arr) {
    return Math.min(...arr);
}
/**
 * Removes duplicate elements from an array.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array containing only the unique elements of the input array.
 */
function unique(arr) {
    return [...new Set(arr)];
}
/**
 * Flattens a nested array into a single-level array.
 * @param {Array} arr - The input array.
 * @returns {Array} A new, flattened array.
 */
function flatten(arr) {
    return arr.flat();
}
/**
 * Breaks an array into chunks of a given size.
 * @param {Array} arr - The input array.
 * @param {number} size - The size of each chunk.
 * @returns {Array} An array of chunks.
 */
function chunk(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
/**
 * Tests whether all elements in the array pass the predicate function.
 *
 * @param {Array} arr - The array to test.
 * @param {Function} predicate - The function used to test each element.
 * @returns {boolean} - True if all elements pass the predicate, false otherwise.
 */
function every(arr, predicate) {
    return arr.every(predicate);
}
/**
 * Tests whether at least one element in the array passes the predicate function.
 *
 * @param {Array} arr - The array to test.
 * @param {Function} predicate - The function used to test each element.
 * @returns {boolean} - True if at least one element passes the predicate, false otherwise.
 */
function some(arr, predicate) {
    return arr.some(predicate);
}
/**
 * Returns the first element in the array that passes the predicate function,
 * or undefined if no such element is found.
 *
 * @param {Array} arr - The array to search.
 * @param {Function} predicate - The function used to test each element.
 * @returns {*} - The first element that passes the predicate, or undefined if no such element is found.
 */
function find(arr, predicate) {
    return arr.find(predicate);
}
/**
 * Returns the index of the first element in the array that passes the predicate function,
 * or -1 if no such element is found.
 *
 * @param {Array} arr - The array to search.
 * @param {Function} predicate - The function used to test each element.
 * @returns {number} - The index of the first element that passes the predicate, or -1 if no such element is found.
 */
function findIndex(arr, predicate) {
    return arr.findIndex(predicate);
}
/**
 * Maps each element in the array to a new value using the provided mapper function,
 * and then flattens the result to a one-dimensional array.
 *
 * @param {Array} arr - The array to map.
 * @param {Function} mapper - The function used to map each element.
 * @returns {Array} - The flattened result of mapping each element.
 */
function flatMap(arr, mapper) {
    return arr.flatMap(mapper);
}
/**
 * Calls the provided callback function once for each element in the array,
 * in order, and passing the element as an argument to the callback.
 *
 * @param {Array} arr - The array to iterate over.
 * @param {Function} callback - The function to call for each element.
 */
function forEach(arr, callback) {
    arr.forEach(callback);
}
/**
 * Returns a new array containing the elements from the start index up to, but not including, the end index.
 *
 * @param {Array} arr - The array to slice.
 * @param {number} start - The start index.
 * @param {number} [end=arr.length] - The end index.
 * @returns {Array} - The sliced array.
 */
function slice(arr, start, end) {
    return arr.slice(start, end);
}
/**
 * Returns a new array with the elements sorted according to the provided comparator function.
 *
 * @function
 * @param {Array} arr - The array to sort.
 * @param {Function} comparator - The function that defines the sort order.
 * @returns {Array} A new array with the sorted elements.
 */
function sort(arr, comparator) {
    return arr.sort(comparator);
}
/**
 * Returns a Boolean indicating whether the given value is found in the array.
 *
 * @function
 * @param {Array} arr - The array to search.
 * @param {*} value - The value to search for.
 * @returns {boolean} `true` if the value is found, otherwise `false`.
 */
function includes(arr, value) {
    return arr.includes(value);
}
/**
 * Returns the index of the first occurrence of the given value in the array, or -1 if it is not found.
 *
 * @function
 * @param {Array} arr - The array to search.
 * @param {*} value - The value to search for.
 * @returns {number} The index of the first occurrence of the value, or -1 if it is not found.
 */
function indexOf(arr, value) {
    return arr.indexOf(value);
}
/**
 * Returns the index of the last occurrence of the given value in the array, or -1 if it is not found.
 *
 * @function
 * @param {Array} arr - The array to search.
 * @param {*} value - The value to search for.
 * @returns {number} The index of the last occurrence of the value, or -1 if it is not found.
 */
function lastIndexOf(arr, value) {
    return arr.lastIndexOf(value);
}
/**
 * Returns a new array with the elements in reverse order.
 *
 * @function
 * @param {Array} arr - The array to reverse.
 * @returns {Array} A new array with the elements in reverse order.
 */
function reverse(arr) {
    return arr.reverse();
}
/**
 * Joins all elements of an array into a string, with an optional separator.
 *
 * @function
 * @param {Array} arr - The array to join.
 * @param {string} separator - The separator to use between elements. Defaults to ',' if not provided.
 * @returns {string} A string that contains the joined elements.
 */
function join(arr, separator) {
    return arr.join(separator);
}
/**
 * Fills elements of an array with a static value.
 * @param {Array} arr - The input array.
 * @param {*} value - The static value to fill the array with.
 * @param {number} [start=0] - The index to start filling the array at.
 * @param {number} [end=arr.length] - The index to stop filling the array at.
 * @returns {Array} - The filled array.
 */
function fill(arr, value, start = 0, end = arr.length) {
    return arr.fill(value, start, end);
}
/**
 * Combines two or more arrays.
 * @param {Array} arr1 - The first array.
 * @param {...Array} arr2 - The arrays to concatenate.
 * @returns {Array} - The concatenated array.
 */
function concat(arr1, ...arr2) {
    return arr1.concat(...arr2);
}
/**
 * Returns an iterator that contains the keys for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains the keys for each index in the array.
 */
function keys(arr) {
    return arr.keys();
}
/**
 * Returns an iterator that contains the values for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains the values for each index in the array.
 */
function values(arr) {
    return arr.values();
}
/**
 * Returns an iterator that contains key/value pairs for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains key/value pairs for each index in the array.
 */
function entries(arr) {
    return arr.entries();
}



/***/ }),

/***/ "./dist/Operators/compare.js":
/*!***********************************!*\
  !*** ./dist/Operators/compare.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "greaterThan": () => (/* binding */ greaterThan),
/* harmony export */   "lessThan": () => (/* binding */ lessThan)
/* harmony export */ });
/**
 * Checks if two values are equal.
 * @param {*} a - The first value.
 * @param {*} b - The second value.
 * @returns {boolean} - True if the values are equal, false otherwise.
 */
function equals(a, b) {
    return a === b;
}
/**
 * Checks if the first value is greater than the second value.
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @returns {boolean} - True if the first value is greater than the second value, false otherwise.
 */
function greaterThan(a, b) {
    return a > b;
}
/**
 * Checks if the first value is less than the second value.
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @returns {boolean} - True if the first value is less than the second value, false otherwise.
 */
function lessThan(a, b) {
    return a < b;
}
/**
 * Performs a deep equality check between two objects or arrays.
 * @param {Object|Array} obj1 - The first object or array.
 * @param {Object|Array} obj2 - The second object or array.
 * @returns {boolean} - True if the objects or arrays are deeply equal, false otherwise.
 */
function deepEqual(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (typeof obj1 !== "object" || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }
    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}



/***/ }),

/***/ "./dist/Operators/logic.js":
/*!*********************************!*\
  !*** ./dist/Operators/logic.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "and": () => (/* binding */ and),
/* harmony export */   "iff": () => (/* binding */ iff),
/* harmony export */   "implies": () => (/* binding */ implies),
/* harmony export */   "nand": () => (/* binding */ nand),
/* harmony export */   "nor": () => (/* binding */ nor),
/* harmony export */   "not": () => (/* binding */ not),
/* harmony export */   "or": () => (/* binding */ or),
/* harmony export */   "xor": () => (/* binding */ xor)
/* harmony export */ });
/**
 * Returns true if all the conditions are truthy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if all conditions are truthy values, false otherwise.
 */
function and(...conditions) {
    return conditions.every(Boolean);
}
/**
 * Returns true if any of the conditions are truthy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if any condition is truthy value, false otherwise.
 */
function or(...conditions) {
    return conditions.some(Boolean);
}
/**
 * Returns the boolean negation of the condition.
 *
 * @param {*} condition - The condition to be negated.
 * @returns {boolean} The boolean negation of the condition.
 */
function not(condition) {
    return !condition;
}
/**
 * Returns true if an odd number of the conditions are truthy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if an odd number of conditions are truthy values, false otherwise.
 */
function xor(...conditions) {
    return conditions.filter(Boolean).length % 2 === 1;
}
/**
 * Returns true if any of the conditions are falsy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if any condition is falsy value, false otherwise.
 */
function nand(...conditions) {
    return !and(...conditions);
}
/**
 * Returns true if all of the conditions are falsy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if all conditions are falsy values, false otherwise.
 */
function nor(...conditions) {
    return !or(...conditions);
}
/**
 * Returns the value of a logical implication (a -> b).
 *
 * @param {*} a - The antecedent of the implication.
 * @param {*} b - The consequent of the implication.
 * @returns {boolean} The truth value of the implication.
 */
function implies(a, b) {
    return or(!a, b);
}
/**
 * Returns the value of a biconditional implication (a <-> b).
 *
 * @param {*} a - The first proposition of the biconditional.
 * @param {*} b - The second proposition of the biconditional.
 * @returns {boolean} The truth value of the biconditional.
 */
function iff(a, b) {
    return and(implies(a, b), implies(b, a));
}



/***/ }),

/***/ "./dist/Operators/maths.js":
/*!*********************************!*\
  !*** ./dist/Operators/maths.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "absoluteDifference": () => (/* binding */ absoluteDifference),
/* harmony export */   "absoluteValue": () => (/* binding */ absoluteValue),
/* harmony export */   "acos": () => (/* binding */ acos),
/* harmony export */   "acosh": () => (/* binding */ acosh),
/* harmony export */   "asin": () => (/* binding */ asin),
/* harmony export */   "asinh": () => (/* binding */ asinh),
/* harmony export */   "atan": () => (/* binding */ atan),
/* harmony export */   "atanh": () => (/* binding */ atanh),
/* harmony export */   "average": () => (/* binding */ average),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "cos": () => (/* binding */ cos),
/* harmony export */   "cosh": () => (/* binding */ cosh),
/* harmony export */   "exponentiate": () => (/* binding */ exponentiate),
/* harmony export */   "factorial": () => (/* binding */ factorial),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "gcd": () => (/* binding */ gcd),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "lcm": () => (/* binding */ lcm),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "log10": () => (/* binding */ log10),
/* harmony export */   "logarithm": () => (/* binding */ logarithm),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "naturalLogarithm": () => (/* binding */ naturalLogarithm),
/* harmony export */   "nthRoot": () => (/* binding */ nthRoot),
/* harmony export */   "power": () => (/* binding */ power),
/* harmony export */   "powerOf10": () => (/* binding */ powerOf10),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "randomInt": () => (/* binding */ randomInt),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "roundTo": () => (/* binding */ roundTo),
/* harmony export */   "sign": () => (/* binding */ sign),
/* harmony export */   "sin": () => (/* binding */ sin),
/* harmony export */   "sinh": () => (/* binding */ sinh),
/* harmony export */   "squareRoot": () => (/* binding */ squareRoot),
/* harmony export */   "sum": () => (/* binding */ sum),
/* harmony export */   "tan": () => (/* binding */ tan),
/* harmony export */   "tanh": () => (/* binding */ tanh),
/* harmony export */   "toDegrees": () => (/* binding */ toDegrees),
/* harmony export */   "toRadians": () => (/* binding */ toRadians)
/* harmony export */ });
/**
 * Clamps a value between a minimum and maximum range.
 * @param {number} value - The value to be clamped.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - The clamped value.
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Linearly interpolates between two values.
 * @param {number} a - The starting value.
 * @param {number} b - The ending value.
 * @param {number} t - The interpolation parameter.
 * @returns {number} - The interpolated value.
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}
/**
 * Converts an angle from degrees to radians.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The angle in radians.
 */
function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
/**
 * Converts an angle from radians to degrees.
 * @param {number} radians - The angle in radians.
 * @returns {number} - The angle in degrees.
 */
function toDegrees(radians) {
    return (radians * 180) / Math.PI;
}
/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} value - The number to be rounded.
 * @param {number} decimalPlaces - The number of decimal places to round to.
 * @returns {number} - The rounded value.
 */
function roundTo(value, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    return Math.round(value * factor) / factor;
}
/**
 * Generates a random integer between a minimum and maximum value.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The random integer.
 */
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the numbers.
 */
function sum(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The average of the numbers.
 */
function average(numbers) {
    const total = sum(numbers);
    return total / numbers.length;
}
/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number.
 * @returns {number} - The factorial of the number.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
/**
 * Calculates the power of a number.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of raising the base to the exponent.
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}
/**
 * Calculates the square root of a number.
 * @param {number} n - The number.
 * @returns {number} - The square root of the number.
 */
function squareRoot(n) {
    return Math.sqrt(n);
}
/**
 * Calculates the absolute value of a number.
 * @param {number} n - The number.
 * @returns {number} - The absolute value of the number.
 */
function absoluteValue(n) {
    return Math.abs(n);
}
/**
 * Calculates the maximum value among a set of numbers.
 * @param {...number} numbers - The numbers.
 * @returns {number} - The maximum value.
 */
function max(...numbers) {
    return Math.max(...numbers);
}
/**
 * Calculates the minimum value among a set of numbers.
 * @param {...number} numbers - The numbers.
 * @returns {number} - The minimum value.
 */
function min(...numbers) {
    return Math.min(...numbers);
}
/**
 * Rounds a number to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded integer.
 */
function round(n) {
    return Math.round(n);
}
/**
 * Calculates the sine of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The sine value.
 */
function sin(angle) {
    return Math.sin(angle);
}
/**
 * Calculates the cosine of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The cosine value.
 */
function cos(angle) {
    return Math.cos(angle);
}
/**
 * Calculates the tangent of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The tangent value.
 */
function tan(angle) {
    return Math.tan(angle);
}
/**
 * Calculates the arc sine (inverse sine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc sine value in radians.
 */
function asin(value) {
    return Math.asin(value);
}
/**
 * Calculates the arc cosine (inverse cosine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc cosine value in radians.
 */
function acos(value) {
    return Math.acos(value);
}
/**
 * Calculates the arc tangent (inverse tangent) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc tangent value in radians.
 */
function atan(value) {
    return Math.atan(value);
}
/**
 * Calculates the logarithm of a number with a specified base.
 * @param {number} n - The number.
 * @param {number} base - The logarithmic base.
 * @returns {number} - The logarithm value.
 */
function logarithm(n, base) {
    return Math.log(n) / Math.log(base);
}
/**
 * Calculates the exponential value of a number.
 * @param {number} n - The number.
 * @returns {number} - The exponential value.
 */
function exponentiate(n) {
    return Math.exp(n);
}
/**
 * Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 * @returns {number} - The random number.
 */
function random() {
    return Math.random();
}
/**
 * Checks if a number is an integer.
 * @param {number} n - The number.
 * @returns {boolean} - Whether the number is an integer.
 */
function isInteger(n) {
    return Number.isInteger(n);
}
/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The GCD of the two numbers.
 */
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The LCM of the two numbers.
 */
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
/**
 * Calculates the n-th root of a number.
 * @param {number} n - The number.
 * @param {number} root - The root value.
 * @returns {number} - The n-th root of the number.
 */
function nthRoot(n, root) {
    return Math.pow(n, 1 / root);
}
/**
 * Calculates the absolute difference between two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The absolute difference between the two numbers.
 */
function absoluteDifference(a, b) {
    return Math.abs(a - b);
}
/**
 * Calculates the natural logarithm (base e) of a number.
 * @param {number} n - The number.
 * @returns {number} - The natural logarithm value.
 */
function naturalLogarithm(n) {
    return Math.log(n);
}
/**
 * Calculates the base 10 logarithm of a number.
 * @param {number} n - The number.
 * @returns {number} - The base 10 logarithm value.
 */
function log10(n) {
    return Math.log10(n);
}
/**
 * Calculates the hyperbolic sine of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic sine value.
 */
function sinh(n) {
    return Math.sinh(n);
}
/**
 * Calculates the hyperbolic cosine of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic cosine value.
 */
function cosh(n) {
    return Math.cosh(n);
}
/**
 * Calculates the hyperbolic tangent of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic tangent value.
 */
function tanh(n) {
    return Math.tanh(n);
}
/**
 * Calculates the arc hyperbolic sine (inverse hyperbolic sine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic sine value.
 */
function asinh(value) {
    return Math.asinh(value);
}
/**
 * Calculates the arc hyperbolic cosine (inverse hyperbolic cosine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic cosine value.
 */
function acosh(value) {
    return Math.acosh(value);
}
/**
 * Calculates the arc hyperbolic tangent (inverse hyperbolic tangent) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic tangent value.
 */
function atanh(value) {
    return Math.atanh(value);
}
/**
 * Calculates the power of 10.
 * @param {number} exponent - The exponent.
 * @returns {number} - The power of 10.
 */
function powerOf10(exponent) {
    return Math.pow(10, exponent);
}
/**
 * Rounds a number up to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded up integer.
 */
function ceil(n) {
    return Math.ceil(n);
}
/**
 * Rounds a number down to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded down integer.
 */
function floor(n) {
    return Math.floor(n);
}
/**
 * Calculates the sign of a number.
 * @param {number} n - The number.
 * @returns {number} - The sign of the number (-1 for negative, 0 for zero, 1 for positive).
 */
function sign(n) {
    return Math.sign(n);
}


/***/ }),

/***/ "./dist/Operators/object.js":
/*!**********************************!*\
  !*** ./dist/Operators/object.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneDeep": () => (/* binding */ cloneDeep),
/* harmony export */   "cloneShallow": () => (/* binding */ cloneShallow),
/* harmony export */   "extendObject": () => (/* binding */ extendObject),
/* harmony export */   "filterProperties": () => (/* binding */ filterProperties),
/* harmony export */   "forEachProperty": () => (/* binding */ forEachProperty),
/* harmony export */   "getEntries": () => (/* binding */ getEntries),
/* harmony export */   "getKeys": () => (/* binding */ getKeys),
/* harmony export */   "getProperty": () => (/* binding */ getProperty),
/* harmony export */   "getValues": () => (/* binding */ getValues),
/* harmony export */   "hasProperty": () => (/* binding */ hasProperty),
/* harmony export */   "mapProperties": () => (/* binding */ mapProperties),
/* harmony export */   "setProperty": () => (/* binding */ setProperty)
/* harmony export */ });
/**
 * Returns the value at the specified key in the object.
 *
 * @param {Object} object - The object to retrieve the value from.
 * @param {string} key - The key to retrieve the value for.
 * @returns {*} The value at the specified key in the object.
 */
function getProperty(object, key) {
    return object[key];
}
/**
 * Sets the value at the specified key in the object.
 *
 * @param {Object} object - The object to set the value in.
 * @param {string} key - The key to set the value for.
 * @param {*} value - The value to set.
 */
function setProperty(object, key, value) {
    object[key] = value;
}
/**
 * Returns a boolean indicating whether the object has a property with the specified key.
 *
 * @param {Object} object - The object to check for the property.
 * @param {string} key - The key to check for.
 * @returns {boolean} Whether the object has the specified key.
 */
function hasProperty(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}
/**
 * Returns an array of the object's own enumerable property names.
 *
 * @param {Object} object - The object to get the keys for.
 * @returns {string[]} An array of the object's own enumerable property names.
 */
function getKeys(object) {
    return Object.keys(object);
}
/**
 * Returns an array of the object's own enumerable property values.
 *
 * @param {Object} object - The object to get the values for.
 * @returns {*[]} An array of the object's own enumerable property values.
 */
function getValues(object) {
    return Object.values(object);
}
/**
 * Returns an array of the object's own enumerable property [key, value] pairs.
 *
 * @param {Object} object - The object to get the entries for.
 * @returns {Array<[string, *]>} An array of the object's own enumerable property [key, value] pairs.
 */
function getEntries(object) {
    return Object.entries(object);
}
/**
 * Copies the own enumerable properties of source objects to the target object and returns the target object.
 *
 * @param {Object} object - The target object to extend.
 * @param {...Object} sources - The source objects to copy properties from.
 * @returns {Object} The extended target object.
 */
function extendObject(object, ...sources) {
    return Object.assign(object, ...sources);
}
/**
 * Creates a shallow copy of the object.
 *
 * @param {Object} object - The object to clone.
 * @returns {Object} A shallow copy of the object.
 */
function cloneShallow(object) {
    return Object.assign({}, object);
}
/**
 * Creates a deep copy of the object.
 *
 * @param {Object} object - The object to clone.
 * @returns {Object} A deep copy of the object.
 */
function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
}
/**
 * Calls the callback function for each own enumerable property of the object.
 *
 * @param {Object} object - The object to iterate over.
 * @param {forEachCallback} callback - The function to call for each property.
 * @callback forEachCallback
 * @param {*} value - The value of the current property.
 * @param {string} key - The key of the current property.
 * @param {Object} object - The object being iterated over.
 */
function forEachProperty(object, callback) {
    for (const [key, value] of Object.entries(object)) {
        callback(value, key, object);
    }
}
/**
 * Calls the callback function for each own enumerable property of the object and returns a new object with the returned values.
 *
 * @param {Object} object - The object to iterate over.
 * @param {Function} callback - The function to call for each property.
 * @param {any} callback.value - The value of the current property.
 * @param {string} callback.key - The key of the current property.
 * @param {Object} callback.object - The object being iterated.
 * @returns {Object} - A new object with the returned values.
 */
function mapProperties(object, callback) {
    const result = {};
    for (const [key, value] of Object.entries(object)) {
        result[key] = callback(value, key, object);
    }
    return result;
}
/**
 * Calls the callback function for each own enumerable property of the object and returns a new object with the properties for which the callback returned a truthy value.
 *
 * @param {Object} object - The object to iterate over.
 * @param {Function} callback - The function to call for each property.
 * @param {any} callback.value - The value of the current property.
 * @param {string} callback.key - The key of the current property.
 * @param {Object} callback.object - The object being iterated.
 * @returns {Object} - A new object with the properties for which the callback returned a truthy value.
 */
function filterProperties(object, callback) {
    const result = {};
    for (const [key, value] of Object.entries(object)) {
        if (callback(value, key, object)) {
            result[key] = value;
        }
    }
    return result;
}



/***/ }),

/***/ "./dist/Operators/string.js":
/*!**********************************!*\
  !*** ./dist/Operators/string.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "capitalizeWords": () => (/* binding */ capitalizeWords),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "countOccurrences": () => (/* binding */ countOccurrences),
/* harmony export */   "countWords": () => (/* binding */ countWords),
/* harmony export */   "endsWith": () => (/* binding */ endsWith),
/* harmony export */   "extractNumbers": () => (/* binding */ extractNumbers),
/* harmony export */   "generateRandomString": () => (/* binding */ generateRandomString),
/* harmony export */   "isAlphanumericPalindrome": () => (/* binding */ isAlphanumericPalindrome),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isPalindrome": () => (/* binding */ isPalindrome),
/* harmony export */   "isValidCreditCardNumber": () => (/* binding */ isValidCreditCardNumber),
/* harmony export */   "isValidEmail": () => (/* binding */ isValidEmail),
/* harmony export */   "isValidHexColor": () => (/* binding */ isValidHexColor),
/* harmony export */   "isValidPassword": () => (/* binding */ isValidPassword),
/* harmony export */   "isValidPhoneNumber": () => (/* binding */ isValidPhoneNumber),
/* harmony export */   "isValidUrl": () => (/* binding */ isValidUrl),
/* harmony export */   "isValidUsername": () => (/* binding */ isValidUsername),
/* harmony export */   "maskCreditCardNumber": () => (/* binding */ maskCreditCardNumber),
/* harmony export */   "padString": () => (/* binding */ padString),
/* harmony export */   "removeDuplicates": () => (/* binding */ removeDuplicates),
/* harmony export */   "removeNonAlphanumeric": () => (/* binding */ removeNonAlphanumeric),
/* harmony export */   "removeSubstring": () => (/* binding */ removeSubstring),
/* harmony export */   "removeWhitespace": () => (/* binding */ removeWhitespace),
/* harmony export */   "replaceAll": () => (/* binding */ replaceAll),
/* harmony export */   "reverse": () => (/* binding */ reverse),
/* harmony export */   "reverseWords": () => (/* binding */ reverseWords),
/* harmony export */   "splitString": () => (/* binding */ splitString),
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "toCamelCase": () => (/* binding */ toCamelCase),
/* harmony export */   "toKebabCase": () => (/* binding */ toKebabCase),
/* harmony export */   "toLowerCase": () => (/* binding */ toLowerCase),
/* harmony export */   "toSlug": () => (/* binding */ toSlug),
/* harmony export */   "toSnakeCase": () => (/* binding */ toSnakeCase),
/* harmony export */   "toTitleCase": () => (/* binding */ toTitleCase),
/* harmony export */   "toUpperCase": () => (/* binding */ toUpperCase),
/* harmony export */   "trim": () => (/* binding */ trim),
/* harmony export */   "truncate": () => (/* binding */ truncate)
/* harmony export */ });
/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} - The capitalized string.
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Reverses a string.
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 */
function reverse(str) {
    return str.split('').reverse().join('');
}
/**
 * Truncates a string to a specified length and appends an ellipsis if necessary.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length of the truncated string.
 * @returns {string} - The truncated string.
 */
function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + '...';
}
/**
 * Checks if a string starts with a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string starts with the substring.
 */
function startsWith(str, substring) {
    return str.startsWith(substring);
}
/**
 * Checks if a string ends with a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string ends with the substring.
 */
function endsWith(str, substring) {
    return str.endsWith(substring);
}
/**
 * Checks if a string contains a specified substring.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to check.
 * @returns {boolean} - Whether the string contains the substring.
 */
function contains(str, substring) {
    return str.includes(substring);
}
/**
 * Replaces all occurrences of a substring in a string with a new substring.
 * @param {string} str - The input string.
 * @param {string} searchValue - The substring to search for.
 * @param {string} replaceValue - The substring to replace with.
 * @returns {string} - The string with replaced substrings.
 */
function replaceAll(str, searchValue, replaceValue) {
    return str.split(searchValue).join(replaceValue);
}
/**
 * Converts the first character of each word in a string to uppercase.
 * @param {string} str - The input string.
 * @returns {string} - The string with each word capitalized.
 */
function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}
/**
 * Counts the number of occurrences of a substring in a string.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to count.
 * @returns {number} - The number of occurrences of the substring.
 */
function countOccurrences(str, substring) {
    const regex = new RegExp(substring, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}
/**
 * Removes leading and trailing whitespace from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with leading and trailing whitespace removed.
 */
function trim(str) {
    return str.trim();
}
/**
 * Checks if a string is empty (contains only whitespace).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is empty.
 */
function isEmpty(str) {
    return str.trim() === '';
}
/**
 * Checks if a string is a palindrome (reads the same forward and backward).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a palindrome.
 */
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
/**
 * Converts a string to title case (each word starts with an uppercase letter).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to title case.
 */
function toTitleCase(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}
/**
 * Extracts the numbers from a string and returns them as an array.
 * @param {string} str - The input string.
 * @returns {number[]} - An array of numbers extracted from the string.
 */
function extractNumbers(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);
    return matches ? matches.map(Number) : [];
}
/**
 * Removes all whitespace from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with whitespace removed.
 */
function removeWhitespace(str) {
    return str.replace(/\s/g, '');
}
/**
 * Converts a string to lowercase.
 * @param {string} str - The input string.
 * @returns {string} - The string converted to lowercase.
 */
function toLowerCase(str) {
    return str.toLowerCase();
}
/**
 * Converts a string to uppercase.
 * @param {string} str - The input string.
 * @returns {string} - The string converted to uppercase.
 */
function toUpperCase(str) {
    return str.toUpperCase();
}
/**
 * Checks if a string is a valid email address.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid email address.
 */
function isValidEmail(str) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
}
/**
 * Reverses the order of words in a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with reversed word order.
 */
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
/**
 * Removes a specified substring from a string.
 * @param {string} str - The input string.
 * @param {string} substring - The substring to remove.
 * @returns {string} - The string with the substring removed.
 */
function removeSubstring(str, substring) {
    return str.replace(substring, '');
}
/**
 * Checks if a string is a valid URL.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid URL.
 */
function isValidUrl(str) {
    const regex = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return regex.test(str);
}
/**
 * Checks if a string is a valid phone number.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid phone number.
 */
function isValidPhoneNumber(str) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(str);
}
/**
 * Converts a string to kebab case (lowercase letters separated by hyphens).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to kebab case.
 */
function toKebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}
/**
 * Counts the number of words in a string.
 * @param {string} str - The input string.
 * @returns {number} - The number of words in the string.
 */
function countWords(str) {
    const words = str.split(/\s+/);
    return words.length;
}
/**
 * Pads a string with a specified character to a specified length.
 * @param {string} str - The input string.
 * @param {number} length - The desired length of the padded string.
 * @param {string} char - The character used for padding.
 * @returns {string} - The padded string.
 */
function padString(str, length, char) {
    if (str.length >= length) {
        return str;
    }
    const padding = char.repeat(length - str.length);
    return str + padding;
}
/**
 * Converts a string to snake case (lowercase letters separated by underscores).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to snake case.
 */
function toSnakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}
/**
 * Checks if a string is a valid password.
 * Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid password.
 */
function isValidPassword(str) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(str);
}
/**
 * Converts a string to camel case (lowercase letters with the first letter of each subsequent word capitalized).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to camel case.
 */
function toCamelCase(str) {
    const words = str.split(/\s+/);
    const capitalizedWords = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return capitalize(word);
    });
    return capitalizedWords.join('');
}
/**
 * Removes all non-alphanumeric characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with non-alphanumeric characters removed.
 */
function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}
/**
 * Checks if a string is a valid username.
 * Username must be alphanumeric and can contain underscores and hyphens.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid username.
 */
function isValidUsername(str) {
    const regex = /^[a-zA-Z0-9_-]+$/;
    return regex.test(str);
}
/**
 * Splits a string into an array of substrings using a specified delimiter.
 * @param {string} str - The input string.
 * @param {string} delimiter - The delimiter used for splitting the string.
 * @returns {string[]} - An array of substrings.
 */
function splitString(str, delimiter) {
    return str.split(delimiter);
}
/**
 * Checks if a string is a valid credit card number.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid credit card number.
 */
function isValidCreditCardNumber(str) {
    const regex = /^(?:\d{4}-){3}\d{4}$|^\d{16}$/;
    return regex.test(str);
}
/**
 * Removes duplicate characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with duplicate characters removed.
 */
function removeDuplicates(str) {
    return Array.from(new Set(str)).join('');
}
/**
 * Converts a string to a slug (lowercase letters separated by hyphens).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to a slug.
 */
function toSlug(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
/**
 * Checks if a string is a valid hexadecimal color code (e.g., #FFFFFF).
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a valid hexadecimal color code.
 */
function isValidHexColor(str) {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(str);
}
/**
 * Masks a credit card number by replacing all but the last four digits with asterisks.
 * @param {string} str - The input string (credit card number).
 * @returns {string} - The masked credit card number.
 */
function maskCreditCardNumber(str) {
    const lastFourDigits = str.slice(-4);
    const maskedDigits = '*'.repeat(str.length - 4);
    return maskedDigits + lastFourDigits;
}
/**
 * Generates a random alphanumeric string of a specified length.
 * @param {number} length - The desired length of the generated string.
 * @returns {string} - The randomly generated alphanumeric string.
 */
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
/**
 * Checks if a string is a palindrome when only considering alphanumeric characters and ignoring case.
 * @param {string} str - The input string.
 * @returns {boolean} - Whether the string is a alphanumeric palindrome.
 */
function isAlphanumericPalindrome(str) {
    const alphanumericStr = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}


/***/ }),

/***/ "./dist/Operators/type-check.js":
/*!**************************************!*\
  !*** ./dist/Operators/type-check.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isNaN": () => (/* binding */ isNaN),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "parseFloat": () => (/* binding */ parseFloat),
/* harmony export */   "parseInt": () => (/* binding */ parseInt)
/* harmony export */ });
/**
 * Checks if a value is an integer.
 * @param {*} num - The value to check.
 * @returns {boolean} - True if the value is an integer, false otherwise.
 */
function isInteger(num) {
    return Number.isInteger(num);
}
/**
 * Checks if a value is a string.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is a string, false otherwise.
 */
function isString(val) {
    return typeof val === 'string';
}
/**
 * Checks if a value is an array.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is an array, false otherwise.
 */
function isArray(val) {
    return Array.isArray(val);
}
/**
 * Checks if a value is an object.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is an object, false otherwise.
 */
function isObject(val) {
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
}
/**
 * Checks if a value is a function.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is a function, false otherwise.
 */
function isFunction(val) {
    return typeof val === 'function';
}
/**
 * Checks if a value is a boolean.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is a boolean, false otherwise.
 */
function isBoolean(val) {
    return typeof val === 'boolean';
}
/**
 * Checks if a value is NaN (not a number).
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is NaN, false otherwise.
 */
function isNaN(value) {
    return Number.isNaN(value);
}
/**
 * Converts a string to an integer.
 * @param {string} str - The string to convert.
 * @param {number} radix - The radix used for parsing (optional).
 * @returns {number} - The parsed integer value.
 */
function parseInt(str, radix) {
    return Number.parseInt(str, radix);
}
/**
 * Converts a string to a floating-point number.
 * @param {string} str - The string to convert.
 * @returns {number} - The parsed floating-point number value.
 */
function parseFloat(str) {
    return Number.parseFloat(str);
}



/***/ }),

/***/ "./dist/Operators/value-check.js":
/*!***************************************!*\
  !*** ./dist/Operators/value-check.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEven": () => (/* binding */ isEven),
/* harmony export */   "isFractional": () => (/* binding */ isFractional),
/* harmony export */   "isNegative": () => (/* binding */ isNegative),
/* harmony export */   "isOdd": () => (/* binding */ isOdd),
/* harmony export */   "isPositive": () => (/* binding */ isPositive),
/* harmony export */   "isPrime": () => (/* binding */ isPrime),
/* harmony export */   "isWhole": () => (/* binding */ isWhole),
/* harmony export */   "isZero": () => (/* binding */ isZero)
/* harmony export */ });
/**
 * Checks if a number is positive.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is positive, false otherwise.
 */
function isPositive(num) {
    return num > 0;
}
/**
 * Checks if a number is negative.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is negative, false otherwise.
 */
function isNegative(num) {
    return num < 0;
}
/**
 * Checks if a number is zero.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is zero, false otherwise.
 */
function isZero(num) {
    return num === 0;
}
/**
 * Checks if a number is even.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
function isEven(num) {
    return num % 2 === 0;
}
/**
 * Checks if a number is odd.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is odd, false otherwise.
 */
function isOdd(num) {
    return num % 2 === 1;
}
/**
 * Checks if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
/**
 * Checks if a number is a whole number.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a whole number, false otherwise.
 */
function isWhole(num) {
    return Number.isInteger(num);
}
/**
 * Checks if a number is a fractional number.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a fractional number, false otherwise.
 */
function isFractional(num) {
    return num % 1 !== 0;
}



/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Core": () => (/* reexport module object */ _Core_index_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "Http": () => (/* reexport safe */ _Core_http_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "array": () => (/* reexport module object */ _Operators_array_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "compare": () => (/* reexport module object */ _Operators_compare_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "esFetch": () => (/* reexport safe */ _Core_http_2_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "logic": () => (/* reexport module object */ _Operators_logic_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "maths": () => (/* reexport module object */ _Operators_maths_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "object": () => (/* reexport module object */ _Operators_object_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "strings": () => (/* reexport module object */ _Operators_string_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "typeCheck": () => (/* reexport module object */ _Operators_type_check_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "valueCheck": () => (/* reexport module object */ _Operators_value_check_js__WEBPACK_IMPORTED_MODULE_10__)
/* harmony export */ });
/* harmony import */ var _Core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/index.js */ "./dist/Core/index.js");
/* harmony import */ var _Core_http_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/http.js */ "./dist/Core/http.js");
/* harmony import */ var _Core_http_2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/http-2.js */ "./dist/Core/http-2.js");
/* harmony import */ var _Operators_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Operators/array.js */ "./dist/Operators/array.js");
/* harmony import */ var _Operators_maths_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Operators/maths.js */ "./dist/Operators/maths.js");
/* harmony import */ var _Operators_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Operators/string.js */ "./dist/Operators/string.js");
/* harmony import */ var _Operators_compare_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Operators/compare.js */ "./dist/Operators/compare.js");
/* harmony import */ var _Operators_logic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Operators/logic.js */ "./dist/Operators/logic.js");
/* harmony import */ var _Operators_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Operators/object.js */ "./dist/Operators/object.js");
/* harmony import */ var _Operators_type_check_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Operators/type-check.js */ "./dist/Operators/type-check.js");
/* harmony import */ var _Operators_value_check_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Operators/value-check.js */ "./dist/Operators/value-check.js");











if (true) {
    console.warn('You are now running UtilitiJs in development Mode', 'Happy Hacking 🎉');
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/index.js */ "./dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_dist_index_js__WEBPACK_IMPORTED_MODULE_0__);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});