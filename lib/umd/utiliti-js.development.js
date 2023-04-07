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

/***/ "./Core/index.js":
/*!***********************!*\
  !*** ./Core/index.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataValidator": () => (/* binding */ DataValidator),
/* harmony export */   "Http": () => (/* binding */ Http),
/* harmony export */   "Random": () => (/* binding */ Random),
/* harmony export */   "TaskQueue": () => (/* binding */ TaskQueue),
/* harmony export */   "UrlParser": () => (/* binding */ UrlParser),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "createSubscriber": () => (/* binding */ createSubscriber),
/* harmony export */   "dataFilter": () => (/* binding */ dataFilter),
/* harmony export */   "dateFilter": () => (/* binding */ dateFilter),
/* harmony export */   "generateId": () => (/* binding */ generateId),
/* harmony export */   "mergeReducers": () => (/* binding */ mergeReducers),
/* harmony export */   "setStore": () => (/* binding */ setStore),
/* harmony export */   "trim": () => (/* binding */ trim)
/* harmony export */ });

   function CustomError(message, code) {
  // Use the Error constructor to create an error object
  const error = new Error(message);

  // Set the name property of the error object to "Utiliti Error"
  error.name = "Utiliti: Error";

  // Set the code property of the error object
  error.code = code;

  // Capture a stack trace at the point where the error occurred
  Error.captureStackTrace(error, CustomError);

  // Add a getInfo method to the error object
  error.getInfo = function() {
    return {
      code: this.code,
      message: this.message,
      stack: this.stack
    };
  }

  // Return the error object
  return error;
}

  
 /**
  * Body takes in an object
  * Headers also takes an object
  * */
 function Http() {
  // Send a GET request to retrieve data from the server

 this.get = (url, header = {}) => {
      // Check if url is a string
  if (typeof url !== 'string') {
    // If not, throw a CustomError
    throw new CustomError('url must be a string');
  }
       // Check if header is an object
  if (typeof header !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('header must be an object');
  }
   return fetch(url, {
   headers: header
 })
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
 }

  // Send a POST request to create a new resource on the server
 this.post = (url, data, header = {}) => {
     // Check if url is a string
  if (typeof url !== 'string') {
    // If not, throw a CustomError
    throw new CustomError('url must be a string');
  }
       // Check if header is an object
  if (typeof header !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('header must be an object');
  }
       // Check if data is an object
  if (typeof data !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('the body of the request must be an object');
  }
   return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: header
  }); }

  // Send a PUT request to update an existing resource on the server
 this.put = (url, data, header = {}) => {
      // Check if url is a string
  if (typeof url !== 'string') {
    // If not, throw a CustomError
    throw new CustomError('url must be a string');
  }
       // Check if header is an object
  if (typeof header !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('header must be an object');
  }
       // Check if data is an object
  if (typeof data !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('the body of the request must be an object');
  }
   return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: header
  }); }

 this.patch = (url, data, header = {}) => {
      // Check if url is a string
  if (typeof url !== 'string') {
    // If not, throw a CustomError
    throw new CustomError('url must be a string');
  }
       // Check if header is an object
  if (typeof header !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('header must be an object');
  }
       // Check if data is an object
  if (typeof data !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('the body of the request must be an object');
  }
   return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: header
  }); }
  
  // Send a DELETE request to delete a resource on the server
 this.delete = (url, header = {}) => {
      // Check if url is a string
  if (typeof url !== 'string') {
    // If not, throw a CustomError
    throw new CustomError('url must be a string');
  }
       // Check if header is an object
  if (typeof header !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('header must be an object');
  }

   return fetch(url, {
    method: 'DELETE',
    headers: header
  }); }
}

 
 // Define a function that takes a filter function and an array of data
function dataFilter(filterFn, data) {
  // Create an empty array to store the filtered data
  const filteredData = [];
  
  // Loop through each item in the data array
  for (const item of data) {
  // Check if filterFn is a function
  if (typeof filterFn !== 'function') {
    // If not, throw a CustomError
    throw new CustomError('the callback provided to the dataFilter must be a function');
  }
    // Apply the filter function to the current item
    const result = filterFn(item);
    
    // If the filter function returns true, add the item to the filtered data array
    if (result === true) {
      filteredData.push(item);
    }
  }
  
  // Return the filtered data array
  return filteredData;
}



function dateFilter() {
  this.text = (date) => {
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
        "December"
  ];

  const monthName = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${monthName} ${day}, ${year}`;
  }
  
  this.formatDate = (date, format) => {
      // Create a Date object from the date
  let d = new Date(date);

     // Check if date format is valid
  if (typeof format !== 'string') {
    // If not, throw a CustomError
    throw new CustomError('provide a valid date format');
  }
  // Create a string representation of the date in the specified format
  let formattedDate = format
    .replace('yyyy', d.getFullYear())
    .replace('mm', d.getMonth() + 1)
    .replace('dd', d.getDate())
    .replace('HH', d.getHours())
    .replace('MM', d.getMinutes())
    .replace('SS', d.getSeconds());

  return formattedDate;
  }
}



function setStore(reducer, enhancer) {
  let state;
  let listeners = [];

  if (enhancer) {
    return enhancer(setStore)(reducer);
  }

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener(state));
  };

  const subscribe = (listener) => {
    // Check if listener is a string
  if (typeof listener === 'string') {
    // If not, throw a CustomError
    throw new CustomError('Cannot subscribe to a string');
  }
       // Check if url is a string
  if (typeof listener !== 'function') {
    // If not, throw a CustomError
    throw new CustomError('you must subscribe to a function');
  }
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const replaceReducer = (nextReducer) => {
    reducer = nextReducer;
  };

  const getReducer = () => reducer;

  // Check if reducer is a function
  if (typeof reducer !== 'function') {
    // If not, throw a CustomError
    throw new CustomError('reducer must be a function');
  }

  dispatch({});

  return { getState, dispatch, subscribe, replaceReducer, getReducer };
}


function applyMiddleware(...middlewares) {
  return setStore => (...args) => {
    const store = setStore(...args);

    let dispatch = store.dispatch;
    middlewares.forEach(middleware => {
      dispatch = middleware(store)(dispatch);
    });

    return {
      ...store,
      dispatch
    };
  };
}

function mergeReducers (reducers) {
       // Check if reducers is an object
  if (typeof reducers !== 'object') {
    // If not, throw a CustomError
    throw new CustomError('provide an object containing the reducers');
  }
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

const createSubscriber = (store) => {
  return {
    subscribe: (callback) => {
      store.subscribe(callback);
    }
  };
};


function generateId() {
  // Generate a random number between 1 and 1000000
  const id = Math.floor(Math.random() * 1000000) + 1;
  return id;
}

// A function for creating and managing a queue of tasks
function TaskQueue() {
  // Create an array to store the tasks
  this.tasks = [];

  // Add a new task to the queue
  this.addTask = (task) => {
    this.tasks.push(task);
  };

  // Execute all tasks in the queue
  this.runTasks = () => {
    for (const task of this.tasks) {
  // Check if the given task is a function
  if (typeof task !== 'function') {
    // If not, throw a CustomError
    throw new CustomError('Cannot run a ' + typeof task + ' as a function. \n This requires a function');
  }
      task();
    }
  };

  // Clear the queue
  this.clearTasks = () => {
    this.tasks = [];
  };

  // Get the number of tasks in the queue
  this.getTaskCount = () => {
    return this.tasks.length;
  };
}


// A function for parsing and manipulating URLs
function UrlParser(url) {
       // Check if url is a string
  if (typeof url !== 'string') {
    // If not, throw a CustomError
    throw new CustomError('url must be a string');
  }
  // Parse the URL into its individual components
  const parsedUrl = new URL(url);

  // Define a function for getting the URL path
  this.getPath = () => {
    return parsedUrl.pathname;
  };

  // Define a function for getting the query string
  this.getQueryString = () => {
    return parsedUrl.search;
  };

  // Define a function for getting a specific query parameter
  this.getQueryParameter = (param) => {
    return parsedUrl.searchParams.get(param);
  };

  // Define a function for building a URL from its components
  this.buildUrl = (protocol, hostname, path, queryParams) => {
    // Create a new URL object with the specified components
    const url = new URL(protocol, hostname);
    url.pathname = path;

    // Add the query parameters to the URL
    for (const [param, value] of Object.entries(queryParams)) {
      url.searchParams.append(param, value);
    }

    // Return the URL as a string
    return url.toString();
  };
}

// A function for generating random numbers or strings
function Random() {
  // Define a function for generating a random number
  this.number = (min, max) => {
    // Generate a random number between the specified minimum and maximum values
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Define a function for generating a random string
  this.string = (length) => {
    // Create an array of characters to use in the string
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Create an empty string to store the random string
    let str = '';

    // Generate the random string by selecting random characters from the chars array
    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }

    // Return the random string
    return str;
  };
}

// A function for validating data
function DataValidator() {
  // Define a function for checking if a value is within a certain range
  this.inRange = (value, min, max) => {
    // Check if the value is within the specified range
    return value >= min && value <= max;
  };

  // Define a function for checking if a string matches a certain format
  this.matchFormat = (str, regex) => {
    // Check if the string matches the specified regex
    return regex.test(str);
  };

  // Define a function for checking if a string has a certain length
  this.hasLength = (str, length) => {
    // Check if the string has the specified length
    return str.length === length;
  };
}

function trim(str) {
  // Use a regular expression to match leading and trailing whitespace
  const regex = /^\s+|\s+$/g;
  
  // Replace the matched whitespace with an empty string
  return str.replace(regex, '');
}






/***/ }),

/***/ "./Operators/array.js":
/*!****************************!*\
  !*** ./Operators/array.js ***!
  \****************************/
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
  if(arr.length % 2 === 0) {
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
  const mode = Object.keys(count).reduce((a, b) =>
    count[a] > count[b] ? a : b
  );
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
  return Math.max(...arr);
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
  for(let i = 0; i < arr.length; i += size) {
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
  for(let i = shuffled.length - 1; i > 0; i--) {
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

/***/ "./Operators/compare.js":
/*!******************************!*\
  !*** ./Operators/compare.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "greaterThan": () => (/* binding */ greaterThan),
/* harmony export */   "lessThan": () => (/* binding */ lessThan)
/* harmony export */ });

  // Comparison operations

  function equals(a, b) {
    return a === b;
  }

  function greaterThan(a, b) {
    return a > b;
  }

  function lessThan(a, b) {
    return a < b;
  }
 
 

/***/ }),

/***/ "./Operators/logic.js":
/*!****************************!*\
  !*** ./Operators/logic.js ***!
  \****************************/
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

/***/ "./Operators/object.js":
/*!*****************************!*\
  !*** ./Operators/object.js ***!
  \*****************************/
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

// object-utils.js



/***/ }),

/***/ "./Operators/type-check.js":
/*!*********************************!*\
  !*** ./Operators/type-check.js ***!
  \*********************************/
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
  // Type checks

  function isInteger(num) {
    return Number.isInteger(num);
  }

  function isString(val) {
    return typeof val === 'string';
  }

  function isArray(val) {
    return Array.isArray(val);
  }

  function isObject(val) {
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
  }

  function isFunction(val) {
    return typeof val === 'function';
  }

  function isBoolean(val) {
    return typeof val === 'boolean';
  }
  
  // The isNaN function determines if a value is not a number
function isNaN(value) {
  // Use the built-in Number.isNaN function to check if the value is not a number
  return Number.isNaN(value);
}

// The parseInt function converts a string to an integer
function parseInt(str, radix) {
  // Use the built-in Number.parseInt function to convert the string to an integer
  return Number.parseInt(str, radix);
}

// The parseFloat function converts a string to a floating-point number
function parseFloat(str) {
  // Use the built-in Number.parseFloat function to convert the string to a floating-point number
  return Number.parseFloat(str);
}



/***/ }),

/***/ "./Operators/value-check.js":
/*!**********************************!*\
  !*** ./Operators/value-check.js ***!
  \**********************************/
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
  // Value checks

  function isPositive(num) {
    return num > 0;
  }

  function isNegative(num) {
    return num < 0;
  }

  function isZero(num) {
    return num === 0;
  }

  function isEven(num) {
    return num % 2 === 0;
  }

  function isOdd(num) {
    return num % 2 === 1;
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function isWhole(num) {
    return Number.isInteger(num);
  }

  function isFractional(num) {
    return num % 1 !== 0;
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
/* harmony export */   "Core": () => (/* reexport module object */ _Core_index_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "array": () => (/* reexport module object */ _Operators_array_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "compare": () => (/* reexport module object */ _Operators_compare_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "logic": () => (/* reexport module object */ _Operators_logic_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "object": () => (/* reexport module object */ _Operators_object_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "typeCheck": () => (/* reexport module object */ _Operators_type_check_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "valueCheck": () => (/* reexport module object */ _Operators_value_check_js__WEBPACK_IMPORTED_MODULE_6__)
/* harmony export */ });
/* harmony import */ var _Core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/index.js */ "./Core/index.js");
/* harmony import */ var _Operators_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Operators/array.js */ "./Operators/array.js");
/* harmony import */ var _Operators_compare_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Operators/compare.js */ "./Operators/compare.js");
/* harmony import */ var _Operators_logic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Operators/logic.js */ "./Operators/logic.js");
/* harmony import */ var _Operators_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Operators/object.js */ "./Operators/object.js");
/* harmony import */ var _Operators_type_check_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Operators/type-check.js */ "./Operators/type-check.js");
/* harmony import */ var _Operators_value_check_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Operators/value-check.js */ "./Operators/value-check.js");









if (true) {
  console.warn('You are now running UtilitiJs in development Mode', 'Happy Hacking 🎉');
}



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});