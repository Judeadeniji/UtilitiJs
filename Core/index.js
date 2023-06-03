/**
 * Represents a custom error.
 * @class CustomError
 * @extends Error
 * @param {string} message - The error message.
 * @param {number} code - The error code.
 * @returns {Error} The custom error object.
 */
function CustomError(message, code) {
  // Use the Error constructor to create an error object
  const error = new Error(message);

  // Set the name property of the error object to "Utiliti Error"
  error.name = "Utiliti: Error";

  // Set the code property of the error object
  error.code = code;

  // Capture a stack trace at the point where the error occurred
  Error.captureStackTrace(error, CustomError);

  /**
   * Returns an object with information about the error.
   * @memberof CustomError
   * @method getInfo
   * @returns {Object} The error information.
   * @property {number} code - The error code.
   * @property {string} message - The error message.
   * @property {string} stack - The stack trace.
   */
  error.getInfo = function () {
    return {
      code: this.code,
      message: this.message,
      stack: this.stack,
    };
  };

  // Return the error object
  return error;
}


/**
 * Body takes in an object
 * Headers also takes an object
 * */
function Http() {
  console.warn('Use Of Core.Http has been deprecated Use the Http module instead');
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
      const response = await fetch(url, { headers: header });
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response;
    } catch (error) {
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
        headers: header,
      });
      return response;
    } catch (error) {
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
        headers: header,
      });
      return response;
    } catch (error) {
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
        headers: header,
      });
      return response;
    } catch (error) {
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
        headers: header,
      });
      return response;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
}

function dataFilter() {
  console.warn('dataFilter has been renamed to DataFilter');
  return new DataFilter();
}

/**
 * Filters an array of data using a filter function.
 *
 * @param {Function} filterFn - The filter function used to filter the data.
 * @param {Array} data - The array of data to be filtered.
 * @returns {Array} The filtered data array.
 * @throws {CustomError} Throws a CustomError if the callback provided to the DataFilter is not a function.
 */
function DataFilter(filterFn, data) {
  /**
   * The filtered data array.
   * @type {Array}
   */
  const filteredData = [];

  for (const item of data) {
    if (typeof filterFn !== "function") {
      throw new CustomError(
        "The callback provided to the DataFilter must be a function."
      );
    }

    /**
     * The result of applying the filter function to the current item.
     * @type {*}
     */
    const result = filterFn(item);

    if (result === true) {
      filteredData.push(item);
    }
  }

  return filteredData;
}

function dateFilter() {
  console.warn('dateFilter has been renamed to DateFilter')
  return new DateFilter();
}

/**
 * A class representing a date filter.
 * @class
 */
function DateFilter() {
  /**
   * Converts a date to text format.
   * @param {Date} date - The date object to convert.
   * @returns {string} The date in text format.
   */
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
      "December",
    ];

    const monthName = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${monthName} ${day}, ${year}`;
  };

  /**
   * Formats a date based on the specified format.
   * @param {Date} date - The date object to format.
   * @param {string} format - The format to use for formatting the date.
   * Supported format specifiers: yyyy, mm, dd, HH, MM, SS, ago.
   * @returns {string} The formatted date.
   * @throws {CustomError} If the format is invalid.
   */
  this.formatDate = (date, format) => {
    // Create a Date object from the date
    let d = new Date(date);

    // Check if date format is valid
    if (typeof format !== "string") {
      // If not, throw a CustomError
      throw new CustomError("provide a valid date format");
    }

    // Handle "ago" format
    if (format === "ago") {
      const now = new Date();
      const diff = now - d;
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      if (years > 0) {
        return `${years} year${years > 1 ? "s" : ""} ago`;
      } else if (months > 0) {
        return `${months} month${months > 1 ? "s" : ""} ago`;
      } else if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else {
        return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
      }
    }

    // Create a string representation of the date in the specified format
    let formattedDate = format
      .replace("yyyy", d.getFullYear())
      .replace("mm", d.getMonth() + 1)
      .replace("dd", d.getDate())
      .replace("HH", d.getHours())
      .replace("MM", d.getMinutes())
      .replace("SS", d.getSeconds());

    return formattedDate;
  };
}


/**
 * Represents a store that holds the state and manages state updates.
 *
 * @param {function} reducer - The reducer function for state updates.
 * @param {Object} [initialState={}] - The initial state of the store.
 *
 * @throws {CustomError} If the reducer is not a function.
 * @returns {Object} The store object with various methods.
 */
function Store(reducer, initialState = {}) {
  let state = initialState;
  let listeners = [];

  /**
   * Returns the current state of the store.
   *
   * @returns {Object} The current state.
   */
  const getState = () => state;

  /**
   * Dispatches an action to update the state.
   *
   * @param {Object} action - The action object representing the state update.
   */
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener(state));
  };

  /**
   * Subscribes a listener function to be called on state changes.
   *
   * @param {function} listener - The listener function to be called on state changes.
   * @returns {function} A function to unsubscribe the listener.
   *
   * @throws {CustomError} If the listener is not a function.
   */
  const subscribe = (listener) => {
    // Check if listener is a function
    if (typeof listener !== "function") {
      // If not, throw a CustomError
      throw new CustomError("you must subscribe to a function");
    }
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  /**
   * Replaces the current reducer function with a new one.
   *
   * @param {function} nextReducer - The new reducer function.
   */
  const replaceReducer = (nextReducer) => {
    reducer = nextReducer;
  };

  /**
   * Returns the current reducer function.
   *
   * @returns {function} The current reducer function.
   */
  const getReducer = () => reducer;

  // Check if reducer is a function
  if (typeof reducer !== "function") {
    // If not, throw a CustomError
    throw new CustomError("reducer must be a function");
  }

  dispatch({});

  return { getState, dispatch, subscribe, replaceReducer, getReducer };
}

/**
 * Applies middlewares to the store's dispatch function.
 *
 * @param {...function} middlewares - The middlewares to apply.
 * @returns {function} A function that wraps the store and applies the middlewares.
 */
function applyMiddleware(...middlewares) {
  return (Store) =>
    (...args) => {
      const store = Store(...args);

      let dispatch = store.dispatch;
      middlewares.forEach((middleware) => {
        dispatch = middleware(store)(dispatch);
      });

      return {
        ...store,
        dispatch,
      };
    };
}

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
    throw new CustomError("provide an object containing the reducers");
  }
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
}

/**
 * Creates a subscriber object to subscribe to store updates.
 *
 * @param {Object} store - The store object to subscribe to.
 * @returns {Object} The subscriber object.
 */
const createSubscriber = (store) => {
  return {
    /**
     * Subscribes a callback function to be called on store updates.
     *
     * @param {function} callback - The callback function to be called on store updates.
     */
    subscribe: (callback) => {
      store.subscribe(callback);
    },
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
      if (typeof task !== "function") {
        // If not, throw a CustomError
        throw new CustomError(
          "Cannot run a " +
            typeof task +
            " as a function. \n This requires a function"
        );
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
  if (typeof url !== "string") {
    // If not, throw a CustomError
    throw new CustomError("url must be a string");
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
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    // Create an empty string to store the random string
    let str = "";

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
  return str.replace(regex, "");
}

export {
  Http,
  DateFilter,
  DataFilter,
  dateFilter,
  dataFilter,
  Store,
  mergeReducers,
  createSubscriber,
  applyMiddleware,
  CustomError,
  generateId,
  TaskQueue,
  UrlParser,
  Random,
  DataValidator,
  trim,
};
