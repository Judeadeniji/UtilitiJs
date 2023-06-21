/**
 * Clamps a value between a minimum and maximum range.
 * @param {number} value - The value to be clamped.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - The clamped value.
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Linearly interpolates between two values.
 * @param {number} a - The starting value.
 * @param {number} b - The ending value.
 * @param {number} t - The interpolation parameter.
 * @returns {number} - The interpolated value.
 */
export declare function lerp(a: number, b: number, t: number): number;
/**
 * Converts an angle from degrees to radians.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The angle in radians.
 */
export declare function toRadians(degrees: number): number;
/**
 * Converts an angle from radians to degrees.
 * @param {number} radians - The angle in radians.
 * @returns {number} - The angle in degrees.
 */
export declare function toDegrees(radians: number): number;
/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} value - The number to be rounded.
 * @param {number} decimalPlaces - The number of decimal places to round to.
 * @returns {number} - The rounded value.
 */
export declare function roundTo(value: number, decimalPlaces: number): number;
/**
 * Generates a random integer between a minimum and maximum value.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The random integer.
 */
export declare function randomInt(min: number, max: number): number;
/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the numbers.
 */
export declare function sum(numbers: number[]): number;
/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The average of the numbers.
 */
export declare function average(numbers: number[]): number;
/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number.
 * @returns {number} - The factorial of the number.
 */
export declare function factorial(n: number): number;
/**
 * Calculates the power of a number.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of raising the base to the exponent.
 */
export declare function power(base: number, exponent: number): number;
/**
 * Calculates the square root of a number.
 * @param {number} n - The number.
 * @returns {number} - The square root of the number.
 */
export declare function squareRoot(n: number): number;
/**
 * Calculates the absolute value of a number.
 * @param {number} n - The number.
 * @returns {number} - The absolute value of the number.
 */
export declare function absoluteValue(n: number): number;
/**
 * Calculates the maximum value among a set of numbers.
 * @param {...number} numbers - The numbers.
 * @returns {number} - The maximum value.
 */
export declare function max(...numbers: number[]): number;
/**
 * Calculates the minimum value among a set of numbers.
 * @param {...number} numbers - The numbers.
 * @returns {number} - The minimum value.
 */
export declare function min(...numbers: number[]): number;
/**
 * Rounds a number to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded integer.
 */
export declare function round(n: number): number;
/**
 * Calculates the sine of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The sine value.
 */
export declare function sin(angle: number): number;
/**
 * Calculates the cosine of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The cosine value.
 */
export declare function cos(angle: number): number;
/**
 * Calculates the tangent of an angle.
 * @param {number} angle - The angle in radians.
 * @returns {number} - The tangent value.
 */
export declare function tan(angle: number): number;
/**
 * Calculates the arc sine (inverse sine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc sine value in radians.
 */
export declare function asin(value: number): number;
/**
 * Calculates the arc cosine (inverse cosine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc cosine value in radians.
 */
export declare function acos(value: number): number;
/**
 * Calculates the arc tangent (inverse tangent) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc tangent value in radians.
 */
export declare function atan(value: number): number;
/**
 * Calculates the logarithm of a number with a specified base.
 * @param {number} n - The number.
 * @param {number} base - The logarithmic base.
 * @returns {number} - The logarithm value.
 */
export declare function logarithm(n: number, base: number): number;
/**
 * Calculates the exponential value of a number.
 * @param {number} n - The number.
 * @returns {number} - The exponential value.
 */
export declare function exponentiate(n: number): number;
/**
 * Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 * @returns {number} - The random number.
 */
export declare function random(): number;
/**
 * Checks if a number is an integer.
 * @param {number} n - The number.
 * @returns {boolean} - Whether the number is an integer.
 */
export declare function isInteger(n: number): boolean;
/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The GCD of the two numbers.
 */
export declare function gcd(a: number, b: number): number;
/**
 * Calculates the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The LCM of the two numbers.
 */
export declare function lcm(a: number, b: number): number;
/**
 * Calculates the n-th root of a number.
 * @param {number} n - The number.
 * @param {number} root - The root value.
 * @returns {number} - The n-th root of the number.
 */
export declare function nthRoot(n: number, root: number): number;
/**
 * Calculates the absolute difference between two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The absolute difference between the two numbers.
 */
export declare function absoluteDifference(a: number, b: number): number;
/**
 * Calculates the natural logarithm (base e) of a number.
 * @param {number} n - The number.
 * @returns {number} - The natural logarithm value.
 */
export declare function naturalLogarithm(n: number): number;
/**
 * Calculates the base 10 logarithm of a number.
 * @param {number} n - The number.
 * @returns {number} - The base 10 logarithm value.
 */
export declare function log10(n: number): number;
/**
 * Calculates the hyperbolic sine of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic sine value.
 */
export declare function sinh(n: number): number;
/**
 * Calculates the hyperbolic cosine of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic cosine value.
 */
export declare function cosh(n: number): number;
/**
 * Calculates the hyperbolic tangent of a number.
 * @param {number} n - The number.
 * @returns {number} - The hyperbolic tangent value.
 */
export declare function tanh(n: number): number;
/**
 * Calculates the arc hyperbolic sine (inverse hyperbolic sine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic sine value.
 */
export declare function asinh(value: number): number;
/**
 * Calculates the arc hyperbolic cosine (inverse hyperbolic cosine) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic cosine value.
 */
export declare function acosh(value: number): number;
/**
 * Calculates the arc hyperbolic tangent (inverse hyperbolic tangent) of a value.
 * @param {number} value - The value.
 * @returns {number} - The arc hyperbolic tangent value.
 */
export declare function atanh(value: number): number;
/**
 * Calculates the power of 10.
 * @param {number} exponent - The exponent.
 * @returns {number} - The power of 10.
 */
export declare function powerOf10(exponent: number): number;
/**
 * Rounds a number up to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded up integer.
 */
export declare function ceil(n: number): number;
/**
 * Rounds a number down to the nearest integer.
 * @param {number} n - The number.
 * @returns {number} - The rounded down integer.
 */
export declare function floor(n: number): number;
/**
 * Calculates the sign of a number.
 * @param {number} n - The number.
 * @returns {number} - The sign of the number (-1 for negative, 0 for zero, 1 for positive).
 */
export declare function sign(n: number): number;
