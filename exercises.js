"use strict";
/*eslint-disable */

// function area() { 
//     return this.side * this.side }
// const square1 = {
//     side: 5,
// };
// square1.__proto__ = {
//      area: area 
//     }

// function Square(side) {
//     this.side = side
// };
// Square.prototype = square1.__proto__;

// class Square2 {
//     constructor(side) {
//         this.side = side;
//     }
//     area() { return this.side * this.side }
// }



// console.log("expect 25: ", square1.area())
// console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
// const constSquare1 = new Square(7);
// console.log("expect 49: ", constSquare1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
// const classSquare = new Square2(10);
// console.log("expect 100: ", classSquare.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);

// let array = [1, 2, 3, 4, 5];
// console.log(array.join("$"))


// function makeCounter() {
//     let count = 0;
//     return function innerfunc() {
//         count++;
//         return count;
//     }
// }

// let count1 = makeCounter();
// let count2 = makeCounter();
// count1();
// count2();
// count1();
// console.log(count1());
// console.log(count2());

// function a() {
//     console.log(x); // consult Global for x and print 20 from Global
// }
// function b() {
//     const x = 10;
//     a(); // consult Global for a 
// }
// const x = 20;

// console.log(b());
// let arr1 = [2, 3, 4,];
// let [num1, num2, num3] = arr1;
// let max = Math.max(num1, num2, num3)
// console.log(max);

// function foo() { console.log(this); }
// const bob = {
//     log: function () {
//         console.log(this);
//     }
// };
// console.log(this); // this in global scope is window object (or {} in Node)
// foo(); //foo() is called by global window object
// bob.log();//log() is called by the object, bob 

// const y = { a: 1, b: 2, add: () => { return this.a + this.b } }
// console.log("NaN:", y.add()); //NaN
// let plus = () => {
//     this.a = this.a + 1;
//     return this.a;
// };
// console.log(plus())

// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [john, pete];
// function map(arr) {
//     return arr.map((item, index) => {
//         let newObject = {};
//         newObject.fullName = item.name + " " + item.surname;
//         newObject.id = index + 1;
//         return newObject;
//     })
// }
// console.log(map(people));

// function countdown(from) {
//     let count = from - 1;
//     let timerId = setInterval(function () {
//         if (count >= 0) {
//             console.log(count);
//             count--
//         } else {
//             clearInterval(timerId);
//         }
//     }, 1000);
//     return from;
// }
// console.log(countdown(2));

// function makeSecureStack() {
//     const array = [];
//     return function (element, operation) {
//         if (operation === "push") {
//             array.push(element);
//             return;
//         } else if (operation === "pop") {
//             return array.pop();

//         } else {
//             return [...array];
//         }
//     }
// }
// const secure = makeSecureStack();
// secure(1, "push");
// secure(2, "push");
// secure(3, 'push');
// console.log("expect 3:", secure(null, "pop"));
// console.log("expect undefined: ", secure(55, "push"));
// console.log("expect [1,2,55: ", secure(null, "view"));

// function Incrementer(start) {
//     this._value = start,
//         this.increment = function (num) {
//             this._value += num;
//             return this._value;
//         }
//     this.decrement = function (num) {
//         this._value -= num;
//         return this._value;
//     }
// }
// let increment = new Incrementer(100);
// console.log(increment.increment(10));
// console.log(increment.increment(10));
// console.log(increment.decrement(10))

// function a() {
//     console.log("this in function a: ", this); // undefined strict/ global not strict
//   }
  
  // const b = {
  //   dog: 'fido',
  //   log: function () {
  //     console.log("this in method/function log: ", this); //object { dog: 'fido', log: [Function: log] } to all
  //   }
  // }
  
  // console.log("this in console.log: ", this); // {} all
  // a();
  // b.log();
  // let mylog = b.log;
  // mylog(); // undefined strict mode / global no strict

  // let john = {
  //   name: "John",
  //   surname: "Smith",
  //   age: 10
  // };
  // let pete = {
  //   name: "Pete",
  //   surname: "Hunt",
  //   age: 20
  // };
  
  // let users = [john, pete];
  
  /* Use the filter function to filter the users array for all users
   older than age 10 
   [
    { fullName: "Pete Hunt", id: 2 }
  ]
  */
  //Hint: recall bracket versus dot notation
  
  // let usersMapped = users.filter(user => (
  //   user.age > 10 ));
  // //OR
  // //debugger;
  // const mapped = users.filter(function(user) {
  //   return user.age > 10; });
  // console.log(usersMapped);
  // console.log(mapped);

//   function findTrasactionsByAmount(bank){
//     let outputArr = [];
//     for(let customer of bank.transactionsDB){
//         let amountGreaterThan20 = customer.customerTransactions.find(amount => amount > 20);
//         if(amountGreaterThan20 != null){
//             outputArr.push({custId: customer.customerId, amount: amountGreaterThan20});
//         }
//     }
//     return outputArr;
// }

const bank = { transactionsDB: [], };

bank.transactionsDB = [

    { customerId: 1, customerTransactions: [10, 50, -40] },

    { customerId: 2, customerTransactions: [10, 10, -10] },

    { customerId: 3, customerTransactions: [25, -5, 55] }];

//return array with all customers who had deposits greater than 20. 

//array should contain objects with customerId and the transaction amount for each such transaction

// function findTransactionsByAmount(bank) {

//     const foundDepositsArray = [];

//     for (const customerObj of bank.transactionsDB) {

//         //now loop through this customers transactions and save any that are > 20

//         for (const transAmount of customerObj.customerTransactions) {

//             if (transAmount > 20) {

//                 foundDepositsArray.push({ custId: customerObj.customerId, amount: transAmount });
//             }
//         }
//     }

//     return foundDepositsArray;
// }


// console.log("expect [{custId: 1, amount: 50}, {custId: 3, amount: 25}, {custId: 3, amount 55}] : ",

//     findTransactionsByAmount(bank));

// const me = {
//   first: 'Tina',
//   last: 'Xing',
//   getFullName: function() {
//       console.log('this is: ', this);
//     console.log( this.first + ' ' + this.last);
//   }
// }

// me.getFullName();
// console.log("me is: ", me);
// console.log("me.getFullName is: ", me.getFullName);
// setTimeout(me.getFullName.bind(me), 1000);

// function area(){
//   console.log(this);   //  _____________________________console.log(this.side) ______________________________________
//   return this.side * this.side;
//   }
//   const square1 = {side: 5,  area: area};
//   console.log(area.bind(square1)()); 

// 

const abc = {
  a: 1,
  b: 2,
  add: function() {
    console.log("1+2 = 3?", this.a + this.b);
  }
}
console.log("regular call to add: ");
abc.add();
/* use add inside a timeout */
console.log("wait 2 seconds to call: ");
setTimeout(abc.add, 2000);