/**
 * Represents a custom error.
 * @class CustomError
 * @extends Error
 */
declare class CustomError extends Error {
    constructor(message: string);
}
/**
 * Body takes in an object
 * Headers also takes an object
 */
declare function Http(): void;
declare function dataFilter(item: any): DataFilter<unknown>;
/**
 * A class representing a data filter.
 * @class DataFilter
 * @template T - The type of data being filtered.
 */
declare class DataFilter<T> {
    /**
     * The filter function used to filter the data.
     * @type {Function}
     */
    private filterFn;
    /**
     * Constructs a DataFilter instance with the provided filter function.
     * @param {Function} filterFn - The filter function used to filter the data.
     */
    constructor(filterFn: (item: T) => boolean);
    /**
     * Filters an array of data using the filter function.
     * @param {Array<T>} data - The array of data to be filtered.
     * @returns {Array<T>} The filtered data array.
     * @throws {CustomError} Throws a CustomError if the filter function is not a function.
     */
    filter(data: T[]): T[];
}
declare function dateFilter(): DateFilter;
/**
 * A class containing utility functions for working with dates.
 * @class DateFilter
 */
declare class DateFilter {
    constructor();
    /**
     * Converts a date to text format.
     * @param {Date} date - The date object to convert.
     * @returns {string} The date in text format.
     */
    text(date: Date): string;
    /**
     * Formats a date based on the specified format.
     * @param {Date} date - The date object to format.
     * @param {string} format - The format to use for formatting the date.
     * Supported format specifiers: yyyy, mm, dd, HH, MM, SS, ago.
     * @returns {string} The formatted date.
     * @throws {CustomError} If the format is invalid.
     */
    formatDate(date: Date, format: string): string;
    /**
     * Checks if a given year is a leap year.
     * @param {number} year - The year to check.
     * @returns {boolean} Whether the year is a leap year.
     */
    isLeapYear(year: number): boolean;
    /**
     * Gets the number of days in a month for a given year.
     * @param {number} month - The month (1-indexed) to get the number of days.
     * @param {number} year - The year to check if it's a leap year.
     * @returns {number} The number of days in the month.
     */
    getDaysInMonth(month: number, year: number): number;
    /**
     * Adds a specified number of days to a given date.
     * @param {Date} date - The date to add days to.
     * @param {number} days - The number of days to add.
     * @returns {Date} The resulting date after adding the days.
     */
    addDays(date: Date, days: number): Date;
    /**
     * Subtracts a specified number of days from a given date.
     * @param {Date} date - The date to subtract days from.
     * @param {number} days - The number of days to subtract.
     * @returns {Date} The resulting date after subtracting the days.
     */
    subtractDays(date: Date, days: number): Date;
    /**
     * Compares two dates and returns the difference in days.
     * @param {Date} date1 - The first date.
     * @param {Date} date2 - The second date.
     * @returns {number} The difference in days between the two dates.
     */
    compareDates(date1: Date, date2: Date): number;
    /**
     * Checks if a given date is in the past.
     * @param {Date} date - The date to check.
     * @returns {boolean} Whether the date is in the past.
     */
    isPastDate(date: Date): boolean;
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
declare class Store<T, A> implements IStore<T, A> {
    private reducer;
    private state;
    private listeners;
    constructor(reducer: (state: T, action: A) => T, initialState?: T);
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
 * Applies middlewares to the store's dispatch function.
 *
 * @param {...function} middlewares - The middlewares to apply.
 * @returns {function} A function that wraps the store and applies the middlewares.
 */
declare function applyMiddleware(...middlewares: Function[]): (store: any) => (...args: any[]) => any;
/**
 * Creates a subscriber object to subscribe to store updates.
 *
 * @param {*} store - The store object to subscribe to.
 * @returns {Object} The subscriber object.
 */
declare const createSubscriber: (store: any) => {
    /**
     * Subscribes a callback function to be called on store updates.
     *
     * @param {function} callback - The callback function to be called on store updates.
     */
    subscribe(callback: Function): void;
};
/**
 * Merges multiple reducers into a single reducer function.
 *
 * @param {Object} reducers - An object containing the individual reducers.
 * @returns {function} The merged reducer function.
 *
 * @throws {CustomError} If reducers is not an object.
 */
declare function mergeReducers(reducers: {
    [key: string]: Function;
}): (state: any, action: any) => {};
/**
 * Generates a unique id of a random length.
 * @returns {number} The generated id.
*/
declare function generateId(): number;
/**
 * Creates and manages a queue of tasks.
 * @class TaskQueue
 */
declare class TaskQueue {
    /**
     * The array to store the tasks.
     * @type {Array<function>}
     */
    private tasks;
    constructor();
    /**
     * Adds a new task to the queue.
     * @param {function} task - The task to add to the queue.
     * @returns {void}
     */
    addTask(task: Function): void;
    /**
     * Executes all tasks in the queue.
     * @returns {void}
     * @throws {CustomError} If a task is not a function.
     */
    runTasks(): void;
    /**
     * Clears the queue.
     * @returns {void}
     */
    clearTasks(): void;
    /**
     * Gets the number of tasks in the queue.
     * @returns {number} The number of tasks in the queue.
     */
    getTaskCount(): number;
}
/**
 * Parses and manipulates URLs.
 * @class UrlParser
 * @param {string} url - The URL to parse and manipulate.
 * @throws {CustomError} If the url is not a string.
 */
declare class UrlParser {
    private parsedUrl;
    constructor(url: string);
    /**
     * Gets the URL path.
     * @returns {string} The URL path.
     */
    getPath(): string;
    /**
     * Gets the query string.
     * @returns {string} The query string.
     */
    getQueryString(): string;
    /**
     * Gets a specific query parameter.
     * @param {string} param - The query parameter to retrieve.
     * @returns {string|null} The value of the query parameter, or null if not found.
     */
    getQueryParameter(param: string): string | null;
    /**
     * Builds a URL from its components.
     * @param {string} protocol - The URL protocol.
     * @param {string} hostname - The URL hostname.
     * @param {string} path - The URL path.
     * @param {Object.<string, string>} queryParams - The query parameters.
     * @returns {string} The built URL.
     */
    buildUrl(protocol: string, hostname: string, path: string, queryParams: {
        [key: string]: string;
    }): string;
}
/**
 * Generates random numbers or strings.
 * @class Random
 */
declare class Random {
    /**
     * Generates a random number within a specified range.
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} The generated random number.
     */
    number(min: number, max: number): number;
    /**
     * Generates a random string with a specified length.
     * @param {number} length - The length of the random string.
     * @returns {string} The generated random string.
     */
    string(length: number): string;
}
/**
 * Validates data.
 * @class DataValidator
 */
declare class DataValidator {
    /**
     * Checks if a value is within a certain range.
     * @param {number} value - The value to check.
     * @param {number} min - The minimum value of the range.
     * @param {number} max - The maximum value of the range.
     * @returns {boolean} true if the value is within the range, false otherwise.
     */
    inRange(value: number, min: number, max: number): boolean;
    /**
     * Checks if a string matches a certain format.
     * @param {string} str - The string to check.
     * @param {RegExp} regex - The regular expression to match against.
     * @returns {boolean} true if the string matches the format, false otherwise.
     */
    matchFormat(str: string, regex: RegExp): boolean;
    /**
     * Checks if a string has a certain length.
     * @param {string} str - The string to check.
     * @param {number} length - The required length of the string.
     * @returns {boolean} true if the string has the specified length, false otherwise.
     */
    hasLength(str: string, length: number): boolean;
}
declare function trim(str: string): string;
export { Http, DateFilter, DataFilter, dateFilter, dataFilter, Store, mergeReducers, createSubscriber, applyMiddleware, CustomError, generateId, TaskQueue, UrlParser, Random, DataValidator, trim, };
