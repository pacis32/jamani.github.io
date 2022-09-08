/* eslint-disable*/
/* import from isVowel.js module */



const functionsModule = require("./functions.js");
const isVowel = functionsModule.isVowel;
const computeSalesCommission= functionsModule.computeSalesCommission;
const compoundInterest= functionsModule.compoundInterest;
const  calcDownpayment= functionsModule.calcDownpayment;
const sumDigits =  functionsModule.sumDigits;
const multDigits = functionsModule.multDigits;
const convertFahrenheit = functionsModule.convertFahrenheit; 
const alcDistance = functionsModule.alcDistance;


const assert= require("assert");


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

   describe("test of compoundInterest", function(){
    it("test initial amount 100, interest rate 10, and number of Years to compound 1", function(){
        assert.equal(compoundInterest(100, 10,1),110.47);
    });
    it("test initial amount 100000, interest rate 5, and number of Years to compound 10 ", function(){
        assert.equal(compoundInterest(10000, 5,10),16470.09);
    });
   }); 

   describe("test of calcDownpayment", function(){
    it("test cost ", function(){
        assert.equal(calcDownpayment(40000),2000);
    });
 
    it("test cost ", function(){
        assert.equal(calcDownpayment(50000),2500);
    });

    it("test cost ", function(){
        assert.equal(calcDownpayment(100000),7500);
    });
 
    it("test cost ", function(){
        assert.equal(calcDownpayment(250000),25000);
    });

   });

   describe("test sumdigits", function(){
    it(" test the sum of the digits of a  given number",function(){
        assert.equal(sumDigits(1234),10);
    });
    it(" test the sum of the digits of a  given number",function(){
        assert.equal(sumDigits(102),3);
    });

    it(" test the sum of the digits of a  given number",function(){
        assert.equal(sumDigits(8),8);
    });

   });

   describe("test the multiplication of digit of a number", function(){
    it(" test the product of the digits of a  given number",function(){
        assert.equal(multDigits(1234),24);
    });
    it(" test the product of the digits of a  given number",function(){
        assert.equal(multDigits(102),0);
    });

    it(" test the product of the digits of a  given number",function(){
        assert.equal(multDigits(8),8);
    });

   });

   describe("test conversion from Fahrenheit to celcuis  ", function(){
    it(" test the conversion of fahrenheit to celcius degrees",function(){
        assert.equal(convertFahrenheit(32),0);
    });
    it(" test the conversion of farhrenheit  to celcius degrees",function(){
        assert.equal(convertFahrenheit(0),-17.7778);
    });

    it(" test the conversion of farhrenheit to celcius degrees",function(){
        assert.equal(convertFahrenheit(212),100);
    });

   });

   describe("test calcDistance ", function(){
    it(" test co-ordinates of two points into the distance btn these two points",function(){
        assert.equal(alcDistance(0,0,5,5),7.07);
    });
    
   });





  
  