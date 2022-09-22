"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */


function askPassword(ok, fail, password) {
        if (password == "rockstar") ok();
        else fail();
      }
      
      let user = {
        name: 'John',
      
        login(result) {
          console.log( this.name + (result ? ' logged in' : ' failed to log in') );
        }
      };
      
      askPassword(user.login.bind(user,true), user.login.bind(user,false), "rockstar"); // ?

;







function askPassword2(ok, fail, password) {

}

let user2 = {

};






/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests