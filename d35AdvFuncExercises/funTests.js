"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myMap(arr, func) {
//IMPLEMENTATION NEEDED
let newArr=[];
for(let element of arr){
   newArr.push(func(element));
}
return newArr;

}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myFilter(arr, func) {
//IMPLEMENTATION NEEDED
let newArr=[];
for(let element of arr){
    if(func(element)===true){
        newArr.push(element);
    }}
    return newArr;
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
    let value = initialValue;
    for(element of arr){
        value = func(value,element);
    }
    return value;

}