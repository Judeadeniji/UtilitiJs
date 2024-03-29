"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entries = exports.values = exports.keys = exports.concat = exports.fill = exports.join = exports.reverse = exports.lastIndexOf = exports.indexOf = exports.includes = exports.sort = exports.slice = exports.forEach = exports.flatMap = exports.findIndex = exports.find = exports.some = exports.every = exports.shuffle = exports.chunk = exports.flatten = exports.unique = exports.min = exports.max = exports.reduce = exports.map = exports.filter = exports.mode = exports.median = exports.mean = exports.sum = void 0;
/**
 * Calculates the sum of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The sum of all the elements in the array.
 */
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
exports.sum = sum;
/**
 * Calculates the mean of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The mean of all the elements in the array.
 */
function mean(arr) {
    return sum(arr) / arr.length;
}
exports.mean = mean;
/**
 * Calculates the median of all the elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The median of all the elements in the array.
 */
function median(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid] + arr[mid - 1]) / 2;
    }
    return arr[mid];
}
exports.median = median;
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
    const mode = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
    return parseInt(mode, 10);
}
exports.mode = mode;
/**
 * Filters the elements of an array based on a given predicate.
 * @param {Array} arr - The input array.
 * @param {Function} predicate - The predicate function used to filter the array.
 * @returns {Array} A new array containing only the elements that satisfy the predicate function.
 */
function filter(arr, predicate) {
    return arr.filter(predicate);
}
exports.filter = filter;
/**
 * Transforms each element of an array using a given mapper function.
 * @param {Array} arr - The input array.
 * @param {Function} mapper - The mapper function used to transform the elements.
 * @returns {Array} A new array containing the transformed elements.
 */
function map(arr, mapper) {
    return arr.map(mapper);
}
exports.map = map;
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
exports.reduce = reduce;
/**
 * Finds the maximum element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The maximum element of the array.
 */
function max(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].compareTo(maxElement) > 0) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}
exports.max = max;
/**
 * Finds the minimum element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The minimum element of the array.
 */
function min(arr) {
    return Math.min(...arr);
}
exports.min = min;
/**
 * Removes duplicate elements from an array.
 * @param {Array} arr - The input array.
 * @returns {Array} A new array containing only the unique elements of the input array.
 */
function unique(arr) {
    return [...new Set(arr)];
}
exports.unique = unique;
/**
 * Flattens a nested array into a single-level array.
 * @param {Array} arr - The input array.
 * @returns {Array} A new, flattened array.
 */
function flatten(arr) {
    return arr.flat();
}
exports.flatten = flatten;
/**
 * Breaks an array into chunks of a given size.
 * @param {Array} arr - The input array.
 * @param {number} size - The size of each chunk.
 * @returns {Array} An array of chunks.
 */
function chunk(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
exports.chunk = chunk;
/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
exports.shuffle = shuffle;
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
exports.every = every;
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
exports.some = some;
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
exports.find = find;
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
exports.findIndex = findIndex;
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
exports.flatMap = flatMap;
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
exports.forEach = forEach;
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
exports.slice = slice;
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
exports.sort = sort;
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
exports.includes = includes;
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
exports.indexOf = indexOf;
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
exports.lastIndexOf = lastIndexOf;
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
exports.reverse = reverse;
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
exports.join = join;
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
exports.fill = fill;
/**
 * Combines two or more arrays.
 * @param {Array} arr1 - The first array.
 * @param {...Array} arr2 - The arrays to concatenate.
 * @returns {Array} - The concatenated array.
 */
function concat(arr1, ...arr2) {
    return arr1.concat(...arr2);
}
exports.concat = concat;
/**
 * Returns an iterator that contains the keys for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains the keys for each index in the array.
 */
function keys(arr) {
    return arr.keys();
}
exports.keys = keys;
/**
 * Returns an iterator that contains the values for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains the values for each index in the array.
 */
function values(arr) {
    return arr.values();
}
exports.values = values;
/**
 * Returns an iterator that contains key/value pairs for each index in the array.
 * @param {Array} arr - The input array.
 * @returns {Iterator} - An iterator object that contains key/value pairs for each index in the array.
 */
function entries(arr) {
    return arr.entries();
}
exports.entries = entries;
//# sourceMappingURL=array.js.map