/**
 * Clamps a value between a minimum and maximum range.
 * @param {number} value - The value to be clamped.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - The clamped value.
 */
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Linearly interpolates between two values.
 * @param {number} a - The starting value.
 * @param {number} b - The ending value.
 * @param {number} t - The interpolation parameter.
 * @returns {number} - The interpolated value.
 */
export function lerp(a, b, t) {
    return a + (b - a) * t;
}
/**
 * Converts an angle from degrees to radians.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The angle in radians.
 */
export function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
/**
 * Converts an angle from radians to degrees.
 * @param {number} radians - The angle in radians.
 * @returns {number} - The angle in degrees.
 */
export function toDegrees(radians) {
    return (radians * 180) / Math.PI;
}
/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} value - The number to be rounded.
 * @param {number} decimalPlaces - The number of decimal places to round to.
 * @returns {number} - The rounded value.
 */
export function roundTo(value, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    return Math.round(value * factor) / factor;
}
/**
 * Generates a random integer between a minimum and maximum value.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The random integer.
 */
export function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the numbers.
 */
export function sum(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The average of the numbers.
 */
export function average(numbers) {
    const total = sum(numbers);
    return total / numbers.length;
}
/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number.
 * @returns {number} - The factorial of the number.
 */
export function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
/**
 * Calculates the power of a number.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of raising the base to the exponent.
 */
export function power(base, exponent) {
    return Math.pow(base, exponent);
}
/**
 * Calculates the square root of a number.
 * @param {number} n - The number.
 * @returns {number} - The square root of the number.
 */
export function squareRoot(n) {
    return Math.sqrt(n);
}
/**
 * Calculates the absolute value of a number.
 * @param {number} n - The number.
 * @returns {number} - The absolute value of the number.
 */
export function absoluteValue(n) {
    return Math.abs(n);
}
/**
 * Calculates the maximum value among a set of numbers.
 * @param {...number} numbers - The numbers.
 * @returns {number} - The maximum value.
 */
export function max(...numbers) {
    return Math.max(...numbers);
}
/**
 * Calculates the minimum value among a set of numbers.
 * @param {...number} numbers - The numbers.
 * @returns {number} - The minimum value.
 */
export function min(...numbers) {
    return Math.min(...numbers);
}
/**
 * Rounds a number to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded integer.
 */
export function round(n) {
    return Math.round(n);
}
/**
 * Calculates the sine of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The sine value.
 */
export function sin(angle) {
    return Math.sin(angle);
}
/**
 * Calculates the cosine of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The cosine value.
 */
export function cos(angle) {
    return Math.cos(angle);
}
/**
 * Calculates the tangent of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The tangent value.
 */
export function tan(angle) {
    return Math.tan(angle);
}
/**
 * Calculates the arc sine (inverse sine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc sine value in radians.
 */
export function asin(value) {
    return Math.asin(value);
}
/**
 * Calculates the arc cosine (inverse cosine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc cosine value in radians.
 */
export function acos(value) {
    return Math.acos(value);
}
/**
 * Calculates the arc tangent (inverse tangent) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc tangent value in radians.
 */
export function atan(value) {
    return Math.atan(value);
}
/**
 * Calculates the logarithm of a number with a specified base.
 * @param {number} n - The number.
 * @param {number} base - The logarithmic base.
 * @returns {number} - The logarithm value.
 */
export function logarithm(n, base) {
    return Math.log(n) / Math.log(base);
}
/**
 * Calculates the exponential value of a number.
 * @param {number} n - The number.
 * @returns {number} - The exponential value.
 */
export function exponentiate(n) {
    return Math.exp(n);
}
/**
 * Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 * @returns {number} - The random number.
 */
export function random() {
    return Math.random();
}
/**
 * Checks if a number is an integer.
 * @param {number} n - The number.
 * @returns {boolean} - Whether the number is an integer.
 */
export function isInteger(n) {
    return Number.isInteger(n);
}
/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The GCD of the two numbers.
 */
export function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The LCM of the two numbers.
 */
export function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
/**
 * Calculates the n-th root of a number.
 * @param {number} n - The number.
 * @param {number} root - The root value.
 * @returns {number} - The n-th root of the number.
 */
export function nthRoot(n, root) {
    return Math.pow(n, 1 / root);
}
/**
 * Calculates the absolute difference between two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The absolute difference between the two numbers.
 */
export function absoluteDifference(a, b) {
    return Math.abs(a - b);
}
/**
 * Calculates the natural logarithm (base e) of a number.
 * @param {number} n - The number.
 * @returns {number} - The natural logarithm value.
 */
export function naturalLogarithm(n) {
    return Math.log(n);
}
/**
 * Calculates the base 10 logarithm of a number.
 * @param {number} n - The number.
 * @returns {number} - The base 10 logarithm value.
 */
export function log10(n) {
    return Math.log10(n);
}
/**
 * Calculates the hyperbolic sine of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic sine value.
 */
export function sinh(n) {
    return Math.sinh(n);
}
/**
 * Calculates the hyperbolic cosine of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic cosine value.
 */
export function cosh(n) {
    return Math.cosh(n);
}
/**
 * Calculates the hyperbolic tangent of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic tangent value.
 */
export function tanh(n) {
    return Math.tanh(n);
}
/**
 * Calculates the arc hyperbolic sine (inverse hyperbolic sine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic sine value.
 */
export function asinh(value) {
    return Math.asinh(value);
}
/**
 * Calculates the arc hyperbolic cosine (inverse hyperbolic cosine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic cosine value.
 */
export function acosh(value) {
    return Math.acosh(value);
}
/**
 * Calculates the arc hyperbolic tangent (inverse hyperbolic tangent) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic tangent value.
 */
export function atanh(value) {
    return Math.atanh(value);
}
/**
 * Calculates the power of 10.
 * @param {number} exponent - The exponent.
 * @returns {number} - The power of 10.
 */
export function powerOf10(exponent) {
    return Math.pow(10, exponent);
}
/**
 * Rounds a number up to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded up integer.
 */
export function ceil(n) {
    return Math.ceil(n);
}
/**
 * Rounds a number down to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded down integer.
 */
export function floor(n) {
    return Math.floor(n);
}
/**
 * Calculates the sign of a number.
 * @param {number} n - The number.
 * @returns {number} - The sign of the number (-1 for negative, 0 for zero, 1 for positive).
 */
export function sign(n) {
    return Math.sign(n);
}
