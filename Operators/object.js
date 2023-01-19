function getProperty(object, key) {
  // Returns the value at the specified key in the object.
  return object[key];
}

function setProperty(object, key, value) {
  // Sets the value at the specified key in the object.
  object[key] = value;
}

function hasProperty(object, key) {
  // Returns a boolean indicating whether the object has a property with the specified key.
  return Object.prototype.hasOwnProperty.call(object, key);
}

function getKeys(object) {
  // Returns an array of the object's own enumerable property names.
  return Object.keys(object);
}

function getValues(object) {
  // Returns an array of the object's own enumerable property values.
  return Object.values(object);
}

function getEntries(object) {
  // Returns an array of the object's own enumerable property [key, value] pairs.
  return Object.entries(object);
}

function extendObject(object, ...sources) {
  // Copies the own enumerable properties of source objects to the target object and returns the target object.
  return Object.assign(object, ...sources);
}

function cloneShallow(object) {
  // Creates a shallow copy of the object.
  return Object.assign({}, object);
}

function cloneDeep(object) {
  // Creates a deep copy of the object.
  return JSON.parse(JSON.stringify(object));
}

function forEachProperty(object, callback) {
  // Calls the callback function for each own enumerable property of the object.
  for (const [key, value] of Object.entries(object)) {
    callback(value, key, object);
  }
}

function mapProperties(object, callback) {
  // Calls the callback function for each own enumerable property of the object and returns a new object with the returned values.
  const result = {};
  for (const [key, value] of Object.entries(object)) {
    result[key] = callback(value, key, object);
  }
  return result;
}

function filterProperties(object, callback) {
  // Calls the callback function for each own enumerable property of the object and returns a new object with the properties for which the callback returned a truthy value.
  const result = {};
  for (const [key, value] of Object.entries(object)) {
    if (callback(value, key, object)) {
      result[key] = value;
    }
  }
  return result;
}

// object-utils.js

export {
  getProperty,
  setProperty,
  hasProperty,
  getKeys,
  getValues,
  getEntries,
  extendObject,
  cloneShallow,
  cloneDeep,
  forEachProperty,
  mapProperties,
  filterProperties,
};
