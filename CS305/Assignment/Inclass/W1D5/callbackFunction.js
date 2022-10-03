/**
 * 
 * @param {function} cube - fct to cube
 * @param {number} arg - an number
 * @returns -number
 */
"use strict";

function myCallBack(cube,arg){
   return cube(arg);
}


console.log(myCallBack(function cube(num){
    return num*num*num;
}, 10));