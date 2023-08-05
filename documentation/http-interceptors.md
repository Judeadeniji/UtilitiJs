# Documentation: Interceptor Features of the `Http` Class

The `Http` class provides powerful interceptor features that allow you to modify and intercept HTTP requests and responses. Interceptors are functions that can be registered globally or scoped to specific requests, providing extensive customization and flexibility to your HTTP communication. The `Http` class includes four methods related to interceptors:

1. `addInterceptor`
2. `useInterceptors`
3. `addScopedInterceptor`
4. `useScopedInterceptors`

## 1. `addInterceptor`

### Overview

The `addInterceptor` method is used to add a global interceptor function to the list of request interceptors. A global interceptor applies to all requests made through the `Http` class instance, regardless of the method or URL.

### Method Signature

```typescript
addInterceptor(interceptor: (request: HttpRequest, next: HttpNext) => Promise<HttpRequest>): void;
```

### Parameters

- `interceptor` (Function): The interceptor function to be added. It takes two parameters:
  - `request` (HttpRequest): The request object containing information about the HTTP request (method, URL, data, headers, etc.).
  - `next` (HttpNext): A function that must be called inside the interceptor to proceed with the request. It returns a Promise that resolves to the modified request.

### Usage

```javascript
// Example of adding a global interceptor
http.addInterceptor(async (request, next) => {
  // Perform some modifications to the request, e.g., adding an authorization header
  request.header['Authorization'] = 'Bearer myAuthToken';
  
  // Proceed with the request by calling the 'next' function
  return next(request);
});
```

## 2. `useInterceptors`

### Overview

The `useInterceptors` method is used to add an array of interceptor functions as global interceptors. This method allows you to register multiple global interceptors at once, making it easy to apply a set of common functionalities to all requests.

### Method Signature

```typescript
useInterceptors(interceptors: Function[]): void;
```

### Parameters

- `interceptors` (Function[]): An array of interceptor functions to be added as global interceptors.

### Usage

```javascript
// Example of using multiple global interceptors
const loggingInterceptor = (request, next) => {
  console.log(`Sending ${request.method} request to ${request.url}`);
  return next(request);
};

const authInterceptor = (request, next) => {
  request.header['Authorization'] = 'Bearer myAuthToken';
  return next(request);
};

// Register the interceptors as global interceptors
http.useInterceptors([loggingInterceptor, authInterceptor]);
```

## 3. `addScopedInterceptor`

### Overview

The `addScopedInterceptor` method is used to add a scoped interceptor function to the list of request interceptors. A scoped interceptor applies only to requests that match specific criteria, such as a particular HTTP method and URL.

### Method Signature

```typescript
addScopedInterceptor(
  interceptor: (request: HttpRequest, next: HttpNext) => Promise<HttpRequest>,
): void;
```

### Parameters

- `interceptor` (Function): The interceptor function to be added. It takes two parameters:
  - `request` (HttpRequest): The request object containing information about the HTTP request (method, URL, data, headers, etc.).
  - `next` (HttpNext): A function that must be called inside the interceptor to proceed with the request. It returns a Promise that resolves to the modified request.

### Usage

```javascript
// Example of adding a scoped interceptor for a specific request
http.addScopedInterceptor(async (request, next) => {
  if (request.method === 'POST' && request.url.includes('/data')) {
    // Modify the request for specific POST requests to /data
    request.header['Content-Type'] = 'application/json';
  }
  
  // Proceed with the request by calling the 'next' function
  return next(request);
});
```

## 4. `useScopedInterceptors`

### Overview

The `useScopedInterceptors` method is used to add an array of interceptor functions as scoped interceptors. Scoped interceptors apply only to requests that match specific criteria, such as particular HTTP methods and URLs.

### Method Signature

```typescript
useScopedInterceptors(
  interceptors: Function[],
  method: string,
  url: string,
): void;
```

### Parameters

- `interceptors` (Function[]): An array of interceptor functions to be added as scoped interceptors.
- `method` (string): The HTTP method of the request that the interceptors should be scoped to (e.g., 'GET', 'POST', 'PUT', etc.).
- `url` (string): The URL of the request that the interceptors should be scoped to.

### Usage

```javascript
// Example of using scoped interceptors for specific requests
const loggingInterceptor = (request, next) => {
  console.log(`Sending ${request.method} request to ${request.url}`);
  return next(request);
};

const authInterceptor = (request, next) => {
  request.header['Authorization'] = 'Bearer myAuthToken';
  return next(request);
};

// Register the interceptors as scoped interceptors for specific requests
http.useScopedInterceptors([loggingInterceptor], 'GET', 'https://api.example.com/data');
http.useScopedInterceptors([authInterceptor], 'POST', 'https://api.example.com/user');
```

## Note

- Interceptor functions must always call the `next` function to proceed with the request. Otherwise, the request will be blocked and not executed.

- When using interceptors, be cautious about making changes to the request object, as it may affect the proper functioning of the `Http` class.

- Interceptors can be used for various purposes, such as adding authentication headers, logging requests, modifying data, handling errors, etc.

- Make sure to thoroughly test the behavior of interceptors in your application to ensure they work as expected.

For more details on using interceptors and the `Http` class, refer to the main documentation or comments within the code.