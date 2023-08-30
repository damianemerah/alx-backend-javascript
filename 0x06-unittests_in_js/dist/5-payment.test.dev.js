"use strict";

var sinon = require('sinon');

var _require = require('chai'),
    expect = _require.expect;

var sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  var bigBrother;
  beforeEach(function () {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });
  afterEach(function () {
    bigBrother.log.resetHistory();
  });
  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', function () {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.log.calledWith('The total is: 120')).to.be["true"];
    expect(bigBrother.log.calledOnce).to.be["true"];
  });
  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', function () {
    sendPaymentRequestToApi(10, 10);
    expect(bigBrother.log.calledWith('The total is: 20')).to.be["true"];
    expect(bigBrother.log.calledOnce).to.be["true"];
  });
});