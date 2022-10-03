/* eslint-disable require-jsdoc */
"use strict";
class Service {
    constructor(){
      this.numbers = [1,2,3];
      this.token = "token";
    }
    
//     doSomething(){
//       setTimeout(function doAnotherThing(){
//         this.numbers.forEach(function log(number){
//         //Cannot read property 'forEach' of undefined
//             console.log(number);
//             console.log(this.token);
//         });
//       }, 100);
doSomething(){
    setTimeout(function doAnotherThing(){
       this.numbers.forEach(function log(number){
          console.log(number);
          console.log(this.token);
       }.bind(this));
     }.bind(this), 100);
   }
 
   }
//************ use of that/self */
//    doSomething(){
//     let that = this;
//     setTimeout(function doAnotherThing(){
//        that.numbers.forEach(function log(number){
//           console.log(number);
//           console.log(that.token);
//        });
//      }, 100);
//    }
//*********  Arrow function */
// doSomething(){
//     setTimeout(() => {
//       this.numbers.forEach(number => {
//           console.log(number);
//           console.log(this.token);
//        });
//      }, 100);
//    }


// function doSomething(){
//     setTimeout(function doAnotherThing(){
//       numbers.forEach(function log(number){
//          console.log(number);
//          console.log(token);
//        });
//      }, 100);
//    }
  
   let service = new Service();
   service.doSomething();


  // "this loses contex when the method is used as callback"

  class Service1 {
    constructor(){
      this.token = "token"; 
    }
    
    doSomething(){
      console.log(this.token);//undefined
    } 
  }
  let service1 = new Service();