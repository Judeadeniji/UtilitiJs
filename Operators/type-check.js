  // Type checks

  function isInteger(num) {
    return Number.isInteger(num);
  }

  function isString(val) {
    return typeof val === 'string';
  }

  function isArray(val) {
    return Array.isArray(val);
  }

  function isObject(val) {
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
  }

  function isFunction(val) {
    return typeof val === 'function';
  }

  function isBoolean(val) {
    return typeof val === 'boolean';
  }
  
  // The isNaN function determines if a value is not a number
function isNaN(value) {
  // Use the built-in Number.isNaN function to check if the value is not a number
  return Number.isNaN(value);
}

// The parseInt function converts a string to an integer
function parseInt(str, radix) {
  // Use the built-in Number.parseInt function to convert the string to an integer
  return Number.parseInt(str, radix);
}

// The parseFloat function converts a string to a floating-point number
function parseFloat(str) {
  // Use the built-in Number.parseFloat function to convert the string to a floating-point number
  return Number.parseFloat(str);
}

export {
      // Type checks
    isInteger,
    isString,
    isArray,
    isObject,
    isFunction,
    isBoolean,
    isNaN,
    parseFloat,
    parseInt,
}