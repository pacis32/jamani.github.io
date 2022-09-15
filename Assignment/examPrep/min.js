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

// using reduce()

