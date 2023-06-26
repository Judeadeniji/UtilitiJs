"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iff = exports.implies = exports.nor = exports.nand = exports.xor = exports.not = exports.or = exports.and = void 0;
/**
 * Returns true if all the conditions are truthy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if all conditions are truthy values, false otherwise.
 */
function and(...conditions) {
    return conditions.every(Boolean);
}
exports.and = and;
/**
 * Returns true if any of the conditions are truthy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if any condition is truthy value, false otherwise.
 */
function or(...conditions) {
    return conditions.some(Boolean);
}
exports.or = or;
/**
 * Returns the boolean negation of the condition.
 *
 * @param {*} condition - The condition to be negated.
 * @returns {boolean} The boolean negation of the condition.
 */
function not(condition) {
    return !condition;
}
exports.not = not;
/**
 * Returns true if an odd number of the conditions are truthy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if an odd number of conditions are truthy values, false otherwise.
 */
function xor(...conditions) {
    return conditions.filter(Boolean).length % 2 === 1;
}
exports.xor = xor;
/**
 * Returns true if any of the conditions are falsy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if any condition is falsy value, false otherwise.
 */
function nand(...conditions) {
    return !and(...conditions);
}
exports.nand = nand;
/**
 * Returns true if all of the conditions are falsy values, false otherwise.
 *
 * @param {...*} conditions - The conditions to be evaluated.
 * @returns {boolean} True if all conditions are falsy values, false otherwise.
 */
function nor(...conditions) {
    return !or(...conditions);
}
exports.nor = nor;
/**
 * Returns the value of a logical implication (a -> b).
 *
 * @param {*} a - The antecedent of the implication.
 * @param {*} b - The consequent of the implication.
 * @returns {boolean} The truth value of the implication.
 */
function implies(a, b) {
    return or(!a, b);
}
exports.implies = implies;
/**
 * Returns the value of a biconditional implication (a <-> b).
 *
 * @param {*} a - The first proposition of the biconditional.
 * @param {*} b - The second proposition of the biconditional.
 * @returns {boolean} The truth value of the biconditional.
 */
function iff(a, b) {
    return and(implies(a, b), implies(b, a));
}
exports.iff = iff;
//# sourceMappingURL=logic.js.map