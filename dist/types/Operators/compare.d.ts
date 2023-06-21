/**
 * Checks if two values are equal.
 * @param {*} a - The first value.
 * @param {*} b - The second value.
 * @returns {boolean} - True if the values are equal, false otherwise.
 */
declare function equals<T>(a: T, b: T): boolean;
/**
 * Checks if the first value is greater than the second value.
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @returns {boolean} - True if the first value is greater than the second value, false otherwise.
 */
declare function greaterThan(a: number, b: number): boolean;
/**
 * Checks if the first value is less than the second value.
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @returns {boolean} - True if the first value is less than the second value, false otherwise.
 */
declare function lessThan(a: number, b: number): boolean;
/**
 * Performs a deep equality check between two objects or arrays.
 * @param {Object|Array} obj1 - The first object or array.
 * @param {Object|Array} obj2 - The second object or array.
 * @returns {boolean} - True if the objects or arrays are deeply equal, false otherwise.
 */
declare function deepEqual<T>(obj1: T, obj2: T): boolean;
export { equals, deepEqual, lessThan, greaterThan };
