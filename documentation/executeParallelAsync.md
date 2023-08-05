# Documentation: `executeParallelAsync`

## Overview

The `executeParallelAsync` function is a utility designed to execute a given function asynchronously and in parallel for each element in an input array. It properly handles Promises, allowing for efficient execution of the provided function for large datasets. This function takes advantage of the `executeAsync` and `splitIntoChunks` functions to accomplish its task.

## Function Signature

```typescript
function executeParallelAsync<T, Y>(
  fn: (...args: Y[]) => T | Promise<T>,
  array: Y[] = [],
  chunkSize: number = 1000
): Promise<T[]>;
```

### Parameters

- `fn` (Function): The function to execute. This function can accept any number of arguments of type `Y[]` and should return a value of type `T` or a Promise that resolves to a value of type `T`.
- `array` (Array, optional, default: `[]`): The array of elements for which the function `fn` will be executed. If not provided or an empty array is passed, the function will not perform any executions and resolve with an empty result array.
- `chunkSize` (number, optional, default: `1000`): The size of each chunk in which the `array` will be divided. This parameter allows for parallel execution of the function for each chunk, improving performance when handling large arrays.

### Returns

- `Promise<T[]>`: A promise that resolves with an array of results after executing the function `fn` for each element in the input `array`. The resulting array contains the individual results of each function execution, and the order of results is determined by the order of elements in the input `array`.

## Execution Process

1. The `executeParallelAsync` function first divides the input `array` into smaller chunks using the `splitIntoChunks` function. This step is beneficial for large arrays, as it enables parallel execution of the provided function for each chunk.

2. Next, the function `fn` is executed asynchronously for each chunk using the `executeAsync` function. The `executeAsync` function ensures that the provided function `fn` is executed safely within a Promise, allowing for proper error handling and resolution of the results.

3. The function then awaits the completion of all promises representing each function execution using `Promise.all`, ensuring that all asynchronous executions are completed.

4. The results from the asynchronous executions are collected into an array, which is then flattened if any of the results are Promises. This step ensures that the final promise resolves to a flat array of individual results, regardless of whether any of the results were returned as Promises.

5. Lastly, the `executeParallelAsync` function returns a promise that resolves with the final array of results containing the individual results of executing the function `fn` for each element in the input `array`.

## Usage

The `executeParallelAsync` function is particularly useful when you need to execute a time-consuming function on a large dataset asynchronously. By specifying a `chunkSize`, you can optimize performance by processing elements in parallel. It handles Promises correctly, providing a convenient way to manage asynchronous operations effectively.

Example:

```javascript
// Assuming you have a function called 'processItem' that processes an individual item asynchronously
const processItem = async (item) => {
  // Your asynchronous processing logic here
  return someResult;
};

const data = [/* array of elements to process */];
const chunkSize = 500; // Divide the data into chunks of 500 elements

executeParallelAsync(processItem, data, chunkSize)
  .then(results => {
    // Handle the array of results after processing each element
    console.log(results);
  })
  .catch(error => {
    // Handle any errors that occurred during the processing
    console.error(error);
  });
```

In the example above, the `processItem` function is executed in parallel for each chunk of the `data` array, and the final results are printed to the console once all processing is complete. Any errors that occur during processing are caught and logged appropriately.

Please ensure that you provide an appropriate `chunkSize` value based on the nature of your function and dataset to achieve the desired balance between performance and resource utilization.