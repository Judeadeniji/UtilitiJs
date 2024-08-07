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
  (request: { method: string; url: string; options: RequestOptions }, response: ResponseData): void;
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
  request?: (request: { method: string; url: string; options: RequestOptions }) => Promise<RequestOptions>;

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
class Request {
  private url: string;
  private methods: { method: string; callback: RequestCallback; options: RequestOptions }[];
  private interceptors: Interceptor[];
  private finish: (args: Array<object>) => any;
  private catchFn: (error: Error) => any;

  /**
   * Create a new Request instance.
   * @param url - The URL for the requests.
   */
  constructor(url: string) {
    this.url = url;
    this.methods = [];
    this.interceptors = [];
    this.finish = () => {};
    this.catchFn = (error) => console.error(error);
  }

  /**
   * Add an interceptor to the request.
   * @param interceptor - The interceptor object.
   * @returns The modified Request instance.
   */
  useInterceptor(interceptor: Interceptor): Request {
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
  addMethod(method: string, callback: RequestCallback, options: RequestOptions): Request {
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
  get(callback: RequestCallback, options: RequestOptions = {}): Request {
    return this.addMethod('GET', callback, options);
  }

  /**
   * Add a PUT request.
   * @param callback - The callback function to handle the response.
   * @param options - The additional options for the request.
   * @returns The modified Request instance.
   */
  put(callback: RequestCallback, options: RequestOptions = {}): Request {
    return this.addMethod('PUT', callback, options);
  }

  /**
   * Add a POST request.
   * @param callback - The callback function to handle the response.
   * @param options - The additional options for the request.
   * @returns The modified Request instance.
   */
  post(callback: RequestCallback, options: RequestOptions = {}): Request {
    return this.addMethod('POST', callback, options);
  }

  /**
   * Add a PATCH request.
   * @param callback - The callback function to handle the response.
   * @param options - The additional options for the request.
   * @returns The modified Request instance.
   */
  patch(callback: RequestCallback, options: RequestOptions = {}): Request {
    return this.addMethod('PATCH', callback, options);
  }

  /**
   * Add a DELETE request.
   * @param callback - The callback function to handle the response.
   * @param options - The additional options for the request.
   * @returns The modified Request instance.
   */
  delete(callback: RequestCallback, options: RequestOptions = {}): Request {
    return this.addMethod('DELETE', callback, options);
  }

  /**
   * Send all the added requests.
   */
  send(): void {
    const requests = this.methods.map(async ({ method, callback, options }, index) => {
      // Apply request interceptors
      let requestOptions: RequestOptions = {
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
  onend(callback: (args: Array<object>) => any): this {
    this.finish = callback;
    return this;
  }

  /**
   * Set the callback function to be called when an error occurs during the requests.
   * @param callback - The function to call when an error occurs.
   * @returns The modified Request instance.
   */
  onerror(callback: (error: Error) => any): this {
    this.catchFn = callback;
    return this;
  }
}

/**
 * Create a new Request instance.
 * @param url - The URL for the requests.
 * @returns A new Request instance.
 */
function esFetch(url: string): Request {
  return new Request(url);
}

export default esFetch;
