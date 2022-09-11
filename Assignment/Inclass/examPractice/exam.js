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

  