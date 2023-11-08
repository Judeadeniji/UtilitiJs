/**
 * Returns the value at the specified key in the object.
 *
 * @param {Object} object - The object to retrieve the value from.
 * @param {string} key - The key to retrieve the value for.
 * @returns {*} The value at the specified key in the object.
 */
function getProperty(object: object, key: string): any {
  return object[key];
}

/**
 * Sets the value at the specified key in the object.
 *
 * @param {Object} object - The object to set the value in.
 * @param {string} key - The key to set the value for.
 * @param {*} value - The value to set.
 */
function setProperty(object: object, key: string, value: any): void {
  object[key] = value;
}

/**
 * Returns a boolean indicating whether the object has a property with the specified key.
 *
 * @param {Object} object - The object to check for the property.
 * @param {string} key - The key to check for.
 * @returns {boolean} Whether the object has the specified key.
 */
function hasProperty(object: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, key);
}

/**
 * Returns an array of the object's own enumerable property names.
 *
 * @param {Object} object - The object to get the keys for.
 * @returns {string[]} An array of the object's own enumerable property names.
 */
function getKeys(object: object): string[] {
  return Object.keys(object);
}

/**
 * Returns an array of the object's own enumerable property values.
 *
 * @param {Object} object - The object to get the values for.
 * @returns {*[]} An array of the object's own enumerable property values.
 */
function getValues(object: object): any[] {
  return Object.values(object);
}

/**
 * Returns an array of the object's own enumerable property [key, value] pairs.
 *
 * @param {Object} object - The object to get the entries for.
 * @returns {Array<[string, *]>} An array of the object's own enumerable property [key, value] pairs.
 */
function getEntries(object: object): [string, any][] {
  return Object.entries(object);
}

/**
 * Copies the own enumerable properties of source objects to the target object and returns the target object.
 *
 * @param {Object} object - The target object to extend.
 * @param {...Object} sources - The source objects to copy properties from.
 * @returns {Object} The extended target object.
 */
function extendObject(object: object, ...sources: object[]): object {
  return Object.assign(object, ...sources);
}

/**
 * Creates a shallow copy of the object.
 *
 * @param {Object} object - The object to clone.
 * @returns {Object} A shallow copy of the object.
 */
function cloneShallow(object: object): object {
  return Object.assign({}, object);
}

/**
 * Creates a deep copy of the object.
 *
 * @param {Object} object - The object to clone.
 * @returns {Object} A deep copy of the object.
 */
function cloneDeep(object: object): object {
  return JSON.parse(JSON.stringify(object));
}

/**
 * Calls the callback function for each own enumerable property of the object.
 *
 * @param {Object} object - The object to iterate over.
 * @param {forEachCallback} callback - The function to call for each property.
 * @callback forEachCallback
 * @param {*} value - The value of the current property.
 * @param {string} key - The key of the current property.
 * @param {Object} object - The object being iterated over.
 */
function forEachProperty(object: object, callback: (value: any, key: string, object: object) => void): void {
  for (const [key, value] of Object.entries(object)) {
    callback(value, key, object);
  }
}

/**
 * Calls the callback function for each own enumerable property of the object and returns a new object with the returned values.
 *
 * @param {Object} object - The object to iterate over.
 * @param {Function} callback - The function to call for each property.
 * @param {any} callback.value - The value of the current property.
 * @param {string} callback.key - The key of the current property.
 * @param {Object} callback.object - The object being iterated.
 * @returns {Object} - A new object with the returned values.
 */
function mapProperties(object: object, callback: (value: any, key: string, object: object) => any): object {
  const result: object = {};
  for (const [key, value] of Object.entries(object)) {
    result[key] = callback(value, key, object);
  }
  return result;
}

/**
 * Calls the callback function for each own enumerable property of the object and returns a new object with the properties for which the callback returned a truthy value.
 *
 * @param {Object} object - The object to iterate over.
 * @param {Function} callback - The function to call for each property.
 * @param {any} callback.value - The value of the current property.
 * @param {string} callback.key - The key of the current property.
 * @param {Object} callback.object - The object being iterated.
 * @returns {Object} - A new object with the properties for which the callback returned a truthy value.
 */
function filterProperties(object: object, callback: (value: any, key: string, object: object) => boolean): object {
  const result: object = {};
  for (const [key, value] of Object.entries(object)) {
    if (callback(value, key, object)) {
      result[key] = value;
    }
  }
  return result;
}

interface FailedField {
  field: string;
  reason: string;
}

/**
 * Checks if the structure of two objects are almost identical or partially identical.
 * @param {object} model - The model object to compare.
 * @param {object} template - The template object specifying the desired structure.
 * @returns {boolean} - True if the structure matches; false otherwise.
 * @returns {FailedField[]} - Array of objects indicating the failed fields and the reasons for failure.
 */
function looksLike(model: object, template: object): [boolean, FailedField[]] {
  const failedFields: FailedField[] = [];

/*
  // Check if both inputs are objects
  if (typeof model !== 'object' || typeof template !== 'object') {
    return [false, []];
  }
*/

  // Handle arrays differently
  if (Array.isArray(model) && Array.isArray(template)) {
    if (model.length !== template.length) {
      failedFields.push({ field: 'Array Length', reason: 'Lengths do not match' });
      return [false, failedFields];
    }
    for (let i = 0; i < model.length; i++) {
      const [subResult, subFailedFields] = looksLike(model[i], template[i]);
      if (!subResult) {
        failedFields.push({ field: `Array Index ${i}`, reason: 'Array items do not match' });
        failedFields.push(...subFailedFields);
      }
    }
  } else {
    // Get the keys of the template object
    const templateKeys = Object.keys(template);

    // Check if each key in the template matches the corresponding key in the model
    for (let key of templateKeys) {
      if (!model.hasOwnProperty(key)) {
        failedFields.push({ field: key, reason: 'Field does not exist in the model' });
        continue;
      }

      // Check if the types of the matched properties match exactly or are built-in types
      if (
        (model[key]?.constructor !== template[key] &&
          ![Number, String, Object, Array].includes(template[key]?.constructor as any)) ||
        (template[key] instanceof RegExp &&
          !(template[key] as RegExp).test(model[key]))
      ) {
        failedFields.push({ field: key, reason: 'Field type does not match' });
      }

      if (typeof model[key] === 'object' && typeof template[key] === 'object') {
        // Recursively check the nested structure of the objects
        const [subResult, subFailedFields] = looksLike(model[key], template[key]);
        if (!subResult) {
          failedFields.push(...subFailedFields.map(failedField => ({
            field: `${key}.${failedField.field}`,
            reason: failedField.reason,
          })));
        }
      }
    }
  }

  // If there are failed fields, return them; otherwise, return true
  return [failedFields.length === 0, failedFields];
}

export {
  getProperty,
  setProperty,
  hasProperty,
  getKeys,
  getValues,
  getEntries,
  looksLike,
  extendObject,
  cloneShallow,
  cloneDeep,
  forEachProperty,
  mapProperties,
  filterProperties,
};
