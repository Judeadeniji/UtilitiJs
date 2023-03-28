
import * as Core from "./Core/index.js";
import * as array from "./Operators/array.js";
import * as compare from "./Operators/compare.js";
import * as logic from "./Operators/logic.js";
import * as object from "./Operators/object.js";
import * as typeCheck from "./Operators/type-check.js";
import * as valueCheck from "./Operators/value-check.js";

if (process.env.NODE_ENV === 'development') {
  console.warn('You are now running UtilitiJs in development Mode', 'Happy Hacking 🎉');
}

export {
  Core,
  array,
  compare,
  logic,
  object,
  typeCheck,
  valueCheck
}
