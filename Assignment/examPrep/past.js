/* eslint-disable require-jsdoc */
"use strict";
function Player(name, age){
    this.age=age;
    this.name=name;
}

Player.prototype.play=function (){
    return this.name + "is playing";
}

fred= new Player("Fred",12);
console.log(fred.age===12);//true
console.log(fred._proto_.age);//false
console.log(fred._proto_.name==="Fred");
console.log(fred.prototype.play()==="Fred")// false
pete= new Player("pete",15);

console.log(pete._proto_===fred._proto_);//true
