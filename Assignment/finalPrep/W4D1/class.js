/* eslint-disable require-jsdoc */
"use strict";
class Squares{
    constructor(side){
        this.side=side;
    
    }
    calArea(){
        console.log(this.side*this.side);
    }
    
}

let square1= new Squares(5);
 square1.calArea();


 // using proto

 function area(){
    return this.side *this.side;
 }

 const square2= {//object literal
    side:5
 }

 square2._proto_.area= area;

 function Squares(side){
    this.side=side;
 }

 square2.prototype= area;
