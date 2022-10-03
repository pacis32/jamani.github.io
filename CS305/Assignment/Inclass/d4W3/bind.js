/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
"use Strict"; 

let name = {
    firstName:"Paul",
    lastName:"Amani"};

   let  printFullName=function(homeTown,state){
        console.log(this.firstName+ " " +this.lastName +" "+ "from" + " "+homeTown + " "+ "in" +" "+ state );
    };
// eslint-disable-next-line semi
printFullName.call(name, "kgl","MVK");
printFullName.apply(name, ["kgl","MVK"]);

// function borrowing
let name2={firstName:"Ivy",
    lastName:"Gaby"};

printFullName.call(name2,"Goma", "Kivu");
printFullName.apply(name2,["Goma", "Kivu"]);

let printMyname= printFullName.bind(name2,["Goma"]);
console.log(printMyname);
 printMyname();
