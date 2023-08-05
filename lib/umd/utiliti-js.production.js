!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("UtilitiJs",[],t):"object"==typeof exports?exports.UtilitiJs=t():e.UtilitiJs=t()}(self,(()=>(()=>{"use strict";var e={275:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class r{url;methods;interceptors;finish;catchFn;constructor(e){this.url=e,this.methods=[],this.interceptors=[],this.finish=()=>{},this.catchFn=e=>console.error(e)}useInterceptor(e){return this.interceptors.push(e),this}addMethod(e,t,r){const n={method:e,callback:t,options:r};return this.methods.push(n),this}get(e,t={}){return this.addMethod("GET",e,t)}put(e,t={}){return this.addMethod("PUT",e,t)}post(e,t={}){return this.addMethod("POST",e,t)}patch(e,t={}){return this.addMethod("PATCH",e,t)}delete(e,t={}){return this.addMethod("DELETE",e,t)}send(){const e=this.methods.map((async({method:e,callback:t,options:r},n)=>{let o={method:e,headers:r.headers||{},data:r.data};for(const t of this.interceptors)t.request&&(o=await t.request({method:e,url:this.url,options:o}));return fetch(this.url,o).then((e=>({status:e.status,statusText:e.statusText,text:async()=>await e.text(),json:async()=>await e.json()}))).then((async r=>{for(const e of this.interceptors)e.response&&await e.response(r);return await t({method:e,url:this.url,options:o},r),r})).catch((async e=>{for(const t of this.interceptors)t.error&&await t.error(e);throw e}))}));Promise.all(e).then(this.finish).catch(this.catchFn)}onend(e){return this.finish=e,this}onerror(e){return this.catchFn=e,this}}t.default=function(e){return new r(e)}},658:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(662);class o extends Error{method;url;data;headers;constructor(e,t,r,n,o){super(e),this.name="Utiliti-HttpRequestError",this.method=t,this.url=r,this.data=n,this.headers=o}}async function i(e,t,r=undefined,s={},a,u=0,c=0,f=0){if("string"!=typeof e)throw new o("Method must be a string",e,r,t,s);if("string"!=typeof t)throw new o("URL must be a string",e,t,r,s);if("object"!=typeof s)throw new o("Header must be an object",e,t,r,s);const{params:l,pathname:h,...d}=s;let p=t;if(l){const e=new n.UrlParser(t);p=e.buildUrl(null,null,h||e.getPath(),l)}const m={method:e,headers:d};a instanceof AbortSignal&&(m.signal=a),r&&("string"==typeof r||"object"==typeof r&&r instanceof FormData?m.body=r:"object"==typeof r?(m.headers["Content-Type"]="application/json",m.body=JSON.stringify(r)):m.body=r);try{const n=await fetch(p,m);if(!n.ok)throw new o(n.statusText,e,t,r,s);return n}catch(n){if(f>u)return await(y=c,new Promise((e=>setTimeout(e,y)))),i(e,t,r,s,a,u+1,c,f);throw new o(n.message,e,t,r,s)}var y}t.default=class{interceptors;scopedInterceptors;retryCount;retryDelay;retryAttempt;constructor(e={}){this.interceptors=[],this.scopedInterceptors=[],this.retryCount=0,this.retryDelay=e.retryDelay||1e3,this.retryAttempt=e.retryAttempt||3}addInterceptor(e){if("function"!=typeof e)throw new o("Interceptor must be a function","","","interceptor must be of type Function",{});this.interceptors.push(e)}addScopedInterceptor(e){if("function"!=typeof e)throw new o("Interceptor must be a function","","","interceptor must be of type Function",{});this.scopedInterceptors.push(e)}sendRequestWithInterceptors(e,t,r=undefined,n={},s){if("string"!=typeof e)throw new o("Method must be a string",e,t,r,n);if("string"!=typeof t)throw new o("URL must be a string",e,t,r,n);if("object"!=typeof n)throw new o("Header must be an object",e,t,r,n);if(!Array.isArray(this.interceptors))throw new o("Interceptors must be an array",e,t,r,n);const a=this.interceptors.length;let u=Promise.resolve({method:e,url:t,data:r,header:n,signal:s});for(let o=0;o<a;o++){const a=this.interceptors[o];u=u.then((e=>a({method:e.method,url:e.url,data:e.data,header:e.header,signal:e.signal},(({method:t,url:r,data:n,header:o,signal:s})=>i(e.method||t,e.url||r,e.data||n,e.signal||s instanceof AbortSignal?s:void 0,e.header||o))))).then((o=>o&&"Response"===o.constructor.name?{method:e,url:t,data:r,header:n,signal:s}:o))}return u.then((e=>i(e.method,e.url,e.data,e.header,e.signal,this.retryCount,this.retryDelay,this.retryAttempt)))}async get(e,t={},r){return await this.sendRequestWithInterceptors("GET",e,void 0,t,r)}async post(e,t,r={},n){return await this.sendRequestWithInterceptors("POST",e,t,r,n)}async put(e,t,r={},n){return await this.sendRequestWithInterceptors("PUT",e,t,r,n)}async patch(e,t,r={},n){return await this.sendRequestWithInterceptors("PATCH",e,t,r,n)}async delete(e,t={},r){return await this.sendRequestWithInterceptors("DELETE",e,void 0,t,r)}useInterceptors(e){if(!Array.isArray(e))throw new o("Interceptors must be an array","","","Interceptors must be of type Function[]",{});e.forEach((e=>{this.addInterceptor(e)}))}useScopedInterceptors(e,t,r){if(!Array.isArray(e))throw new o("Interceptors must be an array",t,r,"interceptors must be of type Function[]",{});e.forEach((e=>{this.addScopedInterceptor(((n,o)=>n.method===t&&n.url===r?e(n,o):o(n)))}))}}},662:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.trim=t.DataValidator=t.Random=t.UrlParser=t.TaskQueue=t.generateId=t.CustomError=t.dataFilter=t.dateFilter=t.DataFilter=t.DateFilter=t.Http=void 0;class r extends Error{constructor(e){super(e),this.name="Utiliti: Error"}}t.CustomError=r,t.Http=function(){console.warn("Use Of Core.Http has been deprecated. Use the Http module instead"),this.get=async(e,t={})=>{if("string"!=typeof e)throw new r("url must be a string");if("object"!=typeof t)throw new r("Header must be an object");try{const r=await fetch(e,{headers:new Headers(t)});return r.ok?r:Promise.reject(r.statusText)}catch(e){console.error("Fetch error:",e)}},this.post=async(e,t,n={})=>{if("string"!=typeof e)throw new r("url must be a string");if("object"!=typeof n)throw new r("header must be an object");if("object"!=typeof t)throw new r("the body of the request must be an object");try{return await fetch(e,{method:"POST",body:JSON.stringify(t),headers:new Headers(n)})}catch(e){console.error("Fetch error:",e)}},this.put=async(e,t,n={})=>{if("string"!=typeof e)throw new r("url must be a string");if("object"!=typeof n)throw new r("header must be an object");if("object"!=typeof t)throw new r("the body of the request must be an object");try{return await fetch(e,{method:"PUT",body:JSON.stringify(t),headers:new Headers(n)})}catch(e){console.error("Fetch error:",e)}},this.patch=async(e,t,n={})=>{if("string"!=typeof e)throw new r("url must be a string");if("object"!=typeof n)throw new r("header must be an object");if("object"!=typeof t)throw new r("the body of the request must be an object");try{return await fetch(e,{method:"PATCH",body:JSON.stringify(t),headers:new Headers(n)})}catch(e){console.error("Fetch error:",e)}},this.delete=async(e,t={})=>{if("string"!=typeof e)throw new r("url must be a string");if("object"!=typeof t)throw new r("header must be an object");try{return await fetch(e,{method:"DELETE",headers:new Headers(t)})}catch(e){console.error("Fetch error:",e)}}},t.dataFilter=function(e){return console.warn("dataFilter has been renamed to DataFilter"),new n(e)};class n{filterFn;constructor(e){this.filterFn=e}filter(e){if("function"!=typeof this.filterFn)throw new r("The filter function must be a function.");const t=[];for(const r of e)!0===this.filterFn(r)&&t.push(r);return t}}t.DataFilter=n,t.dateFilter=function(){return console.warn("dateFilter has been renamed to DateFilter"),new o};class o{constructor(){}text(e){return`${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`}formatDate(e,t){if("string"!=typeof t)throw new r("Provide a valid date format.");if("ago"===t){const t=(new Date).getTime()-e.getTime(),r=Math.floor(t/1e3),n=Math.floor(r/60),o=Math.floor(n/60),i=Math.floor(o/24),s=Math.floor(i/30),a=Math.floor(s/12);return a>0?`${a} year${a>1?"s":""} ago`:s>0?`${s} month${s>1?"s":""} ago`:i>0?`${i} day${i>1?"s":""} ago`:o>0?`${o} hour${o>1?"s":""} ago`:n>0?`${n} minute${n>1?"s":""} ago`:`${r} second${1!==r?"s":""} ago`}const n={yyyy:e.getFullYear().toString(),mm:(e.getMonth()+1).toString().padStart(2,"0"),dd:e.getDate().toString().padStart(2,"0"),HH:e.getHours().toString().padStart(2,"0"),MM:e.getMinutes().toString().padStart(2,"0"),SS:e.getSeconds().toString().padStart(2,"0")};return t.replace(/yyyy|mm|dd|HH|MM|SS/g,(e=>n[e]))}isLeapYear(e){return e%4==0&&e%100!=0||e%400==0}getDaysInMonth(e,t){return 2===e&&this.isLeapYear(t)?29:[31,28,31,30,31,30,31,31,30,31,30,31][e-1]}addDays(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r}subtractDays(e,t){return this.addDays(e,-t)}compareDates(e,t){const r=t.getTime()-e.getTime();return Math.floor(r/864e5)}isPastDate(e){return e<new Date}}t.DateFilter=o,t.generateId=function(){return Math.floor(1e6*Math.random())+1},t.TaskQueue=class{tasks;constructor(){this.tasks=[]}addTask(e){this.tasks.push(e)}runTasks(){for(const e of this.tasks){if("function"!=typeof e)throw new r("Cannot run a "+typeof e+" as a function. \n This requires a function");e()}}clearTasks(){this.tasks=[]}getTaskCount(){return this.tasks.length}},t.UrlParser=class{parsedUrl;constructor(e){if("string"!=typeof e)throw new r("url must be a string");this.parsedUrl=new URL(e)}getPath(){return this.parsedUrl.pathname}getQueryString(){return this.parsedUrl.search}getQueryParameter(e){return this.parsedUrl.searchParams.get(e)}buildUrl(e,t,r,n){let o=this.parsedUrl;e&&t&&(o=new URL(e,t)),o.pathname=r;for(const[e,t]of Object.entries(n))o.searchParams.append(e,t);return o.toString()}},t.Random=class{number(e,t){return Math.floor(Math.random()*(t-e+1))+e}string(e){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let r="";for(let n=0;n<e;n++)r+=t[Math.floor(Math.random()*t.length)];return r}},t.DataValidator=class{inRange(e,t,r){return e>=t&&e<=r}matchFormat(e,t){return t.test(e)}hasLength(e,t){return e.length===t}},t.trim=function(e){return e.replace(/^\s+|\s+$/g,"")}},308:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.asyncActionCreator=t.asyncThunkMiddleware=t.createStoreWithMiddleware=t.createAsyncSubscriber=t.createSubscriber=t.mergeReducers=t.applyMiddleware=t.createStore=t.Store=void 0;class r{reducer;state;lastAction;listeners;constructor(e,t={}){if(this.reducer=e,this.state=t,this.lastAction=null,this.listeners=[],"function"!=typeof e)throw new Error("Reducer must be a function.")}getState(){const e=JSON.stringify(this.state);return JSON.parse(e)}dispatch(e){this.lastAction=e,this.state=this.reducer(this.state,e),this.listeners.forEach((t=>t(e,this.state)))}subscribe(e){if("function"!=typeof e)throw new Error("Subscriber must be a function");return this.listeners.push(e),()=>{this.listeners=this.listeners.filter((t=>t!==e))}}replaceReducer(e){this.reducer=e}getReducer(){return this.reducer}}t.Store=r,t.mergeReducers=function(e){if("object"!=typeof e)throw new Error("Reducers must be provided as an object.");return(t={},r)=>Object.keys(e).reduce(((n,o)=>(n[o]=e[o](t[o],r),n)),{})},t.applyMiddleware=function(...e){return t=>(n,o)=>{const i=new r(o,n);let s=i.dispatch;return e.forEach((e=>{s=e(i)(s)})),{...t,dispatch:s}}},t.createSubscriber=function(e){return{subscribe:t=>e.subscribe(t)}},t.createStore=function(e,t){return new r(t,e)},t.createStoreWithMiddleware=function(e,t,...n){const o=new r(e,t);return n.reduceRight(((e,t)=>t(o)(e)),o.dispatch),o},t.asyncActionCreator=function(e,t,r){return console.log("asyncActionCreator"),(...n)=>async o=>{console.log("asyncActionCreator");try{const i=await t(...n);o({type:e,payload:i,meta:r})}catch(t){o({type:e,error:!0,payload:t.message,meta:r})}}},t.asyncThunkMiddleware=function(e){return t=>async r=>{if("function"==typeof r.meta)try{await r.meta(e.dispatch,e.getState)}catch(e){const n={type:r.type,payload:e.message,error:!0};return void t(n)}t(r)}},t.createAsyncSubscriber=function(e,t){const r=()=>{const r=e.getState(),n=e.lastAction;t(r,n)};return{subscribe:()=>e.subscribe(r),unsubscribe:e.subscribe(r)}}},775:(e,t)=>{function r(e){return e.reduce(((e,t)=>e+t),0)}Object.defineProperty(t,"__esModule",{value:!0}),t.entries=t.values=t.keys=t.concat=t.fill=t.join=t.reverse=t.lastIndexOf=t.indexOf=t.includes=t.sort=t.slice=t.forEach=t.flatMap=t.findIndex=t.find=t.some=t.every=t.shuffle=t.chunk=t.flatten=t.unique=t.min=t.max=t.reduce=t.map=t.filter=t.mode=t.median=t.mean=t.sum=void 0,t.sum=r,t.mean=function(e){return r(e)/e.length},t.median=function(e){e.sort(((e,t)=>e-t));const t=Math.floor(e.length/2);return e.length%2==0?(e[t]+e[t-1])/2:e[t]},t.mode=function(e){const t={};e.forEach((e=>{t[e]=(t[e]||0)+1}));const r=Object.keys(t).reduce(((e,r)=>t[e]>t[r]?e:r));return parseInt(r,10)},t.filter=function(e,t){return e.filter(t)},t.map=function(e,t){return e.map(t)},t.reduce=function(e,t,r){return e.reduce(t,r)},t.max=function(e){if(0===e.length)throw new Error("Array is empty");let t=e[0];for(let r=1;r<e.length;r++)e[r].compareTo(t)>0&&(t=e[r]);return t},t.min=function(e){return Math.min(...e)},t.unique=function(e){return[...new Set(e)]},t.flatten=function(e){return e.flat()},t.chunk=function(e,t){const r=[];for(let n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r},t.shuffle=function(e){const t=[...e];for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t},t.every=function(e,t){return e.every(t)},t.some=function(e,t){return e.some(t)},t.find=function(e,t){return e.find(t)},t.findIndex=function(e,t){return e.findIndex(t)},t.flatMap=function(e,t){return e.flatMap(t)},t.forEach=function(e,t){e.forEach(t)},t.slice=function(e,t,r){return e.slice(t,r)},t.sort=function(e,t){return e.sort(t)},t.includes=function(e,t){return e.includes(t)},t.indexOf=function(e,t){return e.indexOf(t)},t.lastIndexOf=function(e,t){return e.lastIndexOf(t)},t.reverse=function(e){return e.reverse()},t.join=function(e,t){return e.join(t)},t.fill=function(e,t,r=0,n=e.length){return e.fill(t,r,n)},t.concat=function(e,...t){return e.concat(...t)},t.keys=function(e){return e.keys()},t.values=function(e){return e.values()},t.entries=function(e){return e.entries()}},171:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.greaterThan=t.lessThan=t.deepEqual=t.equals=void 0,t.equals=function(e,t){return e===t},t.greaterThan=function(e,t){return e>t},t.lessThan=function(e,t){return e<t},t.deepEqual=function e(t,r){if(typeof t!=typeof r)return!1;if("object"!=typeof t||null===t||null===r)return t===r;if(Array.isArray(t)!==Array.isArray(r))return!1;const n=Object.keys(t),o=Object.keys(r);if(n.length!==o.length)return!1;for(let o of n)if(!e(t[o],r[o]))return!1;return!0}},566:(e,t)=>{function r(...e){return e.every(Boolean)}function n(...e){return e.some(Boolean)}function o(e,t){return n(!e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.iff=t.implies=t.nor=t.nand=t.xor=t.not=t.or=t.and=void 0,t.and=r,t.or=n,t.not=function(e){return!e},t.xor=function(...e){return e.filter(Boolean).length%2==1},t.nand=function(...e){return!r(...e)},t.nor=function(...e){return!n(...e)},t.implies=o,t.iff=function(e,t){return r(o(e,t),o(t,e))}},227:(e,t)=>{function r(e){return e.reduce(((e,t)=>e+t),0)}function n(e,t){return 0===t?e:n(t,e%t)}Object.defineProperty(t,"__esModule",{value:!0}),t.sign=t.floor=t.ceil=t.powerOf10=t.atanh=t.acosh=t.asinh=t.tanh=t.cosh=t.sinh=t.log10=t.naturalLogarithm=t.absoluteDifference=t.nthRoot=t.lcm=t.gcd=t.isInteger=t.random=t.exponentiate=t.logarithm=t.atan=t.acos=t.asin=t.tan=t.cos=t.sin=t.round=t.min=t.max=t.absoluteValue=t.squareRoot=t.power=t.factorial=t.average=t.sum=t.randomInt=t.roundTo=t.toDegrees=t.toRadians=t.lerp=t.clamp=void 0,t.clamp=function(e,t,r){return Math.min(Math.max(e,t),r)},t.lerp=function(e,t,r){return e+(t-e)*r},t.toRadians=function(e){return e*Math.PI/180},t.toDegrees=function(e){return 180*e/Math.PI},t.roundTo=function(e,t){const r=10**t;return Math.round(e*r)/r},t.randomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},t.sum=r,t.average=function(e){return r(e)/e.length},t.factorial=function e(t){return 0===t||1===t?1:t*e(t-1)},t.power=function(e,t){return Math.pow(e,t)},t.squareRoot=function(e){return Math.sqrt(e)},t.absoluteValue=function(e){return Math.abs(e)},t.max=function(...e){return Math.max(...e)},t.min=function(...e){return Math.min(...e)},t.round=function(e){return Math.round(e)},t.sin=function(e){return Math.sin(e)},t.cos=function(e){return Math.cos(e)},t.tan=function(e){return Math.tan(e)},t.asin=function(e){return Math.asin(e)},t.acos=function(e){return Math.acos(e)},t.atan=function(e){return Math.atan(e)},t.logarithm=function(e,t){return Math.log(e)/Math.log(t)},t.exponentiate=function(e){return Math.exp(e)},t.random=function(){return Math.random()},t.isInteger=function(e){return Number.isInteger(e)},t.gcd=n,t.lcm=function(e,t){return e*t/n(e,t)},t.nthRoot=function(e,t){return Math.pow(e,1/t)},t.absoluteDifference=function(e,t){return Math.abs(e-t)},t.naturalLogarithm=function(e){return Math.log(e)},t.log10=function(e){return Math.log10(e)},t.sinh=function(e){return Math.sinh(e)},t.cosh=function(e){return Math.cosh(e)},t.tanh=function(e){return Math.tanh(e)},t.asinh=function(e){return Math.asinh(e)},t.acosh=function(e){return Math.acosh(e)},t.atanh=function(e){return Math.atanh(e)},t.powerOf10=function(e){return Math.pow(10,e)},t.ceil=function(e){return Math.ceil(e)},t.floor=function(e){return Math.floor(e)},t.sign=function(e){return Math.sign(e)}},556:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.filterProperties=t.mapProperties=t.forEachProperty=t.cloneDeep=t.cloneShallow=t.extendObject=t.looksLike=t.getEntries=t.getValues=t.getKeys=t.hasProperty=t.setProperty=t.getProperty=void 0,t.getProperty=function(e,t){return e[t]},t.setProperty=function(e,t,r){e[t]=r},t.hasProperty=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.getKeys=function(e){return Object.keys(e)},t.getValues=function(e){return Object.values(e)},t.getEntries=function(e){return Object.entries(e)},t.extendObject=function(e,...t){return Object.assign(e,...t)},t.cloneShallow=function(e){return Object.assign({},e)},t.cloneDeep=function(e){return JSON.parse(JSON.stringify(e))},t.forEachProperty=function(e,t){for(const[r,n]of Object.entries(e))t(n,r,e)},t.mapProperties=function(e,t){const r={};for(const[n,o]of Object.entries(e))r[n]=t(o,n,e);return r},t.filterProperties=function(e,t){const r={};for(const[n,o]of Object.entries(e))t(o,n,e)&&(r[n]=o);return r},t.looksLike=function e(t,r){if("object"!=typeof t||"object"!=typeof r)return!1;const n=Object.keys(r);for(let o of n){if(!t.hasOwnProperty(o))return!1;if(t[o]?.constructor!==r[o]?.constructor)return!1;if("object"==typeof t[o]&&"object"==typeof r[o]&&!e(t[o],r[o]))return!1}return!0}},48:(e,t)=>{function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}Object.defineProperty(t,"__esModule",{value:!0}),t.isAlphanumericPalindrome=t.generateRandomString=t.maskCreditCardNumber=t.isValidHexColor=t.toSlug=t.removeDuplicates=t.isValidCreditCardNumber=t.splitString=t.isValidUsername=t.removeNonAlphanumeric=t.toCamelCase=t.isValidPassword=t.toSnakeCase=t.padString=t.countWords=t.toKebabCase=t.isValidPhoneNumber=t.isValidUrl=t.removeSubstring=t.reverseWords=t.isValidEmail=t.toUpperCase=t.toLowerCase=t.removeWhitespace=t.extractNumbers=t.toTitleCase=t.isPalindrome=t.isEmpty=t.trim=t.countOccurrences=t.capitalizeWords=t.replaceAll=t.contains=t.endsWith=t.startsWith=t.truncate=t.reverse=t.capitalize=void 0,t.capitalize=r,t.reverse=function(e){return e.split("").reverse().join("")},t.truncate=function(e,t){return e.length<=t?e:e.slice(0,t)+"..."},t.startsWith=function(e,t){return e.startsWith(t)},t.endsWith=function(e,t){return e.endsWith(t)},t.contains=function(e,t){return e.includes(t)},t.replaceAll=function(e,t,r){return e.split(t).join(r)},t.capitalizeWords=function(e){return e.replace(/\b\w/g,(e=>e.toUpperCase()))},t.countOccurrences=function(e,t){const r=new RegExp(t,"g"),n=e.match(r);return n?n.length:0},t.trim=function(e){return e.trim()},t.isEmpty=function(e){return""===e.trim()},t.isPalindrome=function(e){const t=e.split("").reverse().join("");return e===t},t.toTitleCase=function(e){return e.replace(/\b\w/g,(e=>e.toUpperCase()))},t.extractNumbers=function(e){const t=e.match(/\d+/g);return t?t.map(Number):[]},t.removeWhitespace=function(e){return e.replace(/\s/g,"")},t.toLowerCase=function(e){return e.toLowerCase()},t.toUpperCase=function(e){return e.toUpperCase()},t.isValidEmail=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},t.reverseWords=function(e){return e.split(" ").reverse().join(" ")},t.removeSubstring=function(e,t){return e.replace(t,"")},t.isValidUrl=function(e){return/^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/.test(e)},t.isValidPhoneNumber=function(e){return/^\d{3}-\d{3}-\d{4}$/.test(e)},t.toKebabCase=function(e){return e.replace(/\s+/g,"-").toLowerCase()},t.countWords=function(e){return e.split(/\s+/).length},t.padString=function(e,t,r){return e.length>=t?e:e+r.repeat(t-e.length)},t.toSnakeCase=function(e){return e.replace(/\s+/g,"_").toLowerCase()},t.isValidPassword=function(e){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(e)},t.toCamelCase=function(e){return e.split(/\s+/).map(((e,t)=>0===t?e.toLowerCase():r(e))).join("")},t.removeNonAlphanumeric=function(e){return e.replace(/[^a-zA-Z0-9]/g,"")},t.isValidUsername=function(e){return/^[a-zA-Z0-9_-]+$/.test(e)},t.splitString=function(e,t){return e.split(t)},t.isValidCreditCardNumber=function(e){return/^(?:\d{4}-){3}\d{4}$|^\d{16}$/.test(e)},t.removeDuplicates=function(e){return Array.from(new Set(e)).join("")},t.toSlug=function(e){return e.toLowerCase().replace(/\s+/g,"-")},t.isValidHexColor=function(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)},t.maskCreditCardNumber=function(e){const t=e.slice(-4);return"*".repeat(e.length-4)+t},t.generateRandomString=function(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let n=0;n<e;n++){const e=Math.floor(Math.random()*t.length);r+=t.charAt(e)}return r},t.isAlphanumericPalindrome=function(e){const t=e.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();return t===t.split("").reverse().join("")}},906:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseInt=t.parseFloat=t.isNaN=t.isBoolean=t.isFunction=t.isObject=t.isArray=t.isString=t.isInteger=void 0,t.isInteger=function(e){return Number.isInteger(e)},t.isString=function(e){return"string"==typeof e},t.isArray=function(e){return Array.isArray(e)},t.isObject=function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e},t.isFunction=function(e){return"function"==typeof e},t.isBoolean=function(e){return"boolean"==typeof e},t.isNaN=function(e){return Number.isNaN(e)},t.parseInt=function(e,t){return Number.parseInt(e,t)},t.parseFloat=function(e){return Number.parseFloat(e)}},226:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPositive=t.isNegative=t.isZero=t.isEven=t.isOdd=t.isPrime=t.isWhole=t.isFractional=void 0,t.isPositive=function(e){return e>0},t.isNegative=function(e){return e<0},t.isZero=function(e){return 0===e},t.isEven=function(e){return e%2==0},t.isOdd=function(e){return e%2==1},t.isPrime=function(e){if(e<=1)return!1;for(let t=2;t<e;t++)if(e%t==0)return!1;return!0},t.isWhole=function(e){return Number.isInteger(e)},t.isFractional=function(e){return e%1!=0}},590:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.valueCheck=t.typeCheck=t.esFetch=t.object=t.logic=t.compare=t.strings=t.maths=t.array=t.asyncActionCreator=t.asyncThunkMiddleware=t.createStoreWithMiddleware=t.createAsyncSubscriber=t.createSubscriber=t.mergeReducers=t.applyMiddleware=t.createStore=t.Store=t.Core=t.Http=void 0;const a=i(r(662));t.Core=a;const u=s(r(658));t.Http=u.default;const c=s(r(275));t.esFetch=c.default;const f=r(308);Object.defineProperty(t,"Store",{enumerable:!0,get:function(){return f.Store}}),Object.defineProperty(t,"createStore",{enumerable:!0,get:function(){return f.createStore}}),Object.defineProperty(t,"applyMiddleware",{enumerable:!0,get:function(){return f.applyMiddleware}}),Object.defineProperty(t,"mergeReducers",{enumerable:!0,get:function(){return f.mergeReducers}}),Object.defineProperty(t,"createSubscriber",{enumerable:!0,get:function(){return f.createSubscriber}}),Object.defineProperty(t,"createAsyncSubscriber",{enumerable:!0,get:function(){return f.createAsyncSubscriber}}),Object.defineProperty(t,"createStoreWithMiddleware",{enumerable:!0,get:function(){return f.createStoreWithMiddleware}}),Object.defineProperty(t,"asyncThunkMiddleware",{enumerable:!0,get:function(){return f.asyncThunkMiddleware}}),Object.defineProperty(t,"asyncActionCreator",{enumerable:!0,get:function(){return f.asyncActionCreator}});const l=i(r(775));t.array=l;const h=i(r(227));t.maths=h;const d=i(r(48));t.strings=d;const p=i(r(171));t.compare=p;const m=i(r(566));t.logic=m;const y=i(r(556));t.object=y;const b=i(r(906));t.typeCheck=b;const g=i(r(226));t.valueCheck=g}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(590)})()));