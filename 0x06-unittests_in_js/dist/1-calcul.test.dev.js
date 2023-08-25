"use strict";

var assert = require('assert');

var calcul = require('./1-calcul');

describe('Test for the function calcul', function () {
  describe('type == "SUM"', function () {
    it('should return 4', function () {
      assert.equal(calcul(2, 2, 'SUM'), 4);
    });
    it('should return 5', function () {
      assert.equal(calcul(2.4, 2.5, 'SUM'), 5);
    });
    it('should return 5', function () {
      assert.equal(calcul(2.4, 2.5, 'SUM'), 5);
    });
    it('should return 5', function () {
      assert.equal(calcul(2.4, 2.5, 'SUM'), 5);
    });
    it('should return 5', function () {
      assert.equal(calcul(2.4, 2.5, 'SUM'), 5);
    });
  });
  describe('type == "SUBTRACT"', function () {
    it('should return 0', function () {
      assert.equal(calcul(2, 2, 'SUBTRACT'), 0);
    });
    it('should return 0', function () {
      assert.equal(calcul(2.4, 2.5, 'SUBTRACT'), 0);
    });
    it('should return 0', function () {
      assert.equal(calcul(2.4, 2.5, 'SUBTRACT'), 0);
    });
    it('should return 0', function () {
      assert.equal(calcul(2.4, 2.5, 'SUBTRACT'), 0);
    });
    it('should return 0', function () {
      assert.equal(calcul(2.4, 2.5, 'SUBTRACT'), 0);
    });
  });
  describe('type == "DIVIDE"', function () {
    it('should return 1', function () {
      assert.equal(calcul(2, 2, 'DIVIDE'), 1);
    });
    it('should return 1', function () {
      assert.equal(calcul(2.4, 2.5, 'DIVIDE'), 1);
    });
    it('should return 1', function () {
      assert.equal(calcul(2.4, 2.5, 'DIVIDE'), 1);
    });
    it('should return 1', function () {
      assert.equal(calcul(2.4, 2.5, 'DIVIDE'), 1);
    });
    it('should return 1', function () {
      assert.equal(calcul(2.4, 2.5, 'DIVIDE'), 1);
    });
  });
});