/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
//********* 8 */
"use strict";
/**
 * 
 * @param {array} arr - array of any numbers
 * @returns {number} - number of loged even numbers
 */
// eslint-disable-next-line no-unused-vars, require-jsdoc
function logEven(arr){

    let count=0;
    for (let variable of arr) {    
    {
       if(variable% 2===0){
           console.log(variable);
           count++;
        }
    }
    return count;
}
}
console.log(logEven([1,2,3,4]));


//*********8 */

let abc= 123;
function myfun(xyz){
    xyz= xyz%100;
    console.log(xyz);
    abc= xyz+abc;
    return xyz+abc;
    console.log(xyz);
}
