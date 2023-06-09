# esFetch Documentation

`esFetch` is a JavaScript module that provides a simple and flexible way to make HTTP requests. It allows you to define multiple requests, set request options, handle responses, and apply interceptors for modifying requests and responses. This documentation will explain the importance of `esFetch`, highlight its pros and cons, and provide a Todo app example.

## Table of Contents

- [Usage](#usage)
- [Options](#options)
- [Interceptors](#interceptors)
- [Methods](#methods)
- [Sending Requests](#sending-requests)
- [Callbacks](#callbacks)
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

To send all the added requests, call the `send` method:

```javascript
esFetch('https://api.example.com')
  .get((request, response) => {
    // Handle the response
  })
  .post((request, response) => {
    // Handle the response
  })
  .send();
```

## Callbacks

`esFetch` provides two methods for setting callbacks:

- `onend(callback: (args: Array<object>) => any): this`: Sets the callback function to be called when all requests are successfully completed.
- `onerror(callback: (error: Error) => any): this`: Sets the callback function to be called when an error occurs during the requests.

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
``

`

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

```javascript
const requestInterceptor = async (request) => {
  // Modify request options
  request.options.headers['X-Auth-Token'] = 'token';
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
      });
      await response.send();
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
      }, { data: newTodo });
      await response.send();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  async function toggleTodo(todo) {
    try {
      const response = await api.put(async (request, response) => {
        const updatedTodo = await response.json();
        todos = todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t));
      }, { data: { completed: !todo.completed } });
      await response.send();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  }

  async function deleteTodo(todo) {
    try {
      const response = await api.delete(async (request, response) => {
        todos = todos.filter((t) => t.id !== todo.id);
      });
      await response.send();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }
</script>

<h1>Todo App</h1>

<button on:click={addTodo}>Add Todo</button>

<ul>
  {#each todos as todo (todo.id)}
    <li on:click={() => toggleTodo(todo)} class:selected={todo.completed}>
      {todo.title}
      <button on:click={() => deleteTodo(todo)}>Delete</button>
    </li>
  {/each}
</ul>
```

## Pros and Cons

### Pros

- Simple and flexible API for

 making HTTP requests.
- Supports different HTTP methods (GET, POST, PUT, PATCH, DELETE).
- Allows customization of request options, such as headers and data.
- Provides interceptors for modifying requests and responses.
- Supports TypeScript for static type checking.

### Cons

- The module might be overkill for simple use cases where a more lightweight solution is sufficient.

Despite these cons, `esFetch` is a powerful module for managing HTTP requests in JavaScript and TypeScript projects. It provides a convenient way to handle requests and responses, and the ability to apply interceptors adds flexibility and extensibility to the module. The Todo app example demonstrates how `esFetch` can be used in a real-world scenario to interact with a backend API and manage a list of todos.