// function sum(nos){
//     let sum=0;
//     for (var i = 0; i < nos; i++) {
//         sum+=i;
        
//     }
//     return sum;
// }

// sum(2);

function factorial(n){
 //base case
 if(n===0){
    return 1;

 }
 else {
    return n*factorial(n-1);
 }

 }

 let r=factorial(5);
 console.log(r);


function fibo(n){
    if(n<2){
        return n;
    }
    else
    return fibo(n-1)+fibo(n-2);
}

console.log(fibo(6));

//sum of element of the array

// function sumOfnos(arr){
//     if(arr.length==""){
//         return;
//     }
//     let ele =arr.pop();
//     else{
//         return  ele + sumOfnos(nos)
//     }
   
//     }


function show(){
    console.log("hi")
}
show();

// find occurence
var countOccurrence = function(array, value) {
    if (array.length === 0) return 0;
    if (array[0] === value) return 1 + countOccurrence(array.slice(1, array.length), value);
    return countOccurrence(array.slice(1, array.length), value);
  };