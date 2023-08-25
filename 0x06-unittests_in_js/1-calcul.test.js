const assert = require('assert');
const calcul = require('./1-calcul');

describe('Test for the function calcul', () => {
  describe('type == "SUM"', () => {
    it('should return 4', () => {
      assert.equal(calcul(2, 2, 'SUM'), 4);
    });
    it('should return 5', () => {
      assert.equal(calcul(2.4, 2.5, 'SUM'), 5);
    });
    it('should return 5', () => {
      assert.equal(calcul(2.4, 2.5, 'SUM'), 5);
    });
    it('should return 5', () => {
      assert.equal(calcul(2.4, 2.5, 'SUM'), 5);
    });
    it('should return 5', () => {
      assert.equal(calcul(2.4, 2.5, 'SUM'), 5);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return 0', () => {
      assert.equal(calcul(2, 2, 'SUBTRACT'), 0);
    });
    it('should return 0', () => {
      assert.equal(calcul(2.4, 2.5, 'SUBTRACT'), 0);
    });
    it('should return 0', () => {
      assert.equal(calcul(2.4, 2.5, 'SUBTRACT'), 0);
    });
    it('should return 0', () => {
      assert.equal(calcul(2.4, 2.5, 'SUBTRACT'), 0);
    });
    it('should return 0', () => {
      assert.equal(calcul(2.4, 2.5, 'SUBTRACT'), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return 1', () => {
      assert.equal(calcul(2, 2, 'DIVIDE'), 1);
    });
    it('should return 1', () => {
      assert.equal(calcul(2.4, 2.5, 'DIVIDE'), 1);
    });
    it('should return 1', () => {
      assert.equal(calcul(2.4, 2.5, 'DIVIDE'), 1);
    });
    it('should return 1', () => {
      assert.equal(calcul(2.4, 2.5, 'DIVIDE'), 1);
    });
    it('should return 1', () => {
      assert.equal(calcul(2.4, 2.5, 'DIVIDE'), 1);
    });
  });
});
