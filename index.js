/*import Core from './utilities/core';
import Operators from './utilities/operators';

export {
  Core,
  Operators 
} */

import * as Core from "./Core/index";

if (process.env.NODE_ENV === 'production') {
  const packageJson = require('./package.json');
const packageVersion = packageJson.version;
console.warn(`Package version: ${packageVersion}`);
  console.warn('You are now running UtilitiJs in development Mode', 'Happy Hacking');
} else {
  
}


export {
  Core
}
