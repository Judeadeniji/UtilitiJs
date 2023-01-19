  // Logical operations

  function and(...conditions) {
    return conditions.every(Boolean);
  }

  function or(...conditions) {
    return conditions.some(Boolean);
  }

  function not(condition) {
    return !condition;
  }

  function xor(...conditions) {
    return conditions.filter(Boolean).length % 2 === 1;
  }

  function nand(...conditions) {
    return !and(...conditions);
  }

  function nor(...conditions) {
    return !or(...conditions);
  }

  function implies(a, b) {
    return or(!a, b);
  }

  function iff(a, b) {
    return and(implies(a, b), implies(b, a));
  }

export {
  // Logical operations
    and,
    or,
    not,
    xor,
    nand,
    nor,
    implies,
    iff,
}