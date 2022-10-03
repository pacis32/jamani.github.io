"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenAge, includesEvenNum, findSum, findAverage, findMax, findMaxAges, findAverageEven, findAverageOdd }; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
return arr.map(item =>{let newObj ={  age: item.age*2,
    name: item.name
} 
return newObj;
})}


function filterEven(arr) {
    return arr.filter(item => item % 2==0);
}

function filterOver10(arr) {
    return arr.filter(item => item.age > 10);
}

function findEvenNum(arr){
return arr.find(item=>item % 2===0);
}

function findEvenAge(arr){
return arr.find(item =>item.age%2===0);
}

function includesEvenNum(arr) {
    return arr.includes(findEvenNum(arr));
}

function includesEvenAge(arr) {
    return arr.includes(findEvenAge(arr));
}

function findSum(arr) {
    return arr.reduce((sum, initial) => sum + initial, 0);
}

function findAverage(arr) {
    let sum = arr.reduce((sum, initial) => sum + initial, 0);
    return sum / arr.length;
}

function findMax(arr) {
    return arr.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue), -Infinity);
}

function findMaxAges(arr) {
    return arr.reduce((previousValue, currentValue) => {
        if (previousValue.age > currentValue.age) {
            return previousValue;
        } else {
            return currentValue;
        }
    }, { age: 0 });
}

function findAverageEven(arr) {
    let length = 1;
    return arr.filter(item => item.age % 2 === 0).map(item => item.age).reduce((sum, currentValue) => {
        length++
        return sum + currentValue;
    }) / length;
}

function findAverageOdd(arr) {
    let length = 1;
    return arr.filter(item => item.age % 2 !== 0).map(item => item.age).reduce((sum, currentValue) => {
        length++
        return sum + currentValue;;
    }) / length;
}