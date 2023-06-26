"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greaterThan = exports.lessThan = exports.deepEqual = exports.equals = void 0;
/**
 * Checks if two values are equal.
 * @param {*} a - The first value.
 * @param {*} b - The second value.
 * @returns {boolean} - True if the values are equal, false otherwise.
 */
function equals(a, b) {
    return a === b;
}
exports.equals = equals;
/**
 * Checks if the first value is greater than the second value.
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @returns {boolean} - True if the first value is greater than the second value, false otherwise.
 */
function greaterThan(a, b) {
    return a > b;
}
exports.greaterThan = greaterThan;
/**
 * Checks if the first value is less than the second value.
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @returns {boolean} - True if the first value is less than the second value, false otherwise.
 */
function lessThan(a, b) {
    return a < b;
}
exports.lessThan = lessThan;
/**
 * Performs a deep equality check between two objects or arrays.
 * @param {Object|Array} obj1 - The first object or array.
 * @param {Object|Array} obj2 - The second object or array.
 * @returns {boolean} - True if the objects or arrays are deeply equal, false otherwise.
 */
function deepEqual(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (typeof obj1 !== "object" || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }
    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
exports.deepEqual = deepEqual;
//# sourceMappingURL=compare.js.map