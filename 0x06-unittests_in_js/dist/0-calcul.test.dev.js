"use strict";

var calculateNumber = require('./0-calcul.js');

var assert = require('assert');

describe('calculateNumber', function () {
  it('should return 4', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 5', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 0', function () {
    assert.strictEqual(calculateNumber(1.4, 3.2), 4);
  });
  it('should return 5', function () {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });
  it('should return 5', function () {
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
  });
});