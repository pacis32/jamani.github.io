/* eslint-disable strict */
// ➢ reduce the array to the product of the numbers (“expect 120”)
//reduce the array to the max of the numbers (“expect 5”)


let arr = [1, 2, 3, 4, 5];

let result= arr.reduce(function(product,curent){
    return product*curent;
},1);
console.log(result);

// find max

const max= arr.reduce ((max,current) => {current >max ? max :current;},1);
console.log(max);

    