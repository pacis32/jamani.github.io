/* eslint-disable require-jsdoc */
//"use strict";
//question01
//clone of arr

// let arr=[1,2,3,4];
// let clonedArr=[...arr];
// console.log(clonedArr);

// //question 2: destructuring of the firdt two elements

// let {var1,var2,...Var3}=arr5;
// 

function scotland(){
    let aberdeen={
        origin: true,
        expression: function (){
            console.log(this);//object
        }
    };
    let innerFn= aberdeen.expression;
    innerFn;//undefined.
    aberdeen.expression();
}

scotland();

// a)what will apear in the console when the above runs?(if the object

// apperas give the name of the object rather than all its properties):
// undefined 
//object or aberdeen

//b) but if is not in strict mode

// window
// aberdeen

//c) rewrite one line of the scotland code to fix the "this" problem by using bind
let innFn= aberdeen.expression.bind(aberdeen);

let innerFn= function (){aberdeen.expression.call(aberdeen)};
