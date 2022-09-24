/* eslint-disable require-jsdoc */
/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
"use strict";
//Array destructuring
let arr=["John","Smith"];

let [firstName,surName]= "John Smith".split(" ");

console.log(firstName);
console.log(surName);

// ignoring element

// second element is not needed
let [fName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title);

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith

// object destructuring 
const employee ={
    id:1,
    age:2.8,
    name:"ivy",
    department:"UI/Ux",
    address:{
         
        city:"Fairfield",
        country:"USA"
        
    }
}

const {name,age}=employee;
//console.log(name+" " +age);
// function destructuring 

function displayEmployee({age,name}){
    console.log(`the Employee name is" +employee.name + "and he/her age is" + employee.age`);
}


