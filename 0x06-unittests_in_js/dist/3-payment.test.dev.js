"use strict";

var sinon = require('sinon');

var Utils = require('./utils');

var _require = require('chai'),
    expect = _require.expect;

var sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', function () {
    var bigBrother = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be["true"];
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
});