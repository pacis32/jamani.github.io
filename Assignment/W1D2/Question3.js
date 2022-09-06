
/**
 * Make a defining table and then write a function that calculates down payment for a home loan based on
following rules. Your function should have a parameter for the cost and return the down payment
amount.
 */
function calcDownpayment(cost){
   
    if(cost<50000){
        return cost*0.05;
    }
    else if( cost <100000) {
        return 2500 +(cost-50000)*0.1;
        
    }
    else if( cost <200000) {
        return 7500 + (cost-100000)*0.15;
          
    }

    else{
        return 20000+ 0.1*(cost-200000);
    }
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));