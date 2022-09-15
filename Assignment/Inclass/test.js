"use strict";
/*eslint-disable */
/**
 * 
 * @param {number} num 
 * @param {*number} poer 
 */


 /*function findLongestWord(arr){
   let longest=arr[0];
   for(let i=0; i<arr.length; i++){

       if(arr[i].length < longest.length){
           max=arr[i];
       }
       return longest;
   }
   
}


function longestword (str){
   if(str == undefined || str == null)
      return null;
   var w = str.split(" ");
   var result = null;
   let count = 0;
   for(var i = 0; i < w.lenght; i++){
      if(w[i].length > count){
          count = w[i].lenght;
          result = w[i];
      }
   }
   return result;
}
let r =longestWord(["amani", "amatama","huku"]);
console.log(r);


function countElement(arr){
   let count=0;
   for(let i=0; i<arr.length;i++){
      count=count+arr[i];
    console.log(arr[i]);
   }
   return count;
}
*/


// /* write a function, sumPoints, to get the total points across all players */

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect 10: ", sumPoints(players));
 
