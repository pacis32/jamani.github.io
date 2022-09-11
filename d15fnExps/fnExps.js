

"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} number - any number times 2
 * @returns {number} double the input
 */
    function double(number){
   return number*2;
}

/**
 * 
 * @param {number} number - any number times 100
 * @returns  {number} -100 times the input
 */
  function times100(number){
   return  number*100;
 
  }

/**
 * 
 * @param {arr} arr- array of numbers 
 * @param {function} function - any function that takes a number as paramater
 * @returns  {Array} creates a new array with function mapped to each element
 */
   function myMap(arr, anyfunction){
   let arr1=[];
   for( let element of arr){
    arr1.push(anyfunction(element));
   }

   return arr1;
}








