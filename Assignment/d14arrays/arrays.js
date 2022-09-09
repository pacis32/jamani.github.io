"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply ,findLongestWord:findLongestWord,reverseArray,reverseArrayInPlace,scoreExams, generateArray}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if(a>b && a>c)
    return a;
    else if ( b>c) {
        return b;
    }
    else {
        return c;
    }

}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for ( const number of arr) {
    tot*=number;
}
    return tot;

}
/**
 * 
 * @param {array} arr - array of string
 * @returns {length} -length of the longest array
 */
function findLongestWord(arr){
    let longestWord="";
    for(let i=0; i<arr.length; i++){

        if(arr[i].length > longestWord.length){
            longestWord=arr[i];
        }
    }
    return longestWord.length;
}


/**
 * 
 * @param {array} arr -array 
 * @returns {array}- revesed array
 */
 function reverseArray ( arr ){
    let arr2 = [];

    for (let val of arr) {
        arr2.unshift(val);
    }

    return arr2;
}



/**
 * 
 * @param {array} arr -array of elements
 * @returns {array} - original array reversed
 */
 function reverseArrayInPlace( arr ){

    let newArr= arr.splice(0);
    
    for (let i =  newArr.length-1; i >= 0; i--) {
      arr.push(newArr[i]); 
    }
 
    return arr;
 }
  
   



/**
 * 
 * @param {array} studentAnswers - multidimentional array of students 
 * @param {array} correctAnswers - array of correct answers
 * @returns {array} - array of correct answers for each student
 */
function scoreExams(studentAnswers, correctAnswers) {
    let scoreArray = [];
    let studentScore = 0;

    for (let array of studentAnswers) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === correctAnswers[i]) {
                studentScore += 1;
            }
        }
        scoreArray.push(studentScore);
        studentScore = 0;
    }
    return scoreArray;
}

/**
 * 
 * @param {number} num1 -first number
 * @param {number} num2 - second number
 * @returns {array} - multidimensial array
 */
function generateArray(num1, num2) {
    let finalArray = [];
    let count = 1;
    for (let i = 1; i <= num1; i++) {
        finalArray.push([]);
    }
    for (let j = 0; j < finalArray.length; j++) {
        // eslint-disable-next-line id-length
        for (let k = 0; k < num2; k++) {
            finalArray[j].push(count);
            count += 1;
        }
    }
    return finalArray;
}