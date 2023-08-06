/**
 * Executes a function in parallel for each element in an array, handling Promises correctly.
 * @param {Function} fn - The function to execute.
 * @param {Array} array - The array of elements.
 * @param {number} [chunkSize] - The size of each chunk (default: 1000).
 * @returns {Promise<any[]>} A promise that resolves with an array of results.
 * @template T - The return type of the function.
 * @template Y - The argument type of the function.
 */
export declare function executeParallelAsync<T, Y>(fn: (...args: Y[]) => T | Promise<T>, array?: Y[], chunkSize?: number): Promise<T[]>;
