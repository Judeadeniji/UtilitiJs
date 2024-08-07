"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFractional = isFractional;
exports.isWhole = isWhole;
exports.isPrime = isPrime;
exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isZero = isZero;
exports.isNegative = isNegative;
exports.isPositive = isPositive;
/**
 * Checks if a number is positive.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is positive, false otherwise.
 */
function isPositive(num) {
    return num > 0;
}
/**
 * Checks if a number is negative.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is negative, false otherwise.
 */
function isNegative(num) {
    return num < 0;
}
/**
 * Checks if a number is zero.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is zero, false otherwise.
 */
function isZero(num) {
    return num === 0;
}
/**
 * Checks if a number is even.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
function isEven(num) {
    return num % 2 === 0;
}
/**
 * Checks if a number is odd.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is odd, false otherwise.
 */
function isOdd(num) {
    return num % 2 === 1;
}
/**
 * Checks if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
/**
 * Checks if a number is a whole number.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a whole number, false otherwise.
 */
function isWhole(num) {
    return Number.isInteger(num);
}
/**
 * Checks if a number is a fractional number.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a fractional number, false otherwise.
 */
function isFractional(num) {
    return num % 1 !== 0;
}
//# sourceMappingURL=value-check.js.map