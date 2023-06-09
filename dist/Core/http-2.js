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
export default esFetch;
