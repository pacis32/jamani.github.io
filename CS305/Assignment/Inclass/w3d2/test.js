/* eslint-disable require-jsdoc */
/* eslint-disable strict */
// const arr1234 = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr1234;
// console.log(a);
// console.log(b);
// console.log(c);

// const sample = [1,2,3];
// const mapResult = sample.map(function(val, index, array) {
//     console.log('val :', val, 'index :', index, 'array :', array);
//     return (val * 2);
// });

// function makeCounter() { 

//     let count = 0;   
  
//     return function() { return count++; };
  
//   }


//   function makeCounter() {
//     let counter = 0;

//     return function () {
//         return counter += 10;
//     };

    
// }
// const myCount= makeCounter();

// console.log(myCount());

function makeCounter(initValue) {

    let counter = initValue;

    let increment = function(val) {

        counter += val;
        console.log(counter);
    };

    return increment;
}

let myCount = makeCounter(10);

console.log(myCount(1));


