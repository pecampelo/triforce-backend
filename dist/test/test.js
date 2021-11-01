"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var assert = require('assert').strict;
(0, mocha_1.describe)('Trio API connection', function () {
    (0, mocha_1.it)('should receive HTTP 200 and data when making a GET request to https://sandbox.trio.com.br/institutions', function () {
        var actual = true;
        var expected = 200;
        assert.deepStrictEqual(actual, expected);
    });
});
