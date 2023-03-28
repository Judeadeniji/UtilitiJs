  // Value checks

  function isPositive(num) {
    return num > 0;
  }

  function isNegative(num) {
    return num < 0;
  }

  function isZero(num) {
    return num === 0;
  }

  function isEven(num) {
    return num % 2 === 0;
  }

  function isOdd(num) {
    return num % 2 === 1;
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function isWhole(num) {
    return Number.isInteger(num);
  }

  function isFractional(num) {
    return num % 1 !== 0;
  }

export {
  isFractional,
  isWhole,
  isPrime,
  isOdd,
  isEven,
  isZero,
  isNegative,
  isPositive,
}