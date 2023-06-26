import * as Core from "./Core/index.js";
import Http from "./Core/http.js";
import esFetch from "./Core/http-2.js";
import {
  Store,
  applyMiddleware,
  mergeReducers,
  createSubscriber,
} from "./Core/store.js";
import * as array from "./Operators/array.js";
import * as maths from "./Operators/maths.js";
import * as strings from "./Operators/string.js";
import * as compare from "./Operators/compare.js";
import * as logic from "./Operators/logic.js";
import * as object from "./Operators/object.js";
import * as typeCheck from "./Operators/type-check.js";
import * as valueCheck from "./Operators/value-check.js";

if (process.env.NODE_ENV === "development") {
  console.warn(
    "You are now running UtilitiJs in development Mode",
    "Happy Hacking 🎉"
  );
}

export {
  Http,
  Core,
  Store,
  applyMiddleware,
  mergeReducers,
  createSubscriber,
  array,
  maths,
  strings,
  compare,
  logic,
  object,
  esFetch,
  typeCheck,
  valueCheck,
};
