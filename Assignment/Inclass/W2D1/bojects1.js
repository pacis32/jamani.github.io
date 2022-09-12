/* eslint-disable strict */
 
 
 const numbers = {
one: 1,
two: 22,
three: 333,
four: 444
}
const properties = ["one", "two", "three", "four"];

for(let prop of properties){
    console.log(numbers[prop]);
}