function sumDigits(number){
    let sum=0;
    while(number){
        sum+=number%10;
        number=Math.floor(number/10);
    }
    return sum;
}
console.log(sumDigits(134));

function multDigits(number){
    let product=1;
    while(number){
        product*=number%10;
        number=Math.floor(number/10);
    }
    return product;
}
console.log(multDigits(134));
