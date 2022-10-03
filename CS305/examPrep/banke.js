/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

"use strict";
const bank = {    transactionsDB: [],};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [25, -5, 55] }];
//return array with all customers who had deposits greater than 20.  
//array should contain objects with customerId and the transaction amount for each such transaction
///console.log("expect [{custId: 1, amount: 50}, {custId: 3, amount: 25}, {custId: 3, amount 55}] : ",
//findTransactionsByAmount(bank)); */

// eslint-disable-next-line semi
 


function helpfind(arr){

    return arr.filter((item)=>item.customerTransactions>20);
}
 




