/**
 * Represents a custom error.
 * @class CustomError
 * @extends Error
 */
class CustomError extends Error {
  constructor(message: string) {
    // Call the super constructor with the error message
    super(message);

    // Set the name property of the error object to "Utiliti Error"
    this.name = "Utiliti: Error";
  }
}

/**
 * Body takes in an object
 * Headers also takes an object
 */
function Http() {
  console.warn('Use Of Core.Http has been deprecated. Use the Http module instead');
  
  // Send a GET request to retrieve data from the server
  this.get = async (url: string, header: HeadersInit = {}) => {
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
      const response = await fetch(url, { headers: new Headers(header) });
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Send a POST request to create a new resource on the server
  this.post = async (url: string, data: object, header: HeadersInit = {}) => {
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
        headers: new Headers(header),
      });
      return response;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Send a PUT request to update an existing resource on the server
  this.put = async (url: string, data: object, header: HeadersInit = {}) => {
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
        headers: new Headers(header),
      });
      return response;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Send a PATCH request to update a resource on the server
  this.patch = async (url: string, data: object, header: HeadersInit = {}) => {
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
        headers: new Headers(header),
      });
      return response;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Send a DELETE request to delete a resource on the server
  this.delete = async (url: string, header: HeadersInit = {}) => {
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
        headers: new Headers(header),
      });
      return response;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
}

function dataFilter(item: any) {
  console.warn('dataFilter has been renamed to DataFilter');
  return new DataFilter(item);
}

/**
 * A class representing a data filter.
 * @class DataFilter
 * @template T - The type of data being filtered.
 */
class DataFilter<T> {
  /**
   * The filter function used to filter the data.
   * @type {Function}
   */
  private filterFn: (item: T) => boolean;

  /**
   * Constructs a DataFilter instance with the provided filter function.
   * @param {Function} filterFn - The filter function used to filter the data.
   */
  constructor(filterFn: (item: T) => boolean) {
    this.filterFn = filterFn;
  }

  /**
   * Filters an array of data using the filter function.
   * @param {Array<T>} data - The array of data to be filtered.
   * @returns {Array<T>} The filtered data array.
   * @throws {CustomError} Throws a CustomError if the filter function is not a function.
   */
  filter(data: T[]): T[] {
    if (typeof this.filterFn !== "function") {
      throw new CustomError("The filter function must be a function.");
    }

    const filteredData: T[] = [];

    for (const item of data) {
      const result = this.filterFn(item);

      if (result === true) {
        filteredData.push(item);
      }
    }

    return filteredData;
  }
}

function dateFilter() {
  console.warn('dateFilter has been renamed to DateFilter');
  return new DateFilter();
}

/**
 * A class containing utility functions for working with dates.
 * @class DateFilter
 */
class DateFilter {
  constructor() {}

  /**
   * Converts a date to text format.
   * @param {Date} date - The date object to convert.
   * @returns {string} The date in text format.
   */
  text(date: Date): string {
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
  }

  /**
   * Formats a date based on the specified format.
   * @param {Date} date - The date object to format.
   * @param {string} format - The format to use for formatting the date.
   * Supported format specifiers: yyyy, mm, dd, HH, MM, SS, ago.
   * @returns {string} The formatted date.
   * @throws {CustomError} If the format is invalid.
   */
  formatDate(date: Date, format: string): string {
    if (typeof format !== "string") {
      throw new CustomError("Provide a valid date format.");
    }

    if (format === "ago") {
      const now = new Date();
      const diff = now.getTime() - date.getTime();
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

    const formatReplacements = {
      yyyy: date.getFullYear().toString(),
      mm: (date.getMonth() + 1).toString().padStart(2, "0"),
      dd: date.getDate().toString().padStart(2, "0"),
      HH: date.getHours().toString().padStart(2, "0"),
      MM: date.getMinutes().toString().padStart(2, "0"),
      SS: date.getSeconds().toString().padStart(2, "0"),
    };

    return format.replace(/yyyy|mm|dd|HH|MM|SS/g, (match) => formatReplacements[match]);
  }

  /**
   * Checks if a given year is a leap year.
   * @param {number} year - The year to check.
   * @returns {boolean} Whether the year is a leap year.
   */
  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Gets the number of days in a month for a given year.
   * @param {number} month - The month (1-indexed) to get the number of days.
   * @param {number} year - The year to check if it's a leap year.
   * @returns {number} The number of days in the month.
   */
  getDaysInMonth(month: number, year: number): number {
    if (month === 2 && this.isLeapYear(year)) {
      return 29;
    }

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month - 1];
  }

  /**
   * Adds a specified number of days to a given date.
   * @param {Date} date - The date to add days to.
   * @param {number} days - The number of days to add.
   * @returns {Date} The resulting date after adding the days.
   */
  addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  /**
   * Subtracts a specified number of days from a given date.
   * @param {Date} date - The date to subtract days from.
   * @param {number} days - The number of days to subtract.
   * @returns {Date} The resulting date after subtracting the days.
   */
  subtractDays(date: Date, days: number): Date {
    return this.addDays(date, -days);
  }

  /**
   * Compares two dates and returns the difference in days.
   * @param {Date} date1 - The first date.
   * @param {Date} date2 - The second date.
   * @returns {number} The difference in days between the two dates.
   */
  compareDates(date1: Date, date2: Date): number {
    const diffInTime = date2.getTime() - date1.getTime();
    return Math.floor(diffInTime / (1000 * 3600 * 24));
  }

  /**
   * Checks if a given date is in the past.
   * @param {Date} date - The date to check.
   * @returns {boolean} Whether the date is in the past.
   */
  isPastDate(date: Date): boolean {
    const today = new Date();
    return date < today;
  }
}


/**
 * Represents a store that holds the state and manages state updates.
 * @interface IStore
 * @template T - The type of state.
 * @template A - The type of action.
 */
interface IStore<T, A> {
  /**
   * Returns the current state of the store.
   *
   * @returns {T} The current state.
   */
  getState(): T;

  /**
   * Dispatches an action to update the state.
   *
   * @param {A} action - The action representing the state update.
   */
  dispatch(action: A): void;

  /**
   * Subscribes a listener function to be called on state changes.
   *
   * @param {function} listener - The listener function to be called on state changes.
   * @returns {function} A function to unsubscribe the listener.
   *
   * @throws {CustomError} If the listener is not a function.
   */
  subscribe(listener: Function): Function;

  /**
   * Replaces the current reducer function with a new one.
   *
   * @param {function} nextReducer - The new reducer function.
   */
  replaceReducer(nextReducer: (state: T, action: A) => T): void;

  /**
   * Returns the current reducer function.
   *
   * @returns {function} The current reducer function.
   */
  getReducer(): (state: T, action: A) => T;
}

/**
 * Represents a store that holds the state and manages state updates.
 * @class Store
 * @template T - The type of state.
 * @template A - The type of action.
 * @param {function} reducer - The reducer function for state updates.
 * @param {T} [initialState={}] - The initial state of the store.
 *
 * @throws {CustomError} If the reducer is not a function.
 * @returns {Object} The store object with various methods.
 */
class Store<T, A> implements IStore<T, A> {
  private state: T;
  private listeners: Function[];

  constructor(
    private reducer: (state: T, action: A) => T,
    initialState: T = {} as T
  ) {
    this.state = initialState;
    this.listeners = [];

    // Check if reducer is a function
    if (typeof reducer !== "function") {
      // If not, throw a CustomError
      throw new CustomError("Reducer must be a function.");
    }
  }

  /**
   * Returns the current state of the store.
   *
   * @returns {T} The current state.
   */
  getState(): T {
    return this.state;
  }

  /**
   * Dispatches an action to update the state.
   *
   * @param {A} action - The action representing the state update.
   */
  dispatch(action: A): void {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener) => listener(this.state));
  }

  /**
   * Subscribes a listener function to be called on state changes.
   *
   * @param {function} listener - The listener function to be called on state changes.
   * @returns {function} A function to unsubscribe the listener.
   *
   * @throws {CustomError} If the listener is not a function.
   */
  subscribe(listener: Function): Function {
    // Check if listener is a function
    if (typeof listener !== "function") {
      // If not, throw a CustomError
      throw new CustomError("You must subscribe to a function.");
    }
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  /**
   * Replaces the current reducer function with a new one.
   *
   * @param {function} nextReducer - The new reducer function.
   */
  replaceReducer(nextReducer: (state: T, action: A) => T): void {
    this.reducer = nextReducer;
  }

  /**
   * Returns the current reducer function.
   *
   * @returns {function} The current reducer function.
   */
  getReducer(): (state: T, action: A) => T {
    return this.reducer;
  }
}

/**
 * Applies middlewares to the store's dispatch function.
 *
 * @param {...function} middlewares - The middlewares to apply.
 * @returns {function} A function that wraps the store and applies the middlewares.
 */
function applyMiddleware(...middlewares: Function[]) {
  return (store: any) =>
    (...args: any[]) => {
      const newStore = new store(...args);

      let dispatch = newStore.dispatch;
      middlewares.forEach((middleware) => {
        dispatch = middleware(newStore)(dispatch);
      });

      return {
        ...store,
        dispatch,
      };
    };
}

/**
 * Creates a subscriber object to subscribe to store updates.
 *
 * @param {*} store - The store object to subscribe to.
 * @returns {Object} The subscriber object.
 */
const createSubscriber = (store: any) => {
  return {
    /**
     * Subscribes a callback function to be called on store updates.
     *
     * @param {function} callback - The callback function to be called on store updates.
     */
    subscribe(callback: Function) {
      store.subscribe(callback);
    },
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
function mergeReducers(reducers: { [key: string]: Function }) {
  // Check if reducers is an object
  if (typeof reducers !== "object") {
    // If not, throw a CustomError
    throw new CustomError("Provide an object containing the reducers.");
  }
  return (state: any = {}, action: any) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
}

/**
 * Generates a unique id of a random length.
 * @returns {number} The generated id.
*/
function generateId(): number {
  // Generate a random number between 1 and 1000000
  const id: number = Math.floor(Math.random() * 1000000) + 1;
  return id;
}

/**
 * Creates and manages a queue of tasks.
 * @class TaskQueue
 */
class TaskQueue {
  /**
   * The array to store the tasks.
   * @type {Array<function>}
   */
  private tasks: Function[];

  constructor() {
    this.tasks = [];
  }

  /**
   * Adds a new task to the queue.
   * @param {function} task - The task to add to the queue.
   * @returns {void}
   */
  addTask(task: Function): void {
    this.tasks.push(task);
  }

  /**
   * Executes all tasks in the queue.
   * @returns {void}
   * @throws {CustomError} If a task is not a function.
   */
  runTasks(): void {
    for (const task of this.tasks) {
      if (typeof task !== "function") {
        throw new CustomError(
          "Cannot run a " +
            typeof task +
            " as a function. \n This requires a function"
        );
      }
      task();
    }
  }

  /**
   * Clears the queue.
   * @returns {void}
   */
  clearTasks(): void {
    this.tasks = [];
  }

  /**
   * Gets the number of tasks in the queue.
   * @returns {number} The number of tasks in the queue.
   */
  getTaskCount(): number {
    return this.tasks.length;
  }
}

/**
 * Parses and manipulates URLs.
 * @class UrlParser
 * @param {string} url - The URL to parse and manipulate.
 * @throws {CustomError} If the url is not a string.
 */
class UrlParser {
  private parsedUrl: URL;

  constructor(url: string) {
    if (typeof url !== "string") {
      throw new CustomError("url must be a string");
    }

    this.parsedUrl = new URL(url);
  }

  /**
   * Gets the URL path.
   * @returns {string} The URL path.
   */
  getPath(): string {
    return this.parsedUrl.pathname;
  }

  /**
   * Gets the query string.
   * @returns {string} The query string.
   */
  getQueryString(): string {
    return this.parsedUrl.search;
  }

  /**
   * Gets a specific query parameter.
   * @param {string} param - The query parameter to retrieve.
   * @returns {string|null} The value of the query parameter, or null if not found.
   */
  getQueryParameter(param: string): string | null {
    return this.parsedUrl.searchParams.get(param);
  }

  /**
   * Builds a URL from its components.
   * @param {string} protocol - The URL protocol.
   * @param {string} hostname - The URL hostname.
   * @param {string} path - The URL path.
   * @param {Object.<string, string>} queryParams - The query parameters.
   * @returns {string} The built URL.
   */
  buildUrl(
    protocol: string,
    hostname: string,
    path: string,
    queryParams: { [key: string]: string }
  ): string {
    const url = new URL(protocol, hostname);
    url.pathname = path;

    for (const [param, value] of Object.entries(queryParams)) {
      url.searchParams.append(param, value);
    }

    return url.toString();
  }
}

/**
 * Generates random numbers or strings.
 * @class Random
 */
class Random {
  /**
   * Generates a random number within a specified range.
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} The generated random number.
   */
  number(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generates a random string with a specified length.
   * @param {number} length - The length of the random string.
   * @returns {string} The generated random string.
   */
  string(length: number): string {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let str = "";

    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }

    return str;
  }
}

/**
 * Validates data.
 * @class DataValidator
 */
class DataValidator {
  /**
   * Checks if a value is within a certain range.
   * @param {number} value - The value to check.
   * @param {number} min - The minimum value of the range.
   * @param {number} max - The maximum value of the range.
   * @returns {boolean} true if the value is within the range, false otherwise.
   */
  inRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  /**
   * Checks if a string matches a certain format.
   * @param {string} str - The string to check.
   * @param {RegExp} regex - The regular expression to match against.
   * @returns {boolean} true if the string matches the format, false otherwise.
   */
  matchFormat(str: string, regex: RegExp): boolean {
    return regex.test(str);
  }

  /**
   * Checks if a string has a certain length.
   * @param {string} str - The string to check.
   * @param {number} length - The required length of the string.
   * @returns {boolean} true if the string has the specified length, false otherwise.
   */
  hasLength(str: string, length: number): boolean {
    return str.length === length;
  }
}

function trim(str: string): string {
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
