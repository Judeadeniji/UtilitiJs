- [Getting Started](#utiliti_start)
  - [Installation](#utiliti_installation)
  - [Usage](#utiliti_usage)
- [Modules](#utiliti_module)
  - [Core](#utiliti_module_core)
  - [Operators](#utiliti_module_operators)
- [Examples](#utiliti_example)
  - [Core](#utiliti_example_core)
  - [Operators](#utiliti_example_operators)


---

- **Version:** 2.0.32
- **File:** [Utiliti.Js](assets/lib/utiliti.js)
- **Author:** [Adeniji OluwaFeranmi](http://feranmiwebdev.netlify.app)

- **Created:** 27 November, 2022
- **Update:** 06 June, 2023

If you have any questions that are beyond the scope of this help file, Please feel free to email via [Support Page](https://twitter.com/Feranmiwebdev).

---

# UtilitiJs

UtilitiJs is a comprehensive JavaScript utility library that provides a collection of helpful functions for common tasks and operations. With UtilitiJs, developers can simplify their coding process and enhance productivity by leveraging the pre-built utility functions available in the library.

## Key Features

UtilitiJs offers a wide range of features and functionalities, including:

1. **Type Checking**: UtilitiJs includes a typeCheck module that allows developers to perform type checks on various data types such as integers, strings, arrays, objects, functions, booleans, and NaN (not a number). This module provides functions like `isInteger`, `isString`, `isArray`, `isObject`, `isFunction`, `isBoolean`, and `isNaN` to perform type checks easily.

2. **Value Checking**: The valueCheck module in UtilitiJs provides functions to check various properties of numeric values. Developers can use functions like `isPositive`, `isNegative`, `isZero`, `isEven`, `isOdd`, `isPrime`, `isWhole`, and `isFractional` to check if a number is positive, negative, zero, even, odd, prime, whole, or fractional.

3. **String Manipulation**: UtilitiJs offers a string module that includes functions to manipulate and transform strings. Developers can utilize functions like `capitalize`, `reverse`, `truncate`, `startsWith`, `endsWith`, `contains`, `replaceAll`, and more to perform common string operations efficiently.

4. **Array Manipulation**: The array module in UtilitiJs provides functions for working with arrays. Developers can find functions like `flatten`, `unique`, `shuffle`, `chunk`, `sortBy`, `unique`, `countOccurrences`, and many others to simplify array manipulations and transformations.

5. **Mathematical Operations**: UtilitiJs includes a math module with functions for performing various mathematical operations. Developers can utilize functions like `clamp`, `lerp`, `toDegrees`, `toRadians`, `roundTo`, `randomInt`, `sum`, `average`, and more to perform common mathematical calculations.

6. **Date and Time**: UtilitiJs offers a date module with functions for working with dates and time. Developers can use functions like `formatDate`, `isLeapYear`, `getDaysInMonth`, `addDays`, `subtractDays`, `compareDates`, `isPastDate`, and more to handle date and time-related tasks effectively.

These are just a few highlights of the extensive set of features provided by the UtilitiJs library and some features might not be available yet. By leveraging UtilitiJs, developers can streamline their development process, reduce boilerplate code, and enhance the efficiency of their JavaScript projects.

## Installation

UtilitiJs can be easily installed via popular package managers like npm or yarn. Simply run the following command in your project directory:

```shell
npm install utiliti-js
```

or

```shell
yarn add utiliti-js
```

Once installed, you can import the desired modules and start using the utility functions in your JavaScript or TypeScript code.

## Usage

Here's an example of how you can use UtilitiJs in your code:

```javascript
import { typeCheck, valueCheck, string, array, math, Core } from 'utiliti-js';

const date = new Core.DateFilter();

console.log(typeCheck.isInteger(42)); // Output: true

console.log(valueCheck.isPositive(5)); // Output: true

// not available yet
console.log(string.capitalize('utilitijs')); // Output: Utilitijs

console.log(array.flatten([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]

// not available yet
console.log(math.roundTo(3.14159, 2)); // Output

: 3.14

console.log(date.formatDate(new Date(), 'DD/MM/YYYY')); // Output: 05/06/2023
```

UtilitiJs provides an intuitive and consistent API, making it easy to integrate into your projects and accelerate your development process. Refer to the documentation for detailed information on all the available functions and their usage.

---

## Modules

The `Core` module contains functions for making `HTTP` requests. It defines a
`Core` object with methods for performing different operations like managing
state, handling data etc. It also defines a `Error()` function for
creating custom error objects that have a `getInfo()` method for retrieving
information about the error.
The **UtilitiJs** Library is intended to be used as a utility library in a JavaScript application. It also defined a `Operators` module that allows you to perform logical operations, check types, analyse data and do complex calculations.

---

### Core

`Core` is an Object with loads of utility functions The first function, Http,
contains methods for making different types of HTTP requests: get, post, put,
and delete. The DataFilter function takes in a filter function and an array of
data and returns an array of data that has been filtered according to the filter
function. The DateFilter function contains functions for formatting dates as
text or according to a specified format. Finally, the Store class is a basic
implementation of a redux store, which is a state management tool for managing
application state in JavaScript applications.

## Operators

The Operators module is a set of JavaScript functions that defines a number of
different logical, comparison, and value checking operations. It also includes
some functions for checking the type of a value, as well as some statistical
functions for calculating the sum, mean, median, and mode of an array of
numbers. Some examples of the operations defined in this function are `and`,
`or`, `not`, `xor`, `nand`, `nor`, `implies`, `iff`, `equals`, `greaterThan`,
`lessThan`, and `isPositive`, `isNaN`, `parseInt`, `parseFloat`. These functions can be used to perform logical
operations on values and compare them in different ways.


# Documentation
-----

# Data Filter Class Documentation

The Data Filter class represents a data filter that can be used to filter an array of data based on a provided filter function. The class provides a `filter` method to apply the filter function to an array of data.

## Usage

To use the Data Filter class, you can create an instance and provide a filter function:

```typescript
const DataFilter = new DataFilter((item) => {
  // Filter logic here
  return item.age > 18;
});
```

### Filtering Data

The `filter` method can be used to apply the filter function to an array of data:

```typescript
filter(data: T[]): T[]
```

Example:

```typescript
const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 16 },
  { name: 'Bob', age: 30 },
];

const filteredData = DataFilter.filter(data);
console.log(filteredData);
// Output: [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }]
```

### Error Handling

The Data Filter class throws a `Error` if the filter function is not a valid function. Make sure to handle this error appropriately in your application.

Example Error Handling:

```typescript

try {
  const filteredData = DataFilter.filter(data);
} catch (error) {
  if (error instanceof Error) {
    // Handle Error
  } else {
    // Handle other errors
  }
}
```

## Conclusion

The Data Filter class provides a convenient way to filter an array of data based on a filter function. Use this class to simplify your data filtering operations and enhance the flexibility of your application.

# HTTP Client Module Documentation

The HTTP Client module provides a simple and flexible way to make HTTP requests in JavaScript/TypeScript. It supports various HTTP methods like GET, POST, PUT, PATCH, and DELETE. The module also allows you to register interceptors for request/response handling.

## Usage

To use the HTTP Client module in your TypeScript project, you can import the module and create an instance of the `Http` class.

```typescript
import { Http } from 'utiliti-js';

const http = new Http();
```

### Making HTTP Requests

The `Http` class provides methods for making different types of HTTP requests: `get`, `post`, `put`, `patch`, and `delete`. These methods return a promise that resolves to the response from the server.

#### GET Request

```typescript
http.get(url: string, headers?: Object): Promise<Response>
```

Example:

```typescript
http.get('https://api.example.com/users', { Authorization: 'Bearer token' })
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
```

#### POST Request

```typescript
http.post(url: string, data: any, headers?: Object): Promise<Response>
```

Example:

```typescript
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

http.post('https://api.example.com/users', user, { Authorization: 'Bearer token' })
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
```

#### PUT Request

```typescript
http.put(url: string, data: any, headers?: Object): Promise<Response>
```

Example:

```typescript
const updatedUser = {
  name: 'John Smith',
  email: 'john.smith@example.com',
};

http.put('https://api.example.com/users/123', updatedUser, { Authorization: 'Bearer token' })
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
```

#### PATCH Request

```typescript
http.patch(url: string, data: any, headers?: Object): Promise<Response>
```

Example:

```typescript
const updatedFields = {
  name: 'John Smith',
};

http.patch('https://api.example.com/users/123', updatedFields, { Authorization: 'Bearer token' })
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
```

#### DELETE Request

```typescript
http.delete(url: string, headers?: Object): Promise<Response>
```

Example:

```typescript
http.delete('https://api.example.com/users/123', { Authorization: 'Bearer token' })
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });
```

### Interceptors

Interceptors allow you to modify requests or responses globally or for specific requests. You can add interceptors using the `useInterceptors` and `useScopedInterceptors` methods.

#### Global Interceptors

Global interceptors apply to all requests made using the `Http` instance.

```typescript
http.useInterceptors(interceptors: Function[]): void
```

Example:

```typescript
function requestInterceptor(request: any, next: Function) {


  // Modify the request
  // ...

  // Call the next interceptor or send the request
  return next(request);
}

http.useInterceptors([requestInterceptor]);
```

#### Scoped Interceptors

Scoped interceptors apply to specific requests based on the method and URL.

```typescript
http.useScopedInterceptors(interceptor: Function[]): void
```

Example:

```typescript
function responseInterceptor(response: any, next: Function) {
  // Modify the response
  // ...

  // Call the next interceptor or return the response
  return next(response);
}

http.useScopedInterceptors([responseInterceptor], 'https://api.example.com/users/123', 'GET');
```

### Examples

#### GET Request Example

```typescript
http.get('https://api.example.com/users', { Authorization: 'Bearer token' })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed');
    }
  })
  .then((data) => {
    // Handle the response data
  })
  .catch((error) => {
    // Handle the error
  });
```

#### POST Request Example

```typescript
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

http.post('https://api.example.com/users', user, { Authorization: 'Bearer token' })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed');
    }
  })
  .then((data) => {
    // Handle the response data
  })
  .catch((error) => {
    // Handle the error
  });
```

## Error Handling

The HTTP Client module throws a `Error` if the method, URL, headers, or interceptors are invalid. Make sure to handle these errors appropriately in your application.


## Conclusion

The HTTP Client module provides a convenient way to make HTTP requests in JavaScript/TypeScript. It supports various HTTP methods and allows you to add interceptors for request/response handling. Use this module to simplify your API communication and enhance your application's flexibility.

# Core.Http Module Documentation (deprecated)

The Core.Http module provides methods for making HTTP requests to retrieve, create, update, and delete resources on a server. Please note that the use of `Core.Http` has been deprecated. It is recommended to use the `Http` module instead.

## Usage

To use the HTTP module, you can create an instance:

```typescript
import { Core } from "utiliti-js";
const http = new Core.Http();
```

### Sending a GET Request

The `get` method sends a GET request to retrieve data from the server:

```typescript
get(url: string, header: HeadersInit = {}): Promise<Response>
```

- `url` (string): The URL to send the GET request to.
- `header` (object): Optional. The headers to include in the request.

Example:

```typescript
const response = await http.get("https://api.example.com/data", { Authorization: "Bearer token" });
const data = await response.json();
console.log(data);
```

### Sending a POST Request

The `post` method sends a POST request to create a new resource on the server:

```typescript
post(url: string, data: object, header: HeadersInit = {}): Promise<Response>
```

- `url` (string): The URL to send the POST request to.
- `data` (object): The data to include in the request body.
- `header` (object): Optional. The headers to include in the request.

Example:

```typescript
const data = { name: "John Doe", email: "john@example.com" };
const response = await http.post("https://api.example.com/users", data, { Authorization: "Bearer token" });
const createdUser = await response.json();
console.log(createdUser);
```

### Sending a PUT Request

The `put` method sends a PUT request to update an existing resource on the server:

```typescript
put(url: string, data: object, header: HeadersInit = {}): Promise<Response>
```

- `url` (string): The URL to send the PUT request to.
- `data` (object): The data to include in the request body.
- `header` (object): Optional. The headers to include in the request.

Example:

```typescript
const data = { name: "John Doe", email: "john@example.com" };
const response = await http.put("https://api.example.com/users/123", data, { Authorization: "Bearer token" });
const updatedUser = await response.json();
console.log(updatedUser);
```

### Sending a PATCH Request

The `patch` method sends a PATCH request to update a resource on the server:

```typescript
patch(url: string, data: object, header: HeadersInit = {}): Promise<Response>
```

- `url` (string): The URL to send the PATCH request to.
- `data` (object): The data to include in the request body.
- `header` (object): Optional. The headers to include in the request.

Example:

```typescript
const data = { name: "John Doe", email: "john@example.com" };
const response = await http.patch("https://api.example.com/users/123", data, { Authorization: "Bearer token" });
const updatedUser = await response.json();
console.log(updatedUser);
```

### Sending a DELETE Request

The `delete` method sends a DELETE request to delete a resource on the server:

```typescript
delete(url: string, header: HeadersInit = {}): Promise<Response>
```

- `url` (string): The URL to send the DELETE request to.
- `header` (object): Optional. The headers to include in the request.

Example:

```typescript
const response = await http.delete("https://api.example

.com/users/123", { Authorization: "Bearer token" });
console.log("Resource deleted");
```

### Warning

The use of `Core.Http` has been deprecated. It is recommended to use the `Http` module instead. Please update your code to use the `Http` module for making HTTP requests.

## Conclusion

The HTTP module provides convenient methods for making HTTP requests to retrieve, create, update, and delete resources on a server. Use this module to interact with APIs and handle data exchange in your application.

# Core.DateFilter Class Documentation

The Date Filter class represents a date filter that provides methods for converting dates to text format and formatting dates based on specified formats. Please note that the `DateFilter` function has been renamed to `DateFilter`. Use the `DateFilter` class for date filtering operations.

## Usage

To use the Date Filter class, you can create an instance:

```typescript
const DateFilter = new DateFilter();
```

### Converting Date to Text Format

The `text` method can be used to convert a date to text format:

```typescript
text(date: Date): string
```

Example:

```typescript
const date = new Date();
const formattedDate = DateFilter.text(date);
console.log(formattedDate);
// Output: "June 5, 2023"
```

### Formatting Date

The `formatDate` method can be used to format a date based on a specified format:

```typescript
formatDate(date: Date, format: string): string
```

Supported format specifiers:
- `yyyy` - Year
- `mm` - Month (padded with leading zeros)
- `dd` - Day (padded with leading zeros)
- `HH` - Hour (padded with leading zeros)
- `MM` - Minute (padded with leading zeros)
- `SS` - Second (padded with leading zeros)
- `ago` - Time elapsed since the date (e.g., "2 days ago")

Example:

```typescript
const date = new Date();
const formattedDate = DateFilter.formatDate(date, "yyyy-mm-dd HH:MM:SS");
console.log(formattedDate);
// Output: "2023-06-05 12:30:45"
```

```typescript
const date = new Date();
const formattedDate = DateFilter.formatDate(date, "ago");
console.log(formattedDate);
// Output: "xx day(s) or xx hour(s) ago"
```

### Warning

The `DateFilter` function has been renamed to `DateFilter`. Please update your code to use the `DateFilter` class instead. The previous function will still work but is deprecated.

## Conclusion

The Date Filter class provides convenient methods for converting dates to text format and formatting dates based on specified formats. Use this class to enhance the date manipulation capabilities of your application.

# Core.Store Class Documentation

The `Store` class represents a store that holds the state and manages state updates. It is now implemented as a class or constructor.

## Usage

To create a store, instantiate the `Store` class:

```typescript
const store = new Store(reducer, initialState);
```

- `reducer` (function): The reducer function for state updates.
- `initialState` (optional): The initial state of the store. Default is an empty object (`{}`).

### Getting the Current State

The `getState` method returns the current state of the store:

```typescript
getState(): T
```

Example:

```typescript
const currentState = store.getState();
console.log(currentState);
```

### Dispatching an Action

The `dispatch` method dispatches an action to update the state:

```typescript
dispatch(action: A): void
```

- `action` (A): The action object representing the state update.

Example:

```typescript
const action = { type: "INCREMENT" };
store.dispatch(action);
```

### Subscribing to Store Updates

The `subscribe` method subscribes a listener function to be called on state changes:

```typescript
subscribe(listener: Function): Function
```

- `listener` (function): The listener function to be called on state changes.

Example:

```typescript
const listener = (state) => {
  console.log("State changed:", state);
};

const unsubscribe = store.subscribe(listener);

// To unsubscribe:
unsubscribe();
```

### Replacing the Reducer

The `replaceReducer` method replaces the current reducer function with a new one:

```typescript
replaceReducer(nextReducer: (state: T, action: A) => T): void
```

- `nextReducer` (function): The new reducer function.

Example:

```typescript
const newReducer = (state, action) => {
  // Custom reducer logic...
  return newState;
};

store.replaceReducer(newReducer);
```

### Getting the Current Reducer

The `getReducer` method returns the current reducer function:

```typescript
getReducer(): (state: T, action: A) => T
```

Example:

```typescript
const currentReducer = store.getReducer();
console.log(currentReducer);
```

## Middleware

To apply middlewares to the store's dispatch function, you can use the `applyMiddleware` function:

```typescript
applyMiddleware(...middlewares: Function[]): (store: any) => (...args: any[]) => any
```

- `middlewares` (functions): The middlewares to apply.

Example:

```typescript
const enhancedStore = applyMiddleware(middleware1, middleware2)(Store);
const store = enhancedStore(reducer, initialState);
```

## Subscriber

To create a subscriber object that can subscribe to store updates, you can use the `createSubscriber` function:

```typescript
const subscriber = createSubscriber(store);
```

- `store` (any): The store object to subscribe to.

The `subscriber` object has a `subscribe` method that can be used to subscribe a callback function to store updates:

```typescript
subscriber.subscribe(callback: Function)
```

- `callback` (function): The callback function to be called on store updates.

## Merging Reducers

To merge multiple reducers into a single reducer function, you can use the `mergeReducers` function:

```typescript
mergeReducers(reducers: { [key: string]: Function }): (state: any, action: any) => any
```

- `reducers` (object): An object containing the individual reducers.

Example:

```typescript
const reducer = mergeReducers({
  reducer1,
  reducer2,
});
```

Please note that the `Store` class is now a constructor or class and should be instantiated using the `new` keyword. Additionally, the `Store` class no longer throws an error if the reducer is not a function but instead throws a `Error`. Make sure to handle the `Error` appropriately in your code.

# Core.TaskQueue Class Documentation

The `TaskQueue` class is responsible for creating and managing a queue of tasks.

## Usage

To create a task queue, instantiate the `TaskQueue` class:

```typescript
const taskQueue = new TaskQueue();
```

### Adding a Task

The `addTask` method adds a new task to the queue:

```typescript
addTask(task: Function): void
```

- `task` (function): The task to add to the queue.

Example:

```typescript
const task = () => {
  // Task logic...
};

taskQueue.addTask(task);
```

### Running Tasks

The `runTasks` method executes all tasks in the queue:

```typescript
runTasks(): void
```

Example:

```typescript
taskQueue.runTasks();
```

### Clearing the Queue

The `clearTasks` method clears the queue:

```typescript
clearTasks(): void
```

Example:

```typescript
taskQueue.clearTasks();
```

### Getting the Task Count

The `getTaskCount` method returns the number of tasks in the queue:

```typescript
getTaskCount(): number
```

Example:

```typescript
const count = taskQueue.getTaskCount();
console.log(count);
```

## Error Handling

The `runTasks` method throws a `Error` if a task is not a function. You should handle this error appropriately in your code.

## Utility Function

The `generateId` function generates a unique ID of a random length:

```typescript
generateId(): number
```

Example:

```typescript
const id = generateId();
console.log(id);
```

Please note that the `TaskQueue` class is now a class and should be instantiated using the `new` keyword.

-----

# Core.UrlParser Class Documentation

The `UrlParser` class is responsible for parsing and manipulating URLs.

## Usage

To create an instance of `UrlParser`, instantiate the class with a URL:

```typescript
const urlParser = new UrlParser(url);
```

- `url` (string): The URL to parse and manipulate.

### Getting the URL Path

The `getPath` method returns the path of the URL:

```typescript
getPath(): string
```

Example:

```typescript
const path = urlParser.getPath();
console.log(path); // Expected output: The URL path (e.g., "/products")
```

### Getting the Query String

The `getQueryString` method returns the query string of the URL:

```typescript
getQueryString(): string
```

Example:

```typescript
const queryString = urlParser.getQueryString();
console.log(queryString); // Expected output: The query string (e.g., "?category=electronics&sort=price")
```

### Getting a Specific Query Parameter

The `getQueryParameter` method returns the value of a specific query parameter:

```typescript
getQueryParameter(param: string): string | null
```

- `param` (string): The query parameter to retrieve.

Example:

```typescript
const value = urlParser.getQueryParameter('category');
console.log(value); // Expected output: The value of the query parameter or null if not found
```

### Building a URL

The `buildUrl` method builds a URL from its components:

```typescript
buildUrl(
  protocol: string,
  hostname: string,
  path: string,
  queryParams: { [key: string]: string }
): string
```

- `protocol` (string): The URL protocol.
- `hostname` (string): The URL hostname.
- `path` (string): The URL path.
- `queryParams` (object): The query parameters.

Example:

```typescript
const protocol = 'https';
const hostname = 'example.com';
const path = '/api';
const queryParams = {
  key1: 'value1',
  key2: 'value2'
};

const builtUrl = urlParser.buildUrl(protocol, hostname, path, queryParams);
console.log(builtUrl); // Expected output: The built URL as a string (e.g., "https://example.com/api?key1=value1&key2=value2")
```


---

-----

# Core.Random Class Documentation

The `Random` class is responsible for generating random numbers or strings.

## Usage

To use the `Random` class, create an instance of it:

```typescript
const random = new Random();
```

### Generating a Random Number

The `number` method generates a random number within a specified range:

```typescript
number(min: number, max: number): number
```

- `min` (number): The minimum value.
- `max` (number): The maximum value.

Example:

```typescript
const randomNumber = random.number(1, 100);
console.log(randomNumber); // Expected output: The generated random number within the specified range
```

### Generating a Random String

The `string` method generates a random string with a specified length:

```typescript
string(length: number): string
```

- `length` (number): The length of the random string.

Example:

```typescript
const randomString = random.string(8);
console.log(randomString); // Expected output: The generated random string with the specified length
```

Please note that the `Random`

 class is now a class and should be instantiated using the `new` keyword.

-----

-----

# Core.DataValidator Class Documentation

The `DataValidator` class is responsible for validating data.

## Usage

To use the `DataValidator` class, create an instance of it:

```typescript
const validator = new DataValidator();
```

### Checking if a Value is Within a Range

The `inRange` method checks if a value is within a certain range:

```typescript
inRange(value: number, min: number, max: number): boolean
```

- `value` (number): The value to check.
- `min` (number): The minimum value of the range.
- `max` (number): The maximum value of the range.

Example:

```typescript
const value = 5;
const isInRange = validator.inRange(value, 1, 10);
console.log(isInRange); // Expected output: true if the value is within the range, false otherwise
```

### Checking if a String Matches a Format

The `matchFormat` method checks if a string matches a certain format:

```typescript
matchFormat(str: string, regex: RegExp): boolean
```

- `str` (string): The string to check.
- `regex` (RegExp): The regular expression to match against.

Example:

```typescript
const str = "abc123";
const regex = /^[a-z]+$/;
const matchesFormat = validator.matchFormat(str, regex);
console.log(matchesFormat); // Expected output: true if the string matches the format, false otherwise
```

### Checking if a String has a Certain Length

The `hasLength` method checks if a string has a certain length:

```typescript
hasLength(str: string, length: number): boolean
```

- `str` (string): The string to check.
- `length` (number): The required length of the string.

Example:

```typescript
const str = "Hello";
const requiredLength = 5;
const hasRequiredLength = validator.hasLength(str, requiredLength);
console.log(hasRequiredLength); // Expected output: true if the string has the specified length, false otherwise
```

## Helper Function: trim

The `trim` function trims leading and trailing whitespace from a string.

Usage:

```typescript
const trimmedStr = trim(str);
```

- `str` (string): The string to trim.

Example:

```typescript
const str = "   Hello, World!   ";
const trimmedStr = trim(str);
console.log(trimmedStr); // Expected output: "Hello, World!" (leading and trailing whitespace removed)
```

Please note that the `DataValidator` class and `trim` function should be instantiated or used directly respectively.

-----

-----

# Operators

## Array Module

The `array` module provides utility functions for working with arrays.

### Importing the Module

To use the `array` module, you can import it into your JavaScript code using the following syntax:

```javascript
import * as arrayUtil from 'utiliti-js/Operators/array';
// Or:
import { array } from 'utiliti-js';
```

### Functions

The `array` module provides the following functions:

#### `sum(array)`

Calculates the sum of all numbers in the given array.

- `array`: An array of numbers.
- Returns: The sum of all numbers in the array.

**Example:**

```javascript
import { sum } from 'utiliti-js/Operators/array';

const numbers = [1, 2, 3, 4, 5];
const sumResult = sum(numbers);
console.log(sumResult); // Output: 15
```

#### `filter(array, predicate)`

Filters the elements of the given array based on a provided predicate function.

- `array`: An array to be filtered.
- `predicate`: A function that takes an element as an argument and returns `true` or `false` to indicate whether the element should be included in the filtered result.
- Returns: A new array containing only the elements that satisfy the predicate.

**Example:**

```javascript
import { filter } from 'utiliti-js/Operators/array';

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

#### `map(array, mapper)`

Applies a mapping function to each element of the given array and returns a new array with the results.

- `array`: An array to be mapped.
- `mapper`: A function that takes an element as an argument and returns the transformed value.
- Returns: A new array with the transformed elements.

**Example:**

```javascript
import { map } from 'utiliti-js/Operators/array';

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = map(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

#### `reduce(array, reducer, initialValue)`

Reduces the elements of the given array to a single value using a reducer function.

- `array`: An array to be reduced.
- `reducer`: A function that takes an accumulator and the current element as arguments and returns the updated accumulator value.
- `initialValue`: An optional initial value for the accumulator.
- Returns: The final value of the accumulator.

**Example:**

```javascript
import { reduce } from 'utiliti-js/Operators/array';

const numbers = [1, 2, 3, 4, 5];
const sum = reduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```

#### `flatten(array)`

Flattens a nested array structure into a single-level array.

- `array`: A nested array to be flattened.
- Returns: A new array with all elements flattened.

**Example:**

```javascript
import { flatten } from 'utiliti-js/Operators/array';

const nestedArray = [1, [2, [3, [4, 5]]]];
const flattenedArray = flatten(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
```

These are the available

 functions provided by the `array` module in the `utiliti-js` library. You can import the module as shown above and utilize these functions in your JavaScript code.

-----

## Compare Module

The `compare` module provides functions for comparing values and performing equality checks.

### Importing the Module

To use the `compare` module, you can import it into your TypeScript code using either of the following syntaxes:

```typescript
import { compare } from 'utiliti-js';
```

or

```typescript
import * as compare  from 'utiliti-js/Operators/compare';
```

### Functions

The `compare` module provides the following functions:

#### `equals(a, b)`

Checks if two values are equal.

- `a`: The first value.
- `b`: The second value.
- Returns: `true` if the values are equal, `false` otherwise.

**Example:**

```typescript
import { compare } from 'utiliti-js';

const result = compare.equals(5, 5);
console.log(result); // Output: true
```

#### `greaterThan(a, b)`

Checks if the first value is greater than the second value.

- `a`: The first value.
- `b`: The second value.
- Returns: `true` if the first value is greater than the second value, `false` otherwise.

**Example:**

```typescript
import { compare } from 'utiliti-js';

const result = compare.greaterThan(10, 5);
console.log(result); // Output: true
```

#### `lessThan(a, b)`

Checks if the first value is less than the second value.

- `a`: The first value.
- `b`: The second value.
- Returns: `true` if the first value is less than the second value, `false` otherwise.

**Example:**

```typescript
import { compare } from 'utiliti-js';

const result = compare.lessThan(5, 10);
console.log(result); // Output: true
```

#### `deepEqual(obj1, obj2)`

Performs a deep equality check between two objects or arrays.

- `obj1`: The first object or array.
- `obj2`: The second object or array.
- Returns: `true` if the objects or arrays are deeply equal, `false` otherwise.

**Example:**

```typescript
import { compare } from 'utiliti-js';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const result = compare.deepEqual(obj1, obj2);
console.log(result); // Output: true
```

These are the available functions provided by the `compare` module in the `utiliti-js` library. You can import the module as shown above and utilize these functions in your TypeScript code.

-----

## Logic Module

The `logic` module provides utility functions for logical operations.

### Importing the Module

To use the `logic` module, you can import it into your TypeScript code using either of the following syntaxes:

```typescript
import { logic } from 'utiliti-js/Operators/logic';
```

or

```typescript
import * as logic from 'utiliti-js/Operators/logic';
```

### Functions

The `logic` module provides the following functions:

#### `and(...conditions: any[]): boolean`

Returns `true` if all the conditions are truthy values, `false` otherwise.

- `...conditions`: The conditions to be evaluated.
- Returns: `true` if all conditions are truthy values, `false` otherwise.

**Example:**

```typescript
import { logic } from 'utiliti-js/Operators/logic';

const result = logic.and(true, 5 > 3, 'Hello');
console.log(result); // Output: true
```

#### `or(...conditions: any[]): boolean`

Returns `true` if any of the conditions are truthy values, `false` otherwise.

- `...conditions`: The conditions to be evaluated.
- Returns: `true` if any condition is a truthy value, `false` otherwise.

**Example:**

```typescript
import { logic } from 'utiliti-js/Operators/logic';

const result = logic.or(false, 5 < 3, '');
console.log(result); // Output: true
```

#### `not(condition: any): boolean`

Returns the boolean negation of the condition.

- `condition`: The condition to be negated.
- Returns: The boolean negation of the condition.

**Example:**

```typescript
import { logic } from 'utiliti-js/Operators/logic';

const result = logic.not(true);
console.log(result); // Output: false
```

#### `xor(...conditions: any[]): boolean`

Returns `true` if an odd number of the conditions are truthy values, `false` otherwise.

- `...conditions`: The conditions to be evaluated.
- Returns: `true` if an odd number of conditions are truthy values, `false` otherwise.

**Example:**

```typescript
import { logic } from 'utiliti-js/Operators/logic';

const result = logic.xor(true, false, true);
console.log(result); // Output: true
```

#### `nand(...conditions: any[]): boolean`

Returns `true` if any of the conditions are falsy values, `false` otherwise.

- `...conditions`: The conditions to be evaluated.
- Returns: `true` if any condition is a falsy value, `false` otherwise.

**Example:**

```typescript
import { logic } from 'utiliti-js/Operators/logic';

const result = logic.nand(true, false, true);
console.log(result); // Output: false
```

#### `nor(...conditions: any[]): boolean`

Returns `true` if all of the conditions are falsy values, `false` otherwise.

- `...conditions`: The conditions to be evaluated.
- Returns: `true` if all conditions are falsy values, `false` otherwise.

**Example:**

```typescript
import { logic } from 'utiliti-js/Operators/logic';

const result = logic.nor(false, '', null);
console.log(result); // Output: true
```

#### `implies(a: any, b: any): boolean`

Returns the value of a logical implication (a -> b).

- `a`: The antecedent of the implication.
- `b`: The consequent of the implication.
- Returns: The truth value of the implication.

**Example:**

```typescript
import { logic } from 'utiliti-js/Operators/logic';



const result = logic.implies(true, false);
console.log(result); // Output: false
```

#### `iff(a: any, b: any): boolean`

Returns the value of a biconditional implication (a <-> b).

- `a`: The first proposition of the biconditional.
- `b`: The second proposition of the biconditional.
- Returns: The truth value of the biconditional.

**Example:**

```typescript
import { logic } from 'utiliti-js/Operators/logic';

const result = logic.iff(true, false);
console.log(result); // Output: false
```

These are the available functions provided by the `logic` module in the `utiliti-js` library. You can import the module as shown above and utilize these functions in your code.

-----

## Object Module

The `object` module provides utility functions for working with objects.

### Importing the Module

To use the `object` module, you can import it into your TypeScript code using the following import style:

```typescript
import { object } from 'utiliti-js';
```

### Functions

The `object` module provides the following functions:

#### `getProperty(object: object, key: string): any`

Returns the value at the specified key in the object.

- `object`: The object to retrieve the value from.
- `key`: The key to retrieve the value for.
- Returns: The value at the specified key in the object.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const value = object.getProperty(obj, 'name');
console.log(value); // Output: John
```

#### `setProperty(object: object, key: string, value: any): void`

Sets the value at the specified key in the object.

- `object`: The object to set the value in.
- `key`: The key to set the value for.
- `value`: The value to set.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
object.setProperty(obj, 'age', 35);
console.log(obj); // Output: { name: 'John', age: 35 }
```

#### `hasProperty(object: object, key: string): boolean`

Returns a boolean indicating whether the object has a property with the specified key.

- `object`: The object to check for the property.
- `key`: The key to check for.
- Returns: Whether the object has the specified key.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const hasName = object.hasProperty(obj, 'name');
console.log(hasName); // Output: true

const hasEmail = object.hasProperty(obj, 'email');
console.log(hasEmail); // Output: false
```

#### `getKeys(object: object): string[]`

Returns an array of the object's own enumerable property names.

- `object`: The object to get the keys for.
- Returns: An array of the object's own enumerable property names.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const keys = object.getKeys(obj);
console.log(keys); // Output: ['name', 'age']
```

#### `getValues(object: object): any[]`

Returns an array of the object's own enumerable property values.

- `object`: The object to get the values for.
- Returns: An array of the object's own enumerable property values.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const values = object.getValues(obj);
console.log(values); // Output: ['John', 30]
```

#### `getEntries(object: object): [string, any][]`

Returns an array of the object's own enumerable property [key, value] pairs.

- `object`: The object to get the entries for.
- Returns: An array of the object's own enumerable property [key, value] pairs.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const entries = object.getEntries(obj);
console.log(entries); // Output

: [['name', 'John'], ['age', 30]]
```

#### `extendObject(object: object, ...sources: object[]): object`

Copies the own enumerable properties of source objects to the target object and returns the target object.

- `object`: The target object to extend.
- `sources`: The source objects to copy properties from.
- Returns: The extended target object.

**Example:**

```typescript
import { object } from 'utiliti-js';

const target = { name: 'John' };
const source = { age: 30 };
const extended = object.extendObject(target, source);
console.log(extended); // Output: { name: 'John', age: 30 }
```

#### `cloneShallow(object: object): object`

Creates a shallow copy of the object.

- `object`: The object to clone.
- Returns: A shallow copy of the object.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const clone = object.cloneShallow(obj);
console.log(clone); // Output: { name: 'John', age: 30 }
```

#### `cloneDeep(object: object): object`

Creates a deep copy of the object.

- `object`: The object to clone.
- Returns: A deep copy of the object.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const clone = object.cloneDeep(obj);
console.log(clone); // Output: { name: 'John', age: 30 }
```

#### `forEachProperty(object: object, callback: (value: any, key: string, object: object) => void): void`

Calls the callback function for each own enumerable property of the object.

- `object`: The object to iterate over.
- `callback`: The function to call for each property.

The `callback` function receives the following parameters:
- `value`: The value of the current property.
- `key`: The key of the current property.
- `object`: The object being iterated over.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
object.forEachProperty(obj, (value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30
```

#### `mapProperties(object: object, callback: (value: any, key: string, object: object) => any): object`

Calls the callback function for each own enumerable property of the object and returns a new object with the returned values.

- `object`: The object to iterate over.
- `callback`: The function to call for each property.

The `callback` function receives the following parameters:
- `value`: The value of the current property.
- `key`: The key of the current property.
- `object`: The object being iterated over.

Returns: A new object with the returned values.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const mapped = object.mapProperties(obj, (value, key) => {
  return `${key}: ${value}`;
});
console.log(mapped); // Output: { name: 'name: John', age: 'age: 30' }
```

#### `filterProperties(object: object, callback: (value: any, key: string, object: object) => boolean): object`

Calls the callback function for each own enumerable property of the object and returns

 a new object with the properties for which the callback returned a truthy value.

- `object`: The object to iterate over.
- `callback`: The function to call for each property.

The `callback` function receives the following parameters:
- `value`: The value of the current property.
- `key`: The key of the current property.
- `object`: The object being iterated over.

Returns: A new object with the properties for which the callback returned a truthy value.

**Example:**

```typescript
import { object } from 'utiliti-js';

const obj = { name: 'John', age: 30 };
const filtered = object.filterProperties(obj, (value, key) => {
  return typeof value === 'string';
});
console.log(filtered); // Output: { name: 'John' }
```

That covers the functions provided by the `object` module. You can now use these functions in your TypeScript code to work with objects more efficiently.

-----

# TypeCheck Module

The `typeCheck` module provides utility functions to perform type checks on values.

## Functions

### `isInteger(num: any): boolean`

Checks if a value is an integer.

- `num`: The value to check.
- Returns: `true` if the value is an integer, `false` otherwise.

**Example:**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.isInteger(5)); // Output: true
console.log(typeCheck.isInteger(5.5)); // Output: false
```

### `isString(val: any): boolean`

Checks if a value is a string.

- `val`: The value to check.
- Returns: `true` if the value is a string, `false` otherwise.

**Example:**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.isString('hello')); // Output: true
console.log(typeCheck.isString(123)); // Output: false
```

### `isArray(val: any): boolean`

Checks if a value is an array.

- `val`: The value to check.
- Returns: `true` if the value is an array, `false` otherwise.

**Example:**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.isArray([1, 2, 3])); // Output: true
console.log(typeCheck.isArray('hello')); // Output: false
```

### `isObject(val: any): boolean`

Checks if a value is an object.

- `val`: The value to check.
- Returns: `true` if the value is an object, `false` otherwise.

**Example:**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.isObject({ name: 'John' })); // Output: true
console.log(typeCheck.isObject('hello')); // Output: false
```

### `isFunction(val: any): boolean`

Checks if a value is a function.

- `val`: The value to check.
- Returns: `true` if the value is a function, `false` otherwise.

**Example:**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.isFunction(() => {})); // Output: true
console.log(typeCheck.isFunction(123)); // Output: false
```

### `isBoolean(val: any): boolean`

Checks if a value is a boolean.

- `val`: The value to check.
- Returns: `true` if the value is a boolean, `false` otherwise.

**Example:**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.isBoolean(true)); // Output: true
console.log(typeCheck.isBoolean('false')); // Output: false
```

### `isNaN(value: any): boolean`

Checks if a value is NaN (not a number).

- `value`: The value to check.
- Returns: `true` if the value is NaN, `false` otherwise.

**Example:**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.isNaN(NaN)); // Output: true
console.log(typeCheck.isNaN(5)); // Output: false
```

### `parseInt(str: string, radix?: number): number`

Converts a string to an integer.

- `str`: The string to convert.
- `radix` (optional): The radix used for parsing. Defaults to 10 if not specified.
- Returns: The parsed integer value.

**Example:

**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.parseInt('10')); // Output: 10
console.log(typeCheck.parseInt('101', 2)); // Output: 5
```

### `parseFloat(str: string): number`

Converts a string to a floating-point number.

- `str`: The string to convert.
- Returns: The parsed floating-point number value.

**Example:**

```typescript
import { typeCheck } from 'utiliti-js';

console.log(typeCheck.parseFloat('3.14')); // Output: 3.14
console.log(typeCheck.parseFloat('2.99')); // Output: 2.99
```

That covers the functions provided by the `typeCheck` module. You can now use these functions in your TypeScript code to perform type checks and conversions.

-----

## ValueCheck Module

The `valueCheck` module provides utility functions to perform checks on numeric values.

### Functions

#### `isPositive(num: number): boolean`

Checks if a number is positive.

- `num`: The number to check.
- Returns: `true` if the number is positive, `false` otherwise.

**Example:**

```typescript
import { valueCheck } from 'utiliti-js';

console.log(valueCheck.isPositive(5)); // Output: true
console.log(valueCheck.isPositive(-5)); // Output: false
```

#### `isNegative(num: number): boolean`

Checks if a number is negative.

- `num`: The number to check.
- Returns: `true` if the number is negative, `false` otherwise.

**Example:**

```typescript
import { valueCheck } from 'utiliti-js';

console.log(valueCheck.isNegative(-5)); // Output: true
console.log(valueCheck.isNegative(5)); // Output: false
```

#### `isZero(num: number): boolean`

Checks if a number is zero.

- `num`: The number to check.
- Returns: `true` if the number is zero, `false` otherwise.

**Example:**

```typescript
import { valueCheck } from 'utiliti-js';

console.log(valueCheck.isZero(0)); // Output: true
console.log(valueCheck.isZero(5)); // Output: false
```

#### `isEven(num: number): boolean`

Checks if a number is even.

- `num`: The number to check.
- Returns: `true` if the number is even, `false` otherwise.

**Example:**

```typescript
import { valueCheck } from 'utiliti-js';

console.log(valueCheck.isEven(4)); // Output: true
console.log(valueCheck.isEven(5)); // Output: false
```

#### `isOdd(num: number): boolean`

Checks if a number is odd.

- `num`: The number to check.
- Returns: `true` if the number is odd, `false` otherwise.

**Example:**

```typescript
import { valueCheck } from 'utiliti-js';

console.log(valueCheck.isOdd(3)); // Output: true
console.log(valueCheck.isOdd(4)); // Output: false
```

#### `isPrime(num: number): boolean`

Checks if a number is prime.

- `num`: The number to check.
- Returns: `true` if the number is prime, `false` otherwise.

**Example:**

```typescript
import { valueCheck } from 'utiliti-js';

console.log(valueCheck.isPrime(7)); // Output: true
console.log(valueCheck.isPrime(8)); // Output: false
```

#### `isWhole(num: number): boolean`

Checks if a number is a whole number.

- `num`: The number to check.
- Returns: `true` if the number is a whole number, `false` otherwise.

**Example:**

```typescript
import { valueCheck } from 'utiliti-js';

console.log(valueCheck.isWhole(4)); // Output: true
console.log(valueCheck.isWhole(4.5)); // Output: false
```

#### `isFractional(num: number): boolean`

Checks if a number is a fractional number.

- `num`: The number to check.
- Returns: `true` if the number is a fractional number, `false` otherwise.

**Example:**

```typescript
import { valueCheck } from 'utiliti-js';

console.log(valueCheck.isFractional(4.5)); // Output

: true
console.log(valueCheck.isFractional(4)); // Output: false
```

That covers the functions provided by the `valueCheck` module. You can now use these functions in your TypeScript code to perform checks on numeric values.

```
```

This documentation provides an overview of the functions available in the `valueCheck` module, their parameters, return types, and examples of usage. You can use this documentation to understand and utilize the functionalities provided by the module.

-----

# Troubleshooting

- "Utiliti Error: url must be a string" when using the Http function: This error occurs when the url argument passed to the Http function is not a string. Make sure that you are passing a valid string as the url argument.

- "Utiliti Error: header must be an object" when using the Http function: This error occurs when the header argument passed to the Http function is not an object. Make sure that you are passing a valid object as the header argument.

- "Utiliti Error: data must be an array" when using the DataFilter function: This error occurs when the data argument passed to the DataFilter function is not an array. Make sure that you are passing a valid array as the data argument

- "Utiliti Error: the body of the request must be an object" when using the Http function: This error occurs when the data argument passed to the Http function is not an object. Make sure that you are passing a valid object as the data argument.

- "Utiliti Error: filter must be a function" when using the DataFilter function: This error occurs when the filter argument passed to the DataFilter function is not a function. Make sure that you are passing a valid function as the filter argument.

---

# Release Notes - Version 2.0.32
The library now supports Typescript fully.

# Release Notes - Version 2.0.33
The library now provides a wide range of utility functions for mathematical
operations, string manipulation, date manipulation, and includes an interface
for creating and managing stores.

# Changelog

## [2.0.32] - 04-06-2023

### Added
- TypeScript support: The library has been converted to TypeScript to provide type safety and improved developer experience. TypeScript definitions have been added to enable better code analysis, autocompletion, and error checking.
- Updated build process: The build process now includes a TypeScript compiler step using `ts-loader` in webpack configuration. This ensures that TypeScript files are transpiled to JavaScript during the build process, allowing seamless integration with existing JavaScript projects.
- Enhanced type definitions: Type definitions have been added or updated throughout the library to provide more accurate and descriptive types. This helps developers to write more reliable and maintainable code by catching type errors during development.
- Improved error handling: Error handling has been improved throughout the library. Custom error types have been used to provide more informative error messages, helping developers to identify and resolve issues more efficiently.
- Refactored and optimized code: The codebase has been refactored to follow best practices and improve performance. Redundant code has been removed, and optimizations have been made to enhance the overall efficiency of the library.

## Store Class Enhancements

In this release, we have made significant enhancements to the `Store` class, providing improved type safety and ensuring that the type of the action passed to the `dispatch` method matches the type of action expected by the reducer function.

### New Generic Parameters

The `Store` class is now defined as a generic class with two type parameters: `T` for the state type and `A` for the action type. This allows for better type inference and ensures type consistency throughout the store's methods.

### Updated `reducer` and `dispatch` Methods

The `reducer` parameter in the constructor and the `dispatch` method have been updated to use the new action type `A`. This enforces that only actions of the specified type can be dispatched to update the state.

Example usage:
```typescript
interface AppState {
  count: number;
}

interface IncrementAction {
  type: "INCREMENT";
  payload: number;
}

const reducer = (state: AppState, action: IncrementAction): AppState => {
  // ...
};

const initialState: AppState = { count: 0 };

const store = new Store<AppState, IncrementAction>(reducer, initialState);
```

### Improved Type Safety

By specifying the action type when creating a new `Store` instance, TypeScript can now provide better type checking and inference. It ensures that the reducer function expects and handles the correct action type, reducing the chances of runtime errors caused by incompatible actions.

### Fixed
- Addressed issues reported in previous versions: Various bugs reported in previous versions have been fixed to ensure the library works as expected and provides a stable experience.

## Other Changes

- Improved error handling

## [2.0.33] - 06-06-2023

### Added
- Added mathematical utility functions:
  - `import { maths } from "utiliti-js"`
  - `clamp`: Restricts a value within a specified range.
  - `lerp`: Performs linear interpolation between two values.
  - `toDegrees`: Converts an angle from radians to degrees.
  - `toRadians`: Converts an angle from degrees to radians.
  - `roundTo`: Rounds a number to a specified number of decimal places.
  - `randomInt`: Generates a random integer within a specified range.
  - `sum`: Calculates the sum of an array of numbers.
  - `average`: Calculates the average of an array of numbers.
  - `min`: Finds the minimum value in an array of numbers.
  - `max`: Finds the maximum value in an array of numbers.
  - `factorial`: Calculates the factorial of a number.
  - `fibonacci`: Generates the Fibonacci sequence up to a specified number of terms.
  - `isPrime`: Checks if a number is prime.
  - `gcd`: Calculates the greatest common divisor of two numbers.
  - `lcm`: Calculates the least common multiple of two numbers.
  - `isEven`: Checks if a number is even.
  - `isOdd`: Checks if a number is odd.

- Added string manipulation utility functions:
  - `import { strings } from "utiliti-js"`
  - `capitalize`: Converts the first character of a string to uppercase.
  - `reverse`: Reverses the characters in a string.
  - `truncate`: Truncates a string to a specified length.
  - `startsWith`: Checks if a string starts with a specified prefix.
  - `endsWith`: Checks if a string ends with a specified suffix.
  - `contains`: Checks if a string contains a specified substring.
  - `replaceAll`: Replaces all occurrences of a substring in a string.
  - `countWords`: Counts the number of words in a string.
  - `countCharacters`: Counts the number of characters in a string.
  - `stripTags`: Removes HTML tags from a string.
  - `isValidEmail`: Checks if a string is a valid email address.
  - `isValidURL`: Checks if a string is a valid URL.

- Added date manipulation utility functions to `DateFilter`:
  - `isLeapYear`: Checks if a given year is a leap year.
  - `getDaysInMonth`: Gets the number of days in a month for a given year.
  - `addDays`: Adds a specified number of days to a given date.
  - `subtractDays`: Subtracts a specified number of days from a given date.
  - `compareDates`: Compares two dates and returns the difference in days.
  - `isPastDate`: Checks if a given date is in the past.

- Added `IStore` interface for `Store` class.


Please note that this is a major release that introduces significant changes to
the library. It is recommended to thoroughly test the updated library in your project environment before deploying it to production. If you encounter any issues or have any feedback, please don't hesitate to reach out to us.

We hope that these enhancements will improve the overall developer experience
and help catch potential issues at compile-time. Happy coding!

### Fixed
- No issue reported since last release.

## Contributions

UtilitiJs is an open-source project, and contributions from the community are
to contribute to the library, please visit the [UtilitiJs GitHub repository](https://github.com/Judeadeniji/utiliti-js) for more information.
highly encouraged. If you encounter any issues, have feature requests, or want

UtilitiJs is built and maintained by a passionate [developer](https://github.com/Judeadeniji) who aim to provide a reliable and feature-rich utility library to the JavaScript community.

## License

UtilitiJs is released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the library in your projects, both personal and commercial.

Start leveraging the power of UtilitiJs to simplify your JavaScript development and unlock new possibilities in your projects. Happy coding with UtilitiJs!


- [Twitter](https://twitter.com/feranmiwebdev/)

Copyright © 2023 [Adeniji Oluwaferanmi](http://feranmiwebdev.netlify.app/). All Rights Reserved.
