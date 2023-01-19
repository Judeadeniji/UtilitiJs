
   function CustomError(message, code) {
  // Use the Error constructor to create an error object
  const error = new Error(message);

  // Set the name property of the error object to "Utiliti Error"
  error.name = "Utiliti Error";

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
 /* this.get = (url, header) => { return fetch(url, {
    headers: header
  })

    .then(response => response.json()); }
*/
 this.get = (url, header) => {
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
 this.post = (url, data, header) => {
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
 this.put = (url, data, header) => {
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

 this.patch = (url, data, header) => {
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
 this.delete = (url, header) => {
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
  let state;;
  let listeners = [];

  if (enhancer) {
    return enhancer(setStore)(reducer);
  }

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
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



export {
  Http,
  dateFilter,
  dataFilter,
  setStore,
  mergeReducers,
  createSubscriber,
  applyMiddleware,
  generateId,
  TaskQueue,
  UrlParser,
  Random,
  DataValidator,
  trim
}
