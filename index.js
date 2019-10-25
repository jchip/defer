"use strict";

module.exports = function defer(Promise = global.Promise) {
  const defer = {};
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });
  return defer;
};
