/* eslint-disable require-jsdoc */
/* eslint-disable strict */
let salaries= {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum=0;
for(let salary in salaries){
    sum += salaries[salary];
}

console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    
}

function multiplyNumeric( obj){
for(let key in obj){
    if(typeof obj[key]== Number){
      obj[key]*=2;
    }
}
}

console.log(multiplyNumeric(menu));