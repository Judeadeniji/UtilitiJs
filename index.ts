import * as Core from "./src/Core/index.js";
import Http from "./src/Core/http.js";
import esFetch from "./src/Core/http-2.js";
import { executeParallelAsync } from "./src/Core/parallel.js";
import {
  Store,
  createStore,
  applyMiddleware,
  mergeReducers,
  createSubscriber,
} from "./src/Core/store.js";
import * as array from "./src/Operators/array.js";
import * as maths from "./src/Operators/maths.js";
import * as strings from "./src/Operators/string.js";
import * as compare from "./src/Operators/compare.js";
import * as logic from "./src/Operators/logic.js";
import * as object from "./src/Operators/object.js";
import * as typeCheck from "./src/Operators/type-check.js";
import * as valueCheck from "./src/Operators/value-check.js";

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
  createStore,
  applyMiddleware,
  mergeReducers,
  createSubscriber,
  executeParallelAsync,
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
