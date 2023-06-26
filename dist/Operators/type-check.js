"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInt = exports.parseFloat = exports.isNaN = exports.isBoolean = exports.isFunction = exports.isObject = exports.isArray = exports.isString = exports.isInteger = void 0;
/**
 * Checks if a value is an integer.
 * @param {*} num - The value to check.
 * @returns {boolean} - True if the value is an integer, false otherwise.
 */
function isInteger(num) {
    return Number.isInteger(num);
}
exports.isInteger = isInteger;
/**
 * Checks if a value is a string.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is a string, false otherwise.
 */
function isString(val) {
    return typeof val === 'string';
}
exports.isString = isString;
/**
 * Checks if a value is an array.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is an array, false otherwise.
 */
function isArray(val) {
    return Array.isArray(val);
}
exports.isArray = isArray;
/**
 * Checks if a value is an object.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is an object, false otherwise.
 */
function isObject(val) {
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
}
exports.isObject = isObject;
/**
 * Checks if a value is a function.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is a function, false otherwise.
 */
function isFunction(val) {
    return typeof val === 'function';
}
exports.isFunction = isFunction;
/**
 * Checks if a value is a boolean.
 * @param {*} val - The value to check.
 * @returns {boolean} - True if the value is a boolean, false otherwise.
 */
function isBoolean(val) {
    return typeof val === 'boolean';
}
exports.isBoolean = isBoolean;
/**
 * Checks if a value is NaN (not a number).
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is NaN, false otherwise.
 */
function isNaN(value) {
    return Number.isNaN(value);
}
exports.isNaN = isNaN;
/**
 * Converts a string to an integer.
 * @param {string} str - The string to convert.
 * @param {number} radix - The radix used for parsing (optional).
 * @returns {number} - The parsed integer value.
 */
function parseInt(str, radix) {
    return Number.parseInt(str, radix);
}
exports.parseInt = parseInt;
/**
 * Converts a string to a floating-point number.
 * @param {string} str - The string to convert.
 * @returns {number} - The parsed floating-point number value.
 */
function parseFloat(str) {
    return Number.parseFloat(str);
}
exports.parseFloat = parseFloat;
//# sourceMappingURL=type-check.js.map