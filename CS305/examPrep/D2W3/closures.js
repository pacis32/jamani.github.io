/* eslint-disable no-var */
/* eslint-disable require-jsdoc */
"use strict";
function makeCount(){
    let count=0;
    let innerFunc= function(){
        return count=count +1;
    };

    return innerFunc;
}

const counter1= makeCount();
const counter2= makeCount();
counter1();
counter1();

console.log("should be 3" , counter1());
console.log("should be 1" , counter2());

const counter = (function() {
    let privateCounter = 0;
    function changeBy(val) { // inner 
      privateCounter += val;
    }
    return {
      increment: function() { //inner
        changeBy(1);
      },
      decrement: function() { // inner
        changeBy(-1);
      },
      value: function() {   // inner
        return privateCounter;
      }
    };   
  })();
  
  console.log(counter.value()); // 0
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2
  counter.decrement();
  console.log(counter.value()); // 1