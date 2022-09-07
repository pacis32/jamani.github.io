/* eslint-disable*/
/* import from isVowel.js module */

const functionsModule = require("./functions.js");
const isVowel = functionsModule.isVowel;
const computeSalesCommission= functionsModule.computeSalesCommission;
const compoundInterest= functionsModule.compoundInterest;

module.exports = {isVowel, computeSalesCommission,compoundInterest };

const { it } = require("node:test");

const assert= require('assert');

describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });

   describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });

   describer("test of compoundInterest", function(){
    it("test initial amount 100, interest rate 10, and number of Years to compound 1", function(){
        assert.strictEqual(compoundInterest(100, 10,1),110.47)
    });
    it("test initial amount 100000, interest rate 5, and number of Years to compound 10 ", function(){
        assert.strictEqual(compoundInterest(100000, 5,10),16470.09)
    });


   });


  