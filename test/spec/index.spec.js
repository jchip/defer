"use strict";

const makeDefer = require("../..");
const { asyncVerify, expectError } = require("run-verify");

describe("defer", function() {
  it("should return defer object that can resolve", () => {
    const defer = makeDefer();
    setTimeout(() => defer.resolve("hello"), 100);
    return defer.promise.then(x => expect(x).equals("hello"));
  });

  it("should return defer object that can reject", () => {
    const defer = makeDefer();
    setTimeout(() => defer.reject(new Error("oops")), 100);
    return asyncVerify(expectError(() => defer.promise), r => {
      expect(r).to.be.an("Error");
      expect(r.message).equals("oops");
    });
  });
});
