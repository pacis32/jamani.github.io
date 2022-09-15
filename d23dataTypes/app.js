"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, checkSpam,getMaxSubSum, truncate , camelize,extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {

    if (str === "") {
        return "";
      } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
  }

  function checkSpam(str) {
    let newStr = str.toLowerCase();
    return newStr.includes("viagra") || newStr.includes("xxx");
  }


  function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let newStr = str.slice(0, maxlength - 1);
        return newStr + "…";
      } else {
        return str;
      }
  }




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;

}


function camelize(str) {
    if (str === "") {
        return "";
      } else if (str.includes("-")) {
        let strArr = str.split("-");
        let newStr = strArr[0];
        for (let i = 1; i < strArr.length; i++) {
          let newWord = strArr[i].slice(1);
          newStr = newStr + (strArr[i][0].toUpperCase() + newWord);
        }
        return newStr;
    
      } else {
        return str;
      }
  }

  function extractCurrencyValue(money) {
    const moneyValue = money.slice(1);
    return parseInt(moneyValue);
  }