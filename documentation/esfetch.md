# esFetch Documentation

`esFetch` is a JavaScript module that provides a simple and flexible way to make HTTP requests. It allows you to define multiple requests, set request options, handle responses, and apply interceptors for modifying requests and responses. This documentation will explain the importance of `esFetch`, highlight its pros and cons, and provide a Todo app example.

## Table of Contents

- [Usage](#usage)
- [Options](#options)
- [Interceptors](#interceptors)
- [Methods](#methods)
- [Sending Requests](#sending-requests)
- [Events](#events)
- [Examples](#examples)
- [Pros and Cons](#pros-and-cons)

## Usage

To use `esFetch`, you need to import it into your project:

```javascript
import { esFetch } from 'utiliti-js';
```

## Options

`esFetch` supports the following options for a request:

- `method` (string): The HTTP method for the request. Defaults to `'GET'`.
- `headers` (Record<string, string>): Additional headers to include in the request.
- `data` (any): The data to send with the request.
- `signal` (AbortSignal): An `AbortSignal` object that can be used to abort the request.

## Interceptors

Interceptors allow you to modify requests and responses before they are sent or received. The interceptor object has the following methods:

- `request` (function): Called before sending the request. It takes the request object as a parameter and should return a promise that resolves to the modified request options.
- `response` (function): Called after receiving the response. It takes the response data as a parameter and should return a promise that resolves when the response handling is complete.
- `error` (function): Called when an error occurs. It takes the error object as a parameter and should return a promise that resolves when the error handling is complete.

## Methods

`esFetch` provides several methods for different HTTP request types:

- `get(callback: RequestCallback, options?: RequestOptions): Request`: Adds a GET request.
- `put(callback: RequestCallback, options?: RequestOptions): Request`: Adds a PUT request.
- `post(callback: RequestCallback, options?: RequestOptions): Request`: Adds a POST request.
- `patch(callback: RequestCallback, options?: RequestOptions): Request`: Adds a PATCH request.
- `delete(callback: RequestCallback, options?: RequestOptions): Request`: Adds a DELETE request.

The `callback` parameter is a function that handles the request and response.

## Sending Requests

To send a specific request or all added requests, you can use the `send()` method.

To send all added requests, call the `send()` method on the `esFetch` instance:

```javascript
esFetch('https://api.example.com')
  .get((request, response) => {
    // Handle the response
  })
  .post((request, response) => {
    // Handle the response
  })
  .put((request, response) => {
    // Handle the response
  })
  .patch((request, response) => {
    // Handle the response
  })
  .delete((request, response) => {
    // Handle the response
  })
  .send();
```

Alternatively, if you want to send a specific request, you can call `send()` directly on that request:

```javascript
const server = esFetch('https://api.example.com');

server.get((request, response) => {
  // Handle the response
}).send();
```

In these examples

, we create an `esFetch` instance with the base URL `https://api.example.com`. We can use various methods such as `get()`, `post()`, `put()`, `patch()`, and `delete()` to add requests. By calling `send()` on the `esFetch` instance, we send all added requests simultaneously. Alternatively, we can call `send()` directly on a specific request object to trigger that request individually.

The `send()` method initiates the actual execution of the requests and triggers the associated callbacks for each request.

Please note that if `send()` is called multiple times, it will send the requests multiple times. Ensure that you call `send()` when you are ready to send the requests.

## Events

`esFetch` provides two methods for events:

- `onend(callback: (args: Array<object>) => any): this`: Uses the callback function when all requests are successfully completed.
- `onerror(callback: (error: Error) => any): this`: Uses the callback function when an error occurs during the requests.

## Examples

Here are some examples of how to use `esFetch` with TypeScript:

### Making a GET request

```typescript
esFetch('https://api.example.com')
  .get((request, response) => {
    console.log(response.status);
    response.json().then((data) => {
      console.log(data);
    });
  })
  .send();
```

### Adding headers and data

```typescript
const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer token',
  },
  data: { name: 'John Doe' },
};

esFetch('https://api.example.com')
  .post((request, response) => {
    console.log(response.statusText);
  }, options)
  .send();
```

### Using interceptors

Use the `useInterceptor()` method to add an interceptor Object. You can use as many interceptors as needed

```javascript
const requestInterceptor = async (request) => {
  // Modify request options
  request.options.headers['X-Auth-Token'] = 'token';
  // always return the request
  return request.options;
};

const responseInterceptor = async (response) => {
  // Modify response data
  const text = await response.text();
  console.log('Response text:', text);
};

const errorInterceptor = async (error) => {
  // Handle errors
  console.error('Request error:', error);
};

esFetch('https://api.example.com')
  .useInterceptor({
    request: requestInterceptor,
    response: responseInterceptor,
    error: errorInterceptor,
  })
  .get((request, response) => {
    console.log(response.status);
  })
  .send();
```

## Examples

### Backend Example Using esFetch

Here's an example of how to use `esFetch` on the backend using Node.js:

```javascript
const { esFetch } = require('utiliti-js');

const apiUrl = 'https://api.example.com';

esFetch(apiUrl)
  .get((request, response) => {
    // Handle the response
  })
  .send();
```


### Todo App Example Using Svelte

```html
<!-- TodoApp.svelte -->
<script>
  import { onMount } from 'svelte';
  import { esFetch } from 'utiliti-js';

  let todos = [];

  const api = esFetch('https://api.example.com/todos');

  api.onend(() => {
    console.log('All requests completed successfully');
  });

  api.onerror((error) => {
    console.error('An error occurred during the requests:', error);
  });

  async function fetchTodos() {
    try {
      const response = await api.get(async (request, response) => {
        todos = await response.json();
      }).send();
    } catch (error) {
      console.error('Error retrieving todos:', error);
    }
  }

  onMount(fetchTodos);

  async function addTodo() {
    const newTodo = {
      title: 'New Todo',
      completed: false,
    };

    try {
      const response = await api.post(async (request, response) => {
        const addedTodo = await response.json();
        todos = [...todos, addedTodo];
      }, { data: newTodo }).send();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }
</script>

<h1>Todos</h1>

<ul>
  {#each todos as todo (todo.id)}
    <li>{todo.title}</li>
  {/each}
</ul>

<button on:click={addTodo}>Add Todo</button>
```

In this example, we use `esFetch` to perform GET and POST requests to retrieve and add todos to a Todo app built with Svelte.


### Using an Interceptor with AbortController to Conditionally Cancel a Request

```javascript
const { esFetch } = require('utiliti-js');

const apiUrl = 'https://api.example.com';


 const abortController = new AbortController();
esFetch(apiUrl)
  .useInterceptor({
    request: async (request) => {
      // using the interceptor to modify the request object
      request.options.signal = abortController.signal;
      // Conditionally cancel the request
      if (shouldCancelRequest) {
        abortController.abort();
      }
      return request.options;
    },
  })
  .get((request, response) => {
    // Handle the response
  }, /*{ signal: abortController.signal }*/)
  .send();
```


## Pros and Cons

### Pros

- Simple and flexible API for making HTTP requests.
- Supports different HTTP methods: GET, POST, PUT, PATCH, DELETE.
- Works on all environment server (Nodejs) and browsers.
- Supports all data types like blobs, files, multi-part forms.
- Allows chaining multiple requests together.
- Provides options for setting headers and sending data with requests.
- Supports interceptors for modifying requests and responses.
- Works with modern JavaScript frameworks and libraries.

### Cons

- Requires a modern JavaScript environment (ES6+).
- May require additional dependencies in certain frameworks.
- Doesn't Support older browser (You can use a fetch() polyfill to solve that).

That concludes the documentation for `esFetch`. Feel free to explore and experiment with the different features and options to make HTTP requests in your JavaScript projects.