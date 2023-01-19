  // Statistics

  function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }

  function mean(arr) {
    return sum(arr) / arr.length;
  }

  function median(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[mid] + arr[mid - 1]) / 2;
    }
    return arr[mid];
  }

  function mode(arr) {
    const count = {};
    arr.forEach((num) => {
      count[num] = (count[num] || 0) + 1;
    });
    const mode = Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
    return parseInt(mode, 10);
  }

  function filter(arr, predicate) {
    return arr.filter(predicate);
  }

  function map(arr, mapper) {
    return arr.map(mapper);
  }

  function reduce(arr, reducer, initialValue) {
    return arr.reduce(reducer, initialValue);
  }

export {
      // Statistics
    sum,
    mean,
    median,
    mode,
    filter,
    map,
    reduce,
}