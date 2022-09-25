/* eslint-disable require-jsdoc */
"use strict";

let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Hello, undefined!

  // wrapper

  let user1 = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(function() {
    user1.sayHi(); // Hello, John!
  }, 1000);

  //or

  setTimeout(()=>user.sayHi(),100);

  //** bind 
  let user3 = {
    firstName: "John"
  };
  
  function func() {
    console.log("using bind "+ " "+this.firstName);
  }
  
  let funcUser = func.bind(user3);
  funcUser(); // John

   