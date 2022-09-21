/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
/* eslint-disable strict */
function x(){
    let a=7;
    function y(){
        console.log(a);
    }
    return y;
}
const z=x();
console.log(z);

z();


function sum(a){
    return function (b){
        return a+b;
    };
}

console.log(sum(1)(4));

function func() {
    // the local variable x is known to the engine from the beginning of the function,
    // but "uninitialized" (unusable) until let ("dead zone")
    // hence the error
  
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
  
    let x = 2;
  }

  /* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2