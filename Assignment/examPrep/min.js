/* eslint-disable require-jsdoc */
/* eslint-disable strict */
let minArr=arr=>{
    let minValue=Infinity;
    for(let item of arr ){
        if(item<minValue){
            minValue=item;
        }
    }
    return minValue;
};
console.log(minArr([19,2,30,4,5]));
// using reduce()
function minValue(arr) {
    return arr.reduce((min, val) => min < val ? min : val);
  }

  console.log(minValue([19,20,30,4,5]));

