"use strict";

var Utils = require('./utils');

var sendPaymentRequestToApi = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  var totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log("The total is: ".concat(totalCost));
};

module.exports = sendPaymentRequestToApi;