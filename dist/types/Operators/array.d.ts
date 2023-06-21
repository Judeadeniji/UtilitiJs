/**
 * Interface for types that can be compared.
 */
interface Comparable<T> {
    compareTo(other: T): number;
}
/**
 * Calculates the sum of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The sum of all the elements in the array.
 */
declare function sum(arr: number[]): number;
/**
 * Calculates the mean of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The mean of all the elements in the array.
 */
declare function mean(arr: number[]): number;
/**
 * Calculates the median of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The median of all the elements in the array.
 */
declare function median(arr: number[]): number;
/**
 * Finds the mode of an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The mode of the input array.
 */
declare function mode(arr: number[]): number;
/**
 * Filters the elements of an array based on a given predicate.
 * @param {Array} arr - The input array.
 * @param {Function} predicate - The predicate function used to filter the array.
 * @returns {Array} A new array containing only the elements that satisfy the predicate function.
 */
declare function filter<T>(arr: T[], predicate: (value: T, index: number, array: T[]) => boolean): T[];
/**
 * Transforms each element of an array using a given mapper function.
 * @param {Array} arr - The input array.
 * @param {Function} mapper - The mapper function used to transform the elements.
 * @returns {Array} A new array containing the transformed elements.
 */
declare function map<T, U>(arr: T[], mapper: (value: T, index: number, array: T[]) => U): U[];
/**
 * Reduces an array to a single value using a given reducer function and an initial value.
 * @param {Array} arr - The input array.
 * @param {Function} reducer - The reducer function used to reduce the array.
 * @param {*} initialValue - The initial value used in the reduction.
 * @returns {*} The final reduced value.
 */
declare function reduce<T, U>(arr: T[], reducer: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
/**
 * Finds the maximum element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The maximum element of the array.
 */
declare function max<T extends Comparable<T>>(arr: T[]): T;
/**
 * Finds the minimum element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The minimum element of the array.
 */
declare function min(arr: any[]): any;
/**
 * Removes duplicate elements from an array.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array containing only the unique elements of the input array.
 */
declare function unique(arr: any[]): any[];
/**
 * Flattens a nested array into a single-level array.
 * @param {Array} arr - The input array.
 * @returns {Array} A new, flattened array.
 */
declare function flatten(arr: any[]): any[];
/**
 * Breaks an array into chunks of a given size.
 * @param {Array} arr - The input array.
 * @param {number} size - The size of each chunk.
 * @returns {Array} An array of chunks.
 */
declare function chunk(arr: any[], size: number): any[][];
/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
declare function shuffle(arr: any[]): any[];
/**
 * Tests whether all elements in the array pass the predicate function.
 *
 * @param {Array} arr - The array to test.
 * @param {Function} predicate - The function used to test each element.
 * @returns {boolean} - True if all elements pass the predicate, false otherwise.
 */
declare function every(arr: any[], predicate: (element: any) => boolean): boolean;
/**
 * Tests whether at least one element in the array passes the predicate function.
 *
 * @param {Array} arr - The array to test.
 * @param {Function} predicate - The function used to test each element.
 * @returns {boolean} - True if at least one element passes the predicate, false otherwise.
 */
declare function some(arr: any[], predicate: (element: any) => boolean): boolean;
/**
 * Returns the first element in the array that passes the predicate function,
 * or undefined if no such element is found.
 *
 * @param {Array} arr - The array to search.
 * @param {Function} predicate - The function used to test each element.
 * @returns {*} - The first element that passes the predicate, or undefined if no such element is found.
 */
declare function find(arr: any[], predicate: (element: any) => boolean): any;
/**
 * Returns the index of the first element in the array that passes the predicate function,
 * or -1 if no such element is found.
 *
 * @param {Array} arr - The array to search.
 * @param {Function} predicate - The function used to test each element.
 * @returns {number} - The index of the first element that passes the predicate, or -1 if no such element is found.
 */
declare function findIndex(arr: any[], predicate: (element: any) => boolean): number;
/**
 * Maps each element in the array to a new value using the provided mapper function,
 * and then flattens the result to a one-dimensional array.
 *
 * @param {Array} arr - The array to map.
 * @param {Function} mapper - The function used to map each element.
 * @returns {Array} - The flattened result of mapping each element.
 */
declare function flatMap(arr: any[], mapper: (element: any) => any[]): any[];
/**
 * Calls the provided callback function once for each element in the array,
 * in order, and passing the element as an argument to the callback.
 *
 * @param {Array} arr - The array to iterate over.
 * @param {Function} callback - The function to call for each element.
 */
declare function forEach(arr: any[], callback: (element: any) => void): void;
/**
 * Returns a new array containing the elements from the start index up to, but not including, the end index.
 *
 * @param {Array} arr - The array to slice.
 * @param {number} start - The start index.
 * @param {number} [end=arr.length] - The end index.
 * @returns {Array} - The sliced array.
 */
declare function slice(arr: any[], start: number, end?: number): any[];
/**
 * Returns a new array with the elements sorted according to the provided comparator function.
 *
 * @function
 * @param {Array} arr - The array to sort.
 * @param {Function} comparator - The function that defines the sort order.
 * @returns {Array} A new array with the sorted elements.
 */
declare function sort(arr: any[], comparator: (a: any, b: any) => number): any[];
/**
 * Returns a Boolean indicating whether the given value is found in the array.
 *
 * @function
 * @param {Array} arr - The array to search.
 * @param {*} value - The value to search for.
 * @returns {boolean} `true` if the value is found, otherwise `false`.
 */
declare function includes(arr: any[], value: any): boolean;
/**
 * Returns the index of the first occurrence of the given value in the array, or -1 if it is not found.
 *
 * @function
 * @param {Array} arr - The array to search.
 * @param {*} value - The value to search for.
 * @returns {number} The index of the first occurrence of the value, or -1 if it is not found.
 */
declare function indexOf(arr: any[], value: any): number;
/**
 * Returns the index of the last occurrence of the given value in the array, or -1 if it is not found.
 *
 * @function
 * @param {Array} arr - The array to search.
 * @param {*} value - The value to search for.
 * @returns {number} The index of the last occurrence of the value, or -1 if it is not found.
 */
declare function lastIndexOf(arr: any[], value: any): number;
/**
 * Returns a new array with the elements in reverse order.
 *
 * @function
 * @param {Array} arr - The array to reverse.
 * @returns {Array} A new array with the elements in reverse order.
 */
declare function reverse(arr: any[]): any[];
/**
 * Joins all elements of an array into a string, with an optional separator.
 *
 * @function
 * @param {Array} arr - The array to join.
 * @param {string} separator - The separator to use between elements. Defaults to ',' if not provided.
 * @returns {string} A string that contains the joined elements.
 */
declare function join(arr: any[], separator?: string): string;
/**
 * Fills elements of an array with a static value.
 * @param {Array} arr - The input array.
 * @param {*} value - The static value to fill the array with.
 * @param {number} [start=0] - The index to start filling the array at.
 * @param {number} [end=arr.length] - The index to stop filling the array at.
 * @returns {Array} - The filled array.
 */
declare function fill(arr: any[], value: any, start?: number, end?: number): any[];
/**
 * Combines two or more arrays.
 * @param {Array} arr1 - The first array.
 * @param {...Array} arr2 - The arrays to concatenate.
 * @returns {Array} - The concatenated array.
 */
declare function concat(arr1: any[], ...arr2: any[][]): any[];
/**
 * Returns an iterator that contains the keys for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains the keys for each index in the array.
 */
declare function keys(arr: any[]): IterableIterator<number>;
/**
 * Returns an iterator that contains the values for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains the values for each index in the array.
 */
declare function values(arr: any[]): IterableIterator<any>;
/**
 * Returns an iterator that contains key/value pairs for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains key/value pairs for each index in the array.
 */
declare function entries(arr: any[]): IterableIterator<[number, any]>;
export { sum, mean, median, mode, filter, map, reduce, max, min, unique, flatten, chunk, shuffle, every, some, find, findIndex, flatMap, forEach, slice, sort, includes, indexOf, lastIndexOf, reverse, join, fill, concat, keys, values, entries, };
