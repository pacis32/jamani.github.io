"use strict";
/* eslint-disable*/
    module.exports = {isVowel,computeSalesCommission,compoundInterest };


//const assert= require('assert');
function isVowel(text){
    if(text=="a"|| text=="e" || text=="i" || text=="o" || text=="u"){
        return true;
    }
    
}

function computeSalesCommission(salaried, sales){
    let commission=0;

    if( salaried===true){
        if(sales<300){
            return 0;
        }
         else if(sales>=300 && sales<500){
            return(commission= sales/100);
        }
        else
        return ( commission= ((sales-500)*2/100)+ 5);;
    
    
    } else {
        if(sales<300){
            return 0;
        }
      else if(sales>=300 && sales <500){
        return(commission= sales/50);
        }
        else { 
         return( commission= ((sales-500)*3/100)+ 10);
        }
    }
}

function compoundInterest(inAmount,intRate,nYearsToCom){

    let  monthlyRate = intRate / 1200;
     let months = nYearsToCom * 12;
    let balance= inAmount;
     for ( i = 1; i <= months; i++ ) {
       let  monthlybalance=monthlyRate*balance;
        balance =balance + monthlybalance;
      }
      return balance.toFixed(2);
 
 }
    

