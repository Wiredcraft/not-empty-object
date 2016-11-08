'use strict';

/**
 * Shortcut. Is an object and has it's own properties.
 */
module.exports = function notEmptyObject(obj) {
  if (obj == null) {
    return false;
  }
  if (typeof obj !== 'object') {
    return false;
  }
  if (Object.keys(obj).length <= 0) {
    return false;
  }
  return true;
};
