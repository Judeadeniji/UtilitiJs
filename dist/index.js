"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueCheck = exports.typeCheck = exports.esFetch = exports.object = exports.logic = exports.compare = exports.strings = exports.maths = exports.array = exports.createSubscriber = exports.mergeReducers = exports.applyMiddleware = exports.Store = exports.Core = exports.Http = void 0;
const Core = __importStar(require("./Core/index.js"));
exports.Core = Core;
const http_js_1 = __importDefault(require("./Core/http.js"));
exports.Http = http_js_1.default;
const http_2_js_1 = __importDefault(require("./Core/http-2.js"));
exports.esFetch = http_2_js_1.default;
const store_js_1 = require("./Core/store.js");
Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return store_js_1.Store; } });
Object.defineProperty(exports, "applyMiddleware", { enumerable: true, get: function () { return store_js_1.applyMiddleware; } });
Object.defineProperty(exports, "mergeReducers", { enumerable: true, get: function () { return store_js_1.mergeReducers; } });
Object.defineProperty(exports, "createSubscriber", { enumerable: true, get: function () { return store_js_1.createSubscriber; } });
const array = __importStar(require("./Operators/array.js"));
exports.array = array;
const maths = __importStar(require("./Operators/maths.js"));
exports.maths = maths;
const strings = __importStar(require("./Operators/string.js"));
exports.strings = strings;
const compare = __importStar(require("./Operators/compare.js"));
exports.compare = compare;
const logic = __importStar(require("./Operators/logic.js"));
exports.logic = logic;
const object = __importStar(require("./Operators/object.js"));
exports.object = object;
const typeCheck = __importStar(require("./Operators/type-check.js"));
exports.typeCheck = typeCheck;
const valueCheck = __importStar(require("./Operators/value-check.js"));
exports.valueCheck = valueCheck;
if (process.env.NODE_ENV === "development") {
    console.warn("You are now running UtilitiJs in development Mode", "Happy Hacking 🎉");
}
//# sourceMappingURL=index.js.map