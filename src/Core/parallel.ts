/**
 * Executes a function asynchronously.
 * @param {Function} fn - The function to execute.
 * @param {...any} args - Arguments to pass to the function.
 * @returns {Promise<any>} A promise that resolves with the result of the function execution.
 */
function executeAsync<T, Y>(fn: (...args: Y[]) => T, ...args: Y[]): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      const result = fn(...args);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Splits an array into chunks.
 * @param {Array} array - The array to split.
 * @param {number} chunkSize - The size of each chunk.
 * @returns {Array} An array of arrays representing the chunks.
 */
function splitIntoChunks<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 * Executes a function in parallel for each element in an array, handling Promises correctly.
 * @param {Function} fn - The function to execute.
 * @param {Array} array - The array of elements.
 * @param {number} [chunkSize] - The size of each chunk (default: 1000).
 * @returns {Promise<any[]>} A promise that resolves with an array of results.
 * @template T - The return type of the function.
 * @template Y - The argument type of the function.
 */
export function executeParallelAsync<T, Y>(
  fn: (...args: Y[]) => T | Promise<T>,
  array: Y[] = [],
  chunkSize: number = 1000
): Promise<T[]> {
  const chunks = splitIntoChunks(array, chunkSize);
  const promises = chunks.map(chunk => executeAsync(fn, ...chunk));
  return Promise.all(promises)
    .then(results => {
      // Flatten the array if any result is a Promise
      const flattenedResults = results.reduce((acc, curr) => {
        if (curr instanceof Promise) {
          return acc.concat([curr]);
        }
        return acc.concat(curr);
      }, []);

      // Wait for any remaining Promises to resolve
      return Promise.all(flattenedResults);
    });
}