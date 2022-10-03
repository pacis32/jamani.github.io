/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable id-length */
/* eslint-disable no-var */
/* eslint-disable strict */
// if (Math.random() > 0.5) {
//     var x = 1;
//   } else {
//     var x = 2;
//   }
//   console.log(x);
// if (Math.random() > 0.5) {
//     let x = 1;
//   } else {
//     let x = 2;
//   }
//   console.log(x);// error x is not defined


  // closure
  function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  