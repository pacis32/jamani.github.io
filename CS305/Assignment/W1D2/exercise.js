/*function a(){
    console.log(x); // consult Global for x and print 20 from Global
    }
    function b(){
    let x = 10;
    a(); // consult Global for a
    console.log(x);
    }
    let x = 20;
    b();
*/
   /* function b(){
        function a(){
        console.log(x);
        }
        let x = 10;
        a();
        console.log(x);
        }
        let x = 20;
        b(); // 10 */

       /* let age = 10;

console.log(age);

function output() {

  let age = 20;

  console.log(age);

}

output();

console.log(age); */



function sayHi(name) {

    console.log("Hi " , name);
  
    return "Bye " + name;
  
  }
  const sayHiReturn = console.log(sayHi() );