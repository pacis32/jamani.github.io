/* eslint-disable require-jsdoc */
/* eslint-disable strict */
function multiplyEvens(){
    let evensProduct=1;
    for(let  num in arguments){
        if(num %2 ===0){
            evensProduct=evensProduct*num;
        }
     
    }
    return evensProduct;
}
multiplyEvens(1, 6, 3, 4, 17, 2)


function multiplEvens(...argsArr){
    let evensProduct=1;
    for(let  num of argsArr){
        if(num %2 ===0){
            evensProduct=evensProduct*num;
        }
     
    }
    return evensProduct;
}
