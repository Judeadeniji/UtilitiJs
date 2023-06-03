import * as Core from "./Core/index";
import Http from "./Core/http";
import * as array from "./Operators/array";
import * as compare from "./Operators/compare";
import * as logic from "./Operators/logic";
import * as object from "./Operators/object";
import * as typeCheck from "./Operators/type-check";
import * as valueCheck from "./Operators/value-check";

if (process.env.NODE_ENV === 'development') {
  console.warn('You are now running UtilitiJs in development Mode', 'Happy Hacking 🎉');
}

export {
  Http,
  Core,
  array,
  compare,
  logic,
  object,
  typeCheck,
  valueCheck
};
