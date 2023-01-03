const assert = require('assert');
const { Before, Given, When, Then } = require('cucumber');
const Calculator = require('../../lib/additional');

let calculator;

    Given('the number {int} and {int}', function (int, int2) {
        calculator = new Calculator(int, int2);
    });

    When('they are added together', function () {
        calculator.add();
    });

    Then('the result should be {int}', function (int) {
        assert.equal(calculator.getResult(), int);
    });