"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests

/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Combine several objects into a single object
*/

function copyArray(arr){
 
return [...arr];
}

function concat(arr1, arr2){

 return [...arr1,...arr2];
}

function findMin(...numbers) {
   
  return Math.min(...numbers); 

}



function combineObjs(obj1, obj2){
 return {...obj1,...obj2};


}