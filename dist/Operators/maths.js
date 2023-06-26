"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sign = exports.floor = exports.ceil = exports.powerOf10 = exports.atanh = exports.acosh = exports.asinh = exports.tanh = exports.cosh = exports.sinh = exports.log10 = exports.naturalLogarithm = exports.absoluteDifference = exports.nthRoot = exports.lcm = exports.gcd = exports.isInteger = exports.random = exports.exponentiate = exports.logarithm = exports.atan = exports.acos = exports.asin = exports.tan = exports.cos = exports.sin = exports.round = exports.min = exports.max = exports.absoluteValue = exports.squareRoot = exports.power = exports.factorial = exports.average = exports.sum = exports.randomInt = exports.roundTo = exports.toDegrees = exports.toRadians = exports.lerp = exports.clamp = void 0;
/**
 * Clamps a value between a minimum and maximum range.
 * @param {number} value - The value to be clamped.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - The clamped value.
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
exports.clamp = clamp;
/**
 * Linearly interpolates between two values.
 * @param {number} a - The starting value.
 * @param {number} b - The ending value.
 * @param {number} t - The interpolation parameter.
 * @returns {number} - The interpolated value.
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}
exports.lerp = lerp;
/**
 * Converts an angle from degrees to radians.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The angle in radians.
 */
function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
exports.toRadians = toRadians;
/**
 * Converts an angle from radians to degrees.
 * @param {number} radians - The angle in radians.
 * @returns {number} - The angle in degrees.
 */
function toDegrees(radians) {
    return (radians * 180) / Math.PI;
}
exports.toDegrees = toDegrees;
/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} value - The number to be rounded.
 * @param {number} decimalPlaces - The number of decimal places to round to.
 * @returns {number} - The rounded value.
 */
function roundTo(value, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    return Math.round(value * factor) / factor;
}
exports.roundTo = roundTo;
/**
 * Generates a random integer between a minimum and maximum value.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The random integer.
 */
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomInt = randomInt;
/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the numbers.
 */
function sum(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
exports.sum = sum;
/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The average of the numbers.
 */
function average(numbers) {
    const total = sum(numbers);
    return total / numbers.length;
}
exports.average = average;
/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number.
 * @returns {number} - The factorial of the number.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
exports.factorial = factorial;
/**
 * Calculates the power of a number.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of raising the base to the exponent.
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}
exports.power = power;
/**
 * Calculates the square root of a number.
 * @param {number} n - The number.
 * @returns {number} - The square root of the number.
 */
function squareRoot(n) {
    return Math.sqrt(n);
}
exports.squareRoot = squareRoot;
/**
 * Calculates the absolute value of a number.
 * @param {number} n - The number.
 * @returns {number} - The absolute value of the number.
 */
function absoluteValue(n) {
    return Math.abs(n);
}
exports.absoluteValue = absoluteValue;
/**
 * Calculates the maximum value among a set of numbers.
 * @param {...number} numbers - The numbers.
 * @returns {number} - The maximum value.
 */
function max(...numbers) {
    return Math.max(...numbers);
}
exports.max = max;
/**
 * Calculates the minimum value among a set of numbers.
 * @param {...number} numbers - The numbers.
 * @returns {number} - The minimum value.
 */
function min(...numbers) {
    return Math.min(...numbers);
}
exports.min = min;
/**
 * Rounds a number to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded integer.
 */
function round(n) {
    return Math.round(n);
}
exports.round = round;
/**
 * Calculates the sine of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The sine value.
 */
function sin(angle) {
    return Math.sin(angle);
}
exports.sin = sin;
/**
 * Calculates the cosine of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The cosine value.
 */
function cos(angle) {
    return Math.cos(angle);
}
exports.cos = cos;
/**
 * Calculates the tangent of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The tangent value.
 */
function tan(angle) {
    return Math.tan(angle);
}
exports.tan = tan;
/**
 * Calculates the arc sine (inverse sine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc sine value in radians.
 */
function asin(value) {
    return Math.asin(value);
}
exports.asin = asin;
/**
 * Calculates the arc cosine (inverse cosine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc cosine value in radians.
 */
function acos(value) {
    return Math.acos(value);
}
exports.acos = acos;
/**
 * Calculates the arc tangent (inverse tangent) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc tangent value in radians.
 */
function atan(value) {
    return Math.atan(value);
}
exports.atan = atan;
/**
 * Calculates the logarithm of a number with a specified base.
 * @param {number} n - The number.
 * @param {number} base - The logarithmic base.
 * @returns {number} - The logarithm value.
 */
function logarithm(n, base) {
    return Math.log(n) / Math.log(base);
}
exports.logarithm = logarithm;
/**
 * Calculates the exponential value of a number.
 * @param {number} n - The number.
 * @returns {number} - The exponential value.
 */
function exponentiate(n) {
    return Math.exp(n);
}
exports.exponentiate = exponentiate;
/**
 * Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 * @returns {number} - The random number.
 */
function random() {
    return Math.random();
}
exports.random = random;
/**
 * Checks if a number is an integer.
 * @param {number} n - The number.
 * @returns {boolean} - Whether the number is an integer.
 */
function isInteger(n) {
    return Number.isInteger(n);
}
exports.isInteger = isInteger;
/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The GCD of the two numbers.
 */
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
exports.gcd = gcd;
/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The LCM of the two numbers.
 */
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
exports.lcm = lcm;
/**
 * Calculates the n-th root of a number.
 * @param {number} n - The number.
 * @param {number} root - The root value.
 * @returns {number} - The n-th root of the number.
 */
function nthRoot(n, root) {
    return Math.pow(n, 1 / root);
}
exports.nthRoot = nthRoot;
/**
 * Calculates the absolute difference between two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The absolute difference between the two numbers.
 */
function absoluteDifference(a, b) {
    return Math.abs(a - b);
}
exports.absoluteDifference = absoluteDifference;
/**
 * Calculates the natural logarithm (base e) of a number.
 * @param {number} n - The number.
 * @returns {number} - The natural logarithm value.
 */
function naturalLogarithm(n) {
    return Math.log(n);
}
exports.naturalLogarithm = naturalLogarithm;
/**
 * Calculates the base 10 logarithm of a number.
 * @param {number} n - The number.
 * @returns {number} - The base 10 logarithm value.
 */
function log10(n) {
    return Math.log10(n);
}
exports.log10 = log10;
/**
 * Calculates the hyperbolic sine of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic sine value.
 */
function sinh(n) {
    return Math.sinh(n);
}
exports.sinh = sinh;
/**
 * Calculates the hyperbolic cosine of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic cosine value.
 */
function cosh(n) {
    return Math.cosh(n);
}
exports.cosh = cosh;
/**
 * Calculates the hyperbolic tangent of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic tangent value.
 */
function tanh(n) {
    return Math.tanh(n);
}
exports.tanh = tanh;
/**
 * Calculates the arc hyperbolic sine (inverse hyperbolic sine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic sine value.
 */
function asinh(value) {
    return Math.asinh(value);
}
exports.asinh = asinh;
/**
 * Calculates the arc hyperbolic cosine (inverse hyperbolic cosine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic cosine value.
 */
function acosh(value) {
    return Math.acosh(value);
}
exports.acosh = acosh;
/**
 * Calculates the arc hyperbolic tangent (inverse hyperbolic tangent) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic tangent value.
 */
function atanh(value) {
    return Math.atanh(value);
}
exports.atanh = atanh;
/**
 * Calculates the power of 10.
 * @param {number} exponent - The exponent.
 * @returns {number} - The power of 10.
 */
function powerOf10(exponent) {
    return Math.pow(10, exponent);
}
exports.powerOf10 = powerOf10;
/**
 * Rounds a number up to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded up integer.
 */
function ceil(n) {
    return Math.ceil(n);
}
exports.ceil = ceil;
/**
 * Rounds a number down to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded down integer.
 */
function floor(n) {
    return Math.floor(n);
}
exports.floor = floor;
/**
 * Calculates the sign of a number.
 * @param {number} n - The number.
 * @returns {number} - The sign of the number (-1 for negative, 0 for zero, 1 for positive).
 */
function sign(n) {
    return Math.sign(n);
}
exports.sign = sign;
//# sourceMappingURL=maths.js.map