- [Getting Started](#utiliti_start)
  - [Installation](#utiliti_installation)
  - [Usage](#utiliti_usage)
- [Modules](#utiliti_module)
  - [Core](#utiliti_module_core)
  - [Operators](#utiliti_module_operators)
- [Examples](#utiliti_example)
  - [Core](#utiliti_example_core)
  - [Operators](#utiliti_example_operators)

## Documentation

### UTILITIJS

UtilitiJS is a collection of functions that provide utility functionality for web applications. The functions include Http which provides methods to send **HTTP** requests, **dataFilter** which takes a filter function and an array of data and returns the data that matches the filter, **dateFilter** which provides functions to manipulate dates, and **setStore** which is a simple implementation of the Redux store.

---

- **Version:** 2.0
- **File:** [Utiliti.Js](assets/lib/utiliti.js)
- **Author:** [Adeniji OluwaFeranmi](http://feranmiwebdev.netlify.app)

- **Created:** 27 November, 2022
- **Update:** 19 December, 2022

If you have any questions that are beyond the scope of this help file, Please feel free to email via [Support Page](https://twitter.com/Feranmiwebdev).

---

## Installation

To use UtilitiJs in your project, include it in your project using a `<script>` tag:

    `<script src="https://cdn.jsdelivr.net/npm/utilitijs-beta@0.0.12/index.js"></script>`

Or, if you're using a module bundler like Webpack or Rollup, you can import it into your project using the following syntax:

```
npm i utiliti-js
pnmpm i utiliti-js
yarn add utiliti-js
```

---

## Usage

The code exports several utility functions, which can be used in a JavaScript application by importing the module. For example, you could use the Http function to send HTTP requests to a server, like this:

```
 import { Core } from "utiliti-js";
 const url = 'http://example.com/api/data';
 const header = { 'Content-Type': 'application/json' };
 const http = new Core.Http();
 http.get(url, header)
 .then(response => console.log(response))
 .catch(error => console.error(error));
```

---

## Modules

The `Core` module contains functions for making `HTTP` requests. It defines a
`Core` object with methods for performing different operations like managing
state, handling data etc. It also defines a `CustomError()` function for
creating custom error objects that have a `getInfo()` method for retrieving
information about the error.
The **UtilitiJs** Library is intended to be used as a utility library in a JavaScript application. It also defined a `Operators` module that allows you to perform logical operations, check types, analyse data and do complex calculations.

---

### Core

`Core` is an Object with loads of utility functions The first function, Http, contains methods for making different types of HTTP requests: get, post, put, and delete. The dataFilter function takes in a filter function and an array of data and returns an array of data that has been filtered according to the filter function. The dateFilter function contains functions for formatting dates as text or according to a specified format. Finally, the setStore function is a basic implementation of a redux store, which is a state management tool for managing application state in JavaScript applications.

## Operators

The Operators module is a set of JavaScript functions that defines a number of
different logical, comparison, and value checking operations. It also includes
some functions for checking the type of a value, as well as some statistical
functions for calculating the sum, mean, median, and mode of an array of
numbers. Some examples of the operations defined in this function are `and`,
`or`, `not`, `xor`, `nand`, `nor`, `implies`, `iff`, `equals`, `greaterThan`,
`lessThan`, and `isPositive`, `isNaN`, `parseInt`, `parseFloat`. These functions can be used to perform logical
operations on values and compare them in different ways.

---

## Examples

### Core

This are examples of functions in the `Core` object and they can be imported by

```
import { Core } from "utiliti-js"
```

#### Http

The Http class provides methods for making HTTP requests to a server. It has the following methods:

##### get(url, headers)

Sends a GET request to the specified url with the specified headers. Returns a promise that resolves with the response data in JSON format.

```
  const http = new Core.Http();

  http.get('https://example.com/api/v1/users',
 { 'Content-Type': 'application/json'  })
 .then(data => { // Use the data here  })
 .catch(error => {  // Handle the error here });
```

##### post(url, data, headers)

Sends a POST request to the specified url with the specified data and headers. Returns a promise that resolves with the response data in JSON format.

```
   const http = new Core.Http();
  const data = {
  username: 'johndoe',
  password: 'password123'
     };

  http.post('https://example.com/api/v1/users', data, { 'Content-Type': 'application/json' })
  .then(data => { // Use the data here })
  .catch(error => { // Handle the error here });
```

##### put(url, data, headers)

Sends a PUT request to the specified url with the specified data and headers. Returns a promise that resolves with the response data in JSON format.

```
    const http = new Core.Http();
    const data = {
     username: 'johndoe',
     password: 'newpassword123'
  };

http.put('https://example.com/api/v1/users/1', data, {
'Content-Type': 'application/json'})
.then(data => { // Use the data here})
.catch(error => {
 // Handle the error here
});
```

##### patch(url, data, headers)

Sends a PATCH request to the specified url with the specified data and headers. Returns a promise that resolves with the response data in JSON format. The main difference between the PATCH and PUT request is that PATCH replaces only part of the data while PUT replaces the whole thing.

```
  const http = new Core.Http();
  const data = {
     password: 'newpassword123'
   };

 http.patch('https://example.com/api/v1/users/1', data, {
  'Content-Type': 'application/json'
})
.then(data => { // Use the data here  })
.catch(error => { // Handle the error here });
```

##### delete(url, headers)

Sends a DELETE request to the specified url with the specified headers. Returns a promise that resolves with the response data in JSON format.

```
  const http = new Core.Http();

   http.delete('https://example.com/api/v1/users/1',
   { 'Content-Type': 'application/json' })
  .then(data => {
   // Use the data here
   })
   .catch(error => {
   // Handle the error here
   });
```

#### dataFilter()

The \`dataFilter\` function takes a \`filterFn\` and an \`array\` of data and returns a new array containing only the items from the original array that match the criteria defined by the \`filterFn\`.

```
 const data = [
 { id: 1, name: 'John Doe' },
 { id: 2, name: 'Jane Doe' },
 { id: 3, name: 'Joe Smith' } ];
 // Create a filter function that returns only items with the name 'Jane Doe'
  const filterFn = item => item.name === 'Jane Doe';
  // Use the dataFilter function to filter the data  const
  filteredData = Core.dataFilter(filterFn, data);
  console.log(filteredData); // Output: [{ id: 2, name: 'Jane Doe' }]
```

##### text(date)

Takes a date and returns a string representation of the date in the format "Month Day, Year" (e.g. "January 1, 2020").

```
  const dateFilter = new Core.dateFilter();
 const date = new Date('1/1/2020');
 const formattedDate = dateFilter.text(date);
 console.log(formattedDate); // Output: "January 1, 2020"
```

##### formatDate(date, format)

Takes a date and a format string and returns a string representation of the date in the specified format. The format string can contain the following placeholder values: yyyy: The four-digit year mm: The month as a two-digit number (e.g. 01, 02, etc.) dd: The day as a two-digit number (e.g. 01, 02, etc.) HH: The hour as a two-digit number in 24-hour format (e.g. 00, 01, etc.) MM: The minute as a two-digit number (e.g. 00, 01, etc.) SS: The second as a two-digit number (e.g. 00, 01, etc.)

    ```
     const dateFilter = new Core.dateFilter();
    const date = new Date('1/1/2020 13:30:00');
    const formattedDate = dateFilter.formatDate(date, 'yyyy-mm-dd HH:MM:SS');
    console.log(formattedDate); // Output: "2020-01-01 13:30:00"
    ```

###### Example

```
  import { Core } from "utiliti-js";
  import { parseFloat } from "utiliti-js/Operators/type-check.js";
   dateFilter = Core.dateFilter;
   const filter = new dateFilter();
   let date = Date();
   const dateFilter = new Core.dateFilter();
  const init = parseFloat(filter.formatDate(date, "MM"));
  const now = parseFloat(filter.formatDate(Date(), "MM"));
  console.log(now - init, " minutes ago"); // Logs xx minutes ago
```

#### setStore

The setStore function is an implementation of the Redux store concept. It can be used for managing application state in JavaScript applications. The setStore function takes a reducer function and an optional enhancer function, and returns a Redux store object with the following methods:

`getState()` Returns the current state of the store.

```
  const reducer = (state = initialState, action) => {
  // Handle the action and return the new state
  };
  const store = Core.setStore(reducer);
  const state = store.getState();

  console.log(state); // Output: The current state of the store
```

`dispatch(action)` Dispatches an \`action\` to the store, which triggers the \`reducer\` function to update the store's state.

```
 const initialState = {
   todos: []
 };


  const reducer = (state = initialState, action) => {         switch (action.type) {
   case 'ADD_TODO':
    return {
      ...state,
      todos: [...state.todos, action.todo]
   };
   default:
    return state;
    }
};

 const store = Core.setStore(reducer);

 const action = {
   type: 'ADD_TODO', todo: { id: 1, text: 'Buy groceries' }
 };

  store.dispatch(action);

   console.log(store.getState()); // Output: { todos: [{ id: 1, text: 'Buy groceries' }] }
```

#### subscribe(listener)

Subscribes a listener function to the store, which will be called every time the store's state is updated. The listener function will be called with no arguments.

```
  const initialState = {
       todos: []
  };

   const reducer = (state = initialState, action) => {
   // Handle the action and return the new state
  };

  const store = Core.setStore(reducer, enhancer = () => () => {});

  // Create a listener function that logs the state to the console

  const listener = () => {
   console.log(store.getState());
   };

  // Subscribe the listener to the store

  const unsubscribe = store.subscribe(listener);

  // Dispatch an action to update the store's state

  store.dispatch({ type: 'ADD_TODO', todo: { id: 1, text: 'Buy groceries' } });

  // Output: { todos: [{ id: 1, text: 'Buy groceries' }] }

  // Unsubscribe the listener from the store
        unsubscribe();

  // Dispatch another action to update the store's state

  store.dispatch({ type: 'ADD_TODO', todo: { id: 2, text: 'Do laundry' } });

  // Output: (Nothing, because the listener has been unsubscribed)
```

##### replaceReducer(nextReducer)

Replaces the current reducer function with a new nextReducer function.

```
  const initialState = {
         todos: []
  };

  const reducer = (state = initialState, action) => {
    // Handle the action and return the new state
  };

  const store = Core.setStore(reducer);

  // Create a new reducer function that adds a new property to the state

  const nextReducer = (state, action) => {
     return {
      ...state,
    newProperty: 'This is a new property'
   };
};
  // Replace the current reducer with the new reducer

  store.replaceReducer(nextReducer);

  // Dispatch an action to update the store's state

  store.dispatch({ type: 'ADD_PROPERTY' });

  console.log(store.getState()); // Output: { todos: [], newProperty: 'This is a new property' }
```

#### getReducer()

Returns the current reducer function used by the store.

```
  const initialState = {
        todos: []
  };

  const reducer = (state, action) => {
  // Handle the action and return the new state
  };

  const store = Core.setStore(reducer);

  const currentReducer = store.getReducer();

  console.log(currentReducer); // Output: The current reducer function
```

### Operators

### Operators/logic

`import {\*Operation name*\} from "utiliti-js/Operators/logic.js"`

#### or

```
import { logic } from "utiliti-js"

// usage:
const operationName = logic.<Operation name>
```

The Operators/logic module defines a number of utility functions for performing logical operations. These functions can be used to check the truth value of conditions, and to combine multiple conditions in a concise and readable way.

### and

The `and` function takes any number of arguments and returns `true` if and only if all of the provided arguments are truthy. For example, the following code would return `true`:

`and(true, 1, 'hello')`

#### or

The `or` function also takes any number of arguments and returns `true` if any of the provided arguments are truthy. For example, the following code would also return `true`:

    `or(false, 0, '')`

#### not

The `not` function takes a single argument and returns the negated truth value of that argument. For example, the following code would return `true`:

     `not(false)`

#### xor

The `xor` function takes any number of arguments and returns `true` if an odd number of the provided arguments are truthy. For example, the following code would return `true`:

    `xor(false, true, true)`

#### nand

The `nand` function takes any number of arguments and returns the negated value of the `and` function applied to the same arguments. For example, the following code would return `false`:

`nand(true, 1, 'hello')`

#### nor

The `nor` function takes any number of arguments and returns the negated value of the `or` function applied to the same arguments. For example, the following code would also return `false`:

`nor(false, 0, '')`

#### implies

The `implies` function takes two arguments, `a` and `b`, and returns `true` if `a` is falsy or `b` is truthy. For example, the following code would return `true`:

`implies(false, true)`

#### if

The `iff` function takes two arguments, `a` and `b`, and returns `true` if `a` and `b` have the same truth value. For example, the following code would return `false`:

      `iff(true, false)`

In summary, the Operators function provides a number of useful utility functions for performing logical operations in JavaScript. These functions can be used to write more concise and readable code that operates on the truth values of conditions.
The Operators function defines a number of utility functions for performing comparison operations. These functions can be used to compare two values and determine their relative size or equality.

### Operators/compare

    `import {\*Operation name*\} from "utiliti-js/Operators/compare.js"`

### or

    ```
    import { compare } from "utiliti-js"

    // usage:
    const operationName = compare.<operation name>
    ```

#### equals

The `equals` function takes two arguments and returns `true` if and only if the two arguments are strictly equal (i.e., they have the same value and type). For example, the following code would return `true`:

            `equals(1, 1)`


#### greaterThan

The `greaterThan` function takes two arguments and returns `true` if the first argument is strictly greater than the second. For example, the following code would return `true`:

     `greaterThan(2, 1)`

#### lessThan

The `lessThan` function takes two arguments and returns `true` if the first argument is strictly less than the second. For example, the following code would also return `true`:

           `lessThan(1, 2)`

### Operators/value-check

    `import {\*Operation name*\} from "utiliti-js/Operators/value-check.js"`

#### or

```
import { valueCheck } from "utiliti-js"

// usage:
const operationName = valueCheck.<Operation name>
```

#### isPositive

The `isPositive` function takes a single numeric argument and returns `true` if the argument is greater than zero. For example, the following code would return `true`:

            `isPositive(1)`

#### isNegative

The `isNegative` function takes a single numeric argument and returns `true` if the argument is less than zero. For example, the following code would also return `true`:

            `isNegative(-1)`

#### isZero

The `isZero` function takes a single numeric argument and returns `true` if the argument is equal to zero. For example, the following code would also return `true`:`

           `isZero(0)`

#### isEven

The `isEven` function takes a single numeric argument and returns
`true` if the argument is an even integer. For example, the following
code would return `true`:

      `isEven(2)`

#### isOdd

The `isOdd` function takes a single numeric argument and returns
`true` if the argument is an odd integer. For example, the following
code would also return `true`:

      `isOdd(1)`



#### isPrime

The `isPrime` function takes a single numeric argument and returns
`true` if the argument is a prime number. For example, the following
code would return `true`:

    `isPrime(3)`

#### isWhole

The `isWhole` function takes a single numeric argument and returns
`true` if the argument is an integer. For example, the following code
would also return `true`:

    `isWhole(2)`

#### isFractional

The `isFractional` function takes a single numeric argument and returns `true` if the argument is not an integer. For example, the
following code would return `true`:

    `isFractional(0.5)`

### Type Checkers

These functions can be used to check the type of a given argument, and to determine whether it belongs to a particula type.

### Operators/type-check

    `import {\*Operation name*\} from "utiliti-js/Operators/type-check.js"`

#### or

```
import { typeCheck } from "utiliti-js"

// usage:
const operationName = typeCheck.<Operation name>
```

#### isInteger

The `isInteger` function takes a single argument and returns
`true` if the argument is an integer. For example, the following code
would return `true`:

    `isInteger(1)`

#### isString

The `isString` function takes a single argument and returns `true` if
the argument is a string. For example, the following code would also
return `true`:

    `isString('hello')`

#### isArray

The `isArray` function takes a single argument and returns `true` if
the argument is an array. For example, the following code would also
return `true`:

    `isArray([1, 2, 3])`

#### isObject

The `isObject` function takes a single argument and returns `true` if
the argument is an object (i.e., it is not an array, null, or a
primitive type). For example, the following code would return `true`:

    `isObject({ name: 'John' })`

#### isFunction

The `isFunction` function takes a single argument and returns `true`
if the argument is a function. For example, the following code would
also return `true`:

    `isFunction(x => x * 2)`

#### isBoolean

The `isBoolean` function takes a single argument and returns `true`
if the argument is a boolean value (i.e., `true` or `false`). For example, the following code would return `true`:

    `isBoolean(true)`

### Statistical Operations

### Operators/array

    `import {\*Operation name*\} from "utiliti-js/Operators/array.js"`

#### or

```
import { array } from "utiliti-js"

// usage:
const operationName = array.<Operation name>
```

The Operators/array module defines a number of utility functions for performing basic statistical calculations on arrays of numbers. These functions can be used to compute common statistical measures, such as the sum, mean, median, and mode of a dataset.

#### Sum

The `sum` function takes a single array of numbers as an argument and returns the sum of the elements in the array. For example, the following code would return
`6`:
`sum([1, 2, 3])`

#### mean

The `mean` function takes a single array of numbers as an argument and returns the arithmetic mean of the elements in the array. For example, the following code would return `2`:
`mean([1, 2, 3])`

#### median

The `median` function takes a single array of numbers as an argument and returns the median of the elements in the array. For an array with an odd number of elements, the median is the middle element of the sorted array. For an array with an even number of elements, the median is the average of the two middle elements of the sorted array.
For example, the following code would return `2`:

    `median([1, 2, 3])`

#### mode

The `mode` function takes a single array of numbers as an argument
and returns the mode of the elements in the array. The mode is the
element that occurs most frequently in the array.
For example, the following code would return `2`:

    `mode([1, 2, 2, 3])`

In summary, the Operators/array module provides a number of useful utility functions for performing basic statistical calculations in JavaScript. These functions can be used to compute common statistical measures, such as the sum, mean, median, and mode of a dataset, which is often useful in data analysis and other operations on numerical data.

### Operators/object

**Operators/object.js** is a JavaScript module that contains a set of utility functions for working with objects. These functions include getting and setting properties, checking for property existence, retrieving the keys and values of an object, creating shallow and deep copies of objects, and iterating over an object's properties using forEach, map, and filter.

```
  import {/* Operation name */} from "utiliti-js/Operators/object.js"
```

#### or

```
import { object } from "utiliti-js"

// usage:
const operationName = object.<Operation name>
```

The module exports each of these functions so that they can be used by other
JavaScript modules or scripts. By using these utility functions, developers can
write cleaner and more concise code when working with objects, avoiding the need
to write boilerplate code for common object manipulations.

1. `getProperty(object, key)`: Returns the value at the specified key in the object.
2. `setProperty(object, key, value)`: Sets the value at the specified key in the object.
3. `hasProperty(object, key)`: Returns a boolean indicating whether the object has a property with the specified key.
4. `getKeys(object)`: Returns an array of the object's own enumerable property names.
5. `getValues(object)`: Returns an array of the object's own enumerable property values.
6. `getEntries(object)`: Returns an array of the object's own enumerable property [key, value] pairs.
7. `extendObject(object, ...sources)`: Copies the own enumerable properties of source objects to the target object and returns the target object.
8. `cloneShallow(object)`: Creates a shallow copy of the object.
9. `cloneDeep(object)`: Creates a deep copy of the object.
10. `forEachProperty(object, callback)`: Calls the callback function for each own enumerable property of the object.
11. `mapProperties(object, callback)`: Calls the callback function for each own enumerable property of the object and returns a new object with the returned values.
12. `filterProperties(object, callback)`: Calls the callback function for each own enumerable property of the object and returns a new object with the properties for which the callback returned a truthy value.

These functions can be imported and used in other JavaScript modules or scripts.

#### getProperty(object, key):

This function takes an object and a key as arguments and returns the value at the specified key in the object. It is equivalent to using the bracket notation to access an object's property.

**_Example_**:

```
const person = { name: "Alice", age: 25 };
const name = getProperty(person, "name"); // "Alice"
const age = getProperty(person
```

Error Handling

---

---

---

#### setProperty(object, key, value):

This function takes an object, a key, and a value as arguments and sets the value at the specified key in the object. It is equivalent to using the bracket notation to set an object's property.

**_Example_**:

```
const person = { name: "Alice", age: 25 };
setProperty(person, "name", "Bob");
setProperty(person, "age", 30);
console.log(person); // { name: "Bob", age: 30 }
```

---

#### hasProperty(object, key):

This function takes an object and a key as arguments and returns a boolean indicating whether the object has a property with the specified key.

**_Example_**:

const person = { name: "Alice", age: 25 };
const hasName = hasProperty(person, "name"); // true
const hasEmail = hasProperty(person, "email"); // false

---

#### getKeys(object):

This function takes an object as an argument and returns an array of the object's own enumerable property names.

**_Example_**:

```
const person = { name: "Alice", age: 25 };
const keys = getKeys(person); // ["name", "age"]
```

---

#### getValues(object):

This function takes an object as an argument and returns an array of the object's own enumerable property values.

**_Example_**:

```
const person = { name: "Alice", age: 25 };
const values = getValues(person); // ["Alice", 25]
```

---

#### getEntries(object):

This function takes an object as an argument and returns an array of the object's own enumerable property [key, value] pairs.

**_Example_**:

```
const person = { name: "Alice", age: 25 };
const entries = getEntries(person); // [["name", "Alice"], ["age", 25]]
```

---

#### extendObject(object, ...sources):

This function takes an object as the first argument and any number of additional objects as sources. It copies the own enumerable properties of the source objects to the target object and returns the target object.

Example:

```
const person = { name: "Alice", age: 25 };
const info = { email: "alice@example.com", phone: "555-1234" };
const extendedPerson = extendObject(person, info);
console.log(extendedPerson); // { name: "Alice", age: 25, email:
"alice@example.com", phone: "555-1234" }
```

---

#### cloneShallow(object):

This function takes an object as an argument and creates a shallow copy of the object. The new object has the same properties and property values as the original object, but is a separate object in memory.

**_Example_**:

```
const person = { name: "Alice", age: 25 };
const clonedPerson = cloneShallow(person);
console.log(clonedPerson); // { name: "Alice", age: 25 }
console.log(clonedPerson === person); // false
```

---

#### cloneDeep(object):

The cloneDeep function creates a deep copy of the given object by serializing it to JSON and then parsing it back. This function is useful when you need to make a copy of an object and modify it without affecting the original object.

Syntax:

```
cloneDeep(object)
```

**Parameters:**

`object`: The object to be cloned.

**Return value:**

A deep copy of the given object.

**_Example:_**

```
const obj1 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY',
    country: 'USA'
  }
};

const obj2 = cloneDeep(obj1);
obj2.age = 31;
obj2.address.city = 'Los Angeles';

console.log(obj1);
// { name: 'John', age: 30, address: { city: 'New York', state: 'NY', country: 'USA' } }

console.log(obj2);
// { name: 'John', age: 31, address: { city: 'Los Angeles', state: 'NY', country: 'USA' } }

```

---

The forEachProperty function iterates over all the own enumerable properties of an object and calls the provided callback function for each property.

**Syntax:**

```
forEachProperty(object, callback)
```

**Parameters:**

- `object`: The object to be iterated over.
- `callback`: The function to be called for each property. The function receives three arguments: \* `value`: The value of the current property.
  - `key`: The key of the current property.
  - `object`: The object being iterated over.

**Return value:**

The forEachProperty function does not return anything.

**Example:**

```
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

forEachProperty(person, (value, key) => {
  console.log(`${key}: ${value}`);
});
// name: John
// age: 30
// gender: male
```

---

The mapProperties function creates a new object with the same keys as the input object, but with the values transformed by the provided callback function.

**Syntax:**

```
mapProperties(object, callback)
```

**Parameters:**

- `object`: The object to be transformed.
- `callback`: The function to be called for each property. The function receives three arguments:
  - `value`: The value of the current property.
  - `key`: The key of the current property.
  - `object`: The object being transformed.

**Return value:**
A new object with the transformed values.

** Example: **

```
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

const personInfo = mapProperties(person, (value, key) => {
  if (key === 'age') {
    return value * 2;
  } else {
    return value.toUpperCase();
  }
});

console.log(personInfo);
// { name: 'JOHN', age: 60, gender: 'MALE' }
```

---

#### filterProperties(object, callback):

`filterProperties` is a function that takes an object and a callback function and returns a new object with only the properties that meet the criteria specified by the callback.

**Parameters:**
`object`: An object to filter the properties from.
`callback`: A function that takes three `arguments`: `value`, `key`, and
`object`. The
value argument is the value of the property, the `key` argument is the name of the
property, and the object argument is the original `object`. The `callback` should
return a truthy or falsy value.

**Return Value**
A new object with only the properties that meet the criteria specified by the callback.

**Example**

```
const person = {
  name: 'John',
  age: 30,
  gender: 'male',
  country: 'USA',
};

const filteredPerson = filterProperties(person, (value, key) => key === 'name' || key === 'age');

console.log(filteredPerson);
// Output: { name: 'John', age: 30 }

```

In this example, `filterProperties` is used to create a new object that only contains the `name` and `age` properties of the original `person` object. The `callback` function checks if the key argument is equal to `'name'` or `'age'` and returns a truthy value for those properties.

# Troubleshooting

- "Utiliti Error: url must be a string" when using the Http function: This error occurs when the url argument passed to the Http function is not a string. Make sure that you are passing a valid string as the url argument.

- "Utiliti Error: header must be an object" when using the Http function: This error occurs when the header argument passed to the Http function is not an object. Make sure that you are passing a valid object as the header argument.

- "Utiliti Error: data must be an array" when using the dataFilter function: This error occurs when the data argument passed to the dataFilter function is not an array. Make sure that you are passing a valid array as the data argument

- "Utiliti Error: the body of the request must be an object" when using the Http function: This error occurs when the data argument passed to the Http function is not an object. Make sure that you are passing a valid object as the data argument.

- "Utiliti Error: filter must be a function" when using the dataFilter function: This error occurs when the filter argument passed to the dataFilter function is not a function. Make sure that you are passing a valid function as the filter argument.

---

---

- [Twitter](https://twitter.com/feranmiwebdev/)

Copyright © 2023 [TheLazyDev](http://feranmiwebdev.netlify.app/). All Rights Reserved.
