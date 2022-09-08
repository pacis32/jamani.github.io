"use strict";
/*eslint-disable */
/**
 * 
 * @param {number} num 
 * @param {*number} poer 
 */


 const foo = console.log("hello");

 function write2file(content) {
    fsys.writeFile("./testWrite.txt", content, function () {});
 }
    const returnVal = write2file( Math.max(1, 2, 3));