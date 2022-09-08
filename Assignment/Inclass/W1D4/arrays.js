"use strict";

/*Write code to create an array named scores and fill it with 5 test scores 10,
20, 30, 40 and 50.
• Now write a function named findAverage, that takes an array as an
argument and return average of the array values.
• Call findAverage function passing array you created in step1 and save the
return result in a variable, average.
• Print the average, it should be 30 for this example.
• Create a second array filled with 10 random values between 0 to 10 and
find the average of the array values.
• Should compute correct average for an array of any size.
*/
/**
 * 
 * @param {*}  
 * @returns 
 */
 const scores = [10,20, 30, 40 , 50];

// eslint-disable-next-line no-unused-vars, require-jsdoc
function findAverage (scores){
    let total =0;
    for (let i = 0; i < scores.length; i++) {
        total  = total+scores[i];  
    }
    return total/scores.length;
}

let res= findAverage(scores);
console.log(res);



