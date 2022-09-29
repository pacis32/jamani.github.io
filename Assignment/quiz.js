/* eslint-disable strict */
1. let animal = {
    eats: true
    };
    function Dog(name) {
    this.name = name;
    
    }
    
    Dog.prototype = animal;
    let snoopy = new Dog("Snoopy");
    alert( snoopy.eats ); // true


    //**
     
    function User(name) {
        this.name = name;
      }
      
      User.prototype.sayHi = function() {
        alert(this.name);
      };
      
      let user = new User("John");
      user.sayHi();


      function Rabbit(name) {
        this.name = name;
      }
      Rabbit.prototype.sayHi = function() {
        alert(this.name);
      };
      let fluf1= new Rabbit("Fluffy");
      
       
      
      Do all of these calls do the same thing?  (Draw the object diagram - on scratch paper)
      fluf1.sayHi();
      Rabbit.prototype.sayHi();
      fluf1.__proto__.sayHi();


      function Counter() {
        let count = 0;
      
        this.up = function() {
          return ++count;
        };
        this.down = function() {
          return --count;
        };
      }
      
      let counter = new Counter();
      
      alert( counter.up() ); 
      alert( counter.up() ); 
      alert( counter.down() )