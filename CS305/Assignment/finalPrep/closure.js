/* eslint-disable require-jsdoc */
/* eslint-disable strict */
const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  })();
  
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.

  function outer() {
    const x = 5;
    if (Math.random() > 0.5) {
      const y = 6;
      return () => console.log(x, y);
    }
  }
  
  outer()(); // logs 5 6
  