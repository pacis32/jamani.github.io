/* eslint-disable for-direction */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
"use strict";

/*let start = 0;
// eslint-disable-next-line require-jsdoc
function someFun(num) {
 let jordan = 23;
 if (num >= 0) {
 num = Math.sqrt(num);
 }
 start = jordan + num;
 console.log(num + " " + Jordan + " " + start); // undefined
return num;
}
console.log(start); //___undefined___________________;
console.log(someFun(100)); //__undefined____________________;
console.log(start); //_______undefined_______________;
console.log(jordan); //______undefined________________; */


// eslint-disable-next-line require-jsdoc, id-length
// function hi(name){
//     return "Hi " + name;
// }
// let goodBye= function(){
//     return "Good Bye";
// };
// alert(hi("Developer","Welcome"));
// alert(goodBye("Developer")); 
// alert(goodBye); 
// alert(goodBye()); 


//************************** */

//12

// eslint-disable-next-line require-jsdoc
// function getSix() { 
//     return 6;
// }
// const f1 = getSix();// 6
// const f2 = getSix; // undefined:error 
// const f3 = f1;//6
// const f4 = f2();//6
// const f5 = f1();// undefined

//******************************** sort array */

// function sortThis(num1,num2,num3){
  
    

// }
// let r= sortThis(5,2,3);
// console.log(r);

function foo(bat) {
    if (bat) {
      bat = console.log("bat");
      return bat;
    }
    const long = console.log("short");
    return long;
  }
  console.log(foo());
  console.log(foo(""));
  console.log(foo("false"));

  function sayHi(name) {

    console.log("Hi " , name);
  
    return "Bye " + name;
  
  }
  
  const sayHiReturn = console.log(sayHi() );

  // eslint-disable-next-line no-constant-condition
  if ("false") {
    console.log(0);
  }
  
   else 
   console.log(1);

   function myFun(){

    console.log("Oh happy day!");
  
  }
  
  const returnVal = myFun();


  function bar(arg1, arg2, arg3, arg4) {
    if (arg1 === true) return arg3 (arg2) ; 
    else return arg4 (arg2);  
  }
  console.log(bar ( true, 1, fn1, fn2)); //101 
  console.log(bar ( false, 2, fn1, fn2)); //20
  
  function fn1(num){
    return num + 100;
  }
  function fn2(num){
    return num * 10;
  }

  function someThing(arr){
    let product=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]=== arr[i+1]){
         product*=arr[i];
        }
    }
    return product;
  }

  const numbers = [1, 5, 18, 2, 77, 108];

console.log(numbers.filter(isEven));// 18,2,108
console.log(numbers.find(isEven));//18
console.log(numbers.findIndex(isEven));//2

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
const obj3 = obj2; 

console.log(obj1 === obj2);// false
console.log(obj1 === obj3);//fase
console.log(obj3 === obj2);//true
console.log(obj1 == obj2);//false
console.log(obj1 == obj3);//false
console.log(obj2 == obj3);//true
console.log(obj3.a === obj2.a);//true
console.log(obj3.a === obj1.a);//true

const reversed = "i am totality".split("").reverse().join("");
console.log(reversed);

////////////////////////
function reverseAll(str){
  const strArray = str.split("");
  strArray.reverse();
  return strArray.join("");
 }
 
 console.log(reverseAll("Hi how are you!"));

 ///////////////////////
 function isSumBalanced(arr) {
  let sumE = 0;
  let SumO = 0

  if (arr.length === 0) {

    return false

  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {

      sumE += arr[i];

    } else if (arr[i] % 2 !== 0) {

      sumO += arr[i];

    } else if (sumE === sumO) {

      return true;

    } else {

      return false;

    }

  }}

  ///////////////

  const arr1 = [1, 10];
const arr2 = [1, 10];
const arr3 = arr1;

console.log(arr1 === arr2); //__False_____________
console.log(arr2 === arr3);  //__False______________
console.log(arr1 === arr3); //___True____________
console.log(arr1 == arr2); //____false___________
console.log(arr2 == arr3);  //__false______________
console.log(arr1 == arr3); //___true____________
console.log(arr2[1] == arr3[1]);  //__true_____________
console.log(arr2[1] === arr3[1]); //__true_____________

/////////////////////////

/* write a function to return  sum of the first elements of the inner arrays */
let arr = [[1, 2], [3, 4], [5, 6]]
function sumFirst(arr){
  let sum = 0;
  for (const element of arr){
   sum += element[0];
  }
  return sum;
}

console.log(sumFirst(arr));

//**
 // Question 5

 /*function cat(abac){
  if(!abc){
    abc= console.log("abc"); // abc
    return abc;
  }
  const xyz= console.log("xyz");// not reacheable
  return xyz;
 }
 console.log(cat());//undefined 
*/
 // question 6

 let nums="4123".split("");//4,1,2,3
 nums.sort((x,y)=> x-y);
 console.log(nums.join("."));


 



