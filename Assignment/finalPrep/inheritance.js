"use strict";
let animal={
    eats: true,
};
let rabbit ={
    jumps:true,
    __proto__ :animal
};



console.log(rabbit.eats);


let animal1 = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit1 = {
    jumps: true,
    __proto__: animal1
  };
  
  // walk is taken from the prototype
  rabbit1.walk(); // Animal walk
  
  let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; 
  // (**)
  
  console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected

// animal has methods
let animal2 = {
    walk() {
      if (!this.isSleeping) {
        console.log("I walk");
      }
    },
    sleep() {
      (this.isSleeping = true);
    }
  };
  
  let rabbit2 = {
    name: "White Rabbit",
    __proto__: animal2
  };
  //animal2.sleep();
  // modifies rabbit.isSleeping
  rabbit2.sleep();
  
  console.log(rabbit2.isSleeping); // true
  console.log(animal2.isSleeping); // undefined (no such property in the prototype)


  let animal3 = {
    eats: true
  };
  
  let rabbit3 = {
    jumps: true,
    __proto__: animal
  };
  
  // Object.keys only returns own keys
  console.log(Object.keys(rabbit3)); // jumps
  
  // for..in loops over both own and inherited keys
  for(let prop in rabbit3) 
  console.log(prop); // jumps, then eats

  let animal4 = {
    eats: true
  };
  
  let rabbit4 = {
    jumps: true,
    __proto__: animal4
  };
  
  for(let prop in rabbit4) {
    // eslint-disable-next-line no-prototype-builtins
    let isOwn = rabbit4.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`Our: ${prop}`); // Our: jumps
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  }

  let animal5 = {
    jumps1: null
  };
  let rabbit5 = {
    __proto__: animal,
    jumps1: true
  };
  
  console.log( rabbit5.jumps1 ); // ? (1) true
  
  delete rabbit5.jumps1;
  
  console.log( rabbit5.jumps1 ); // ? (2)// null from animal 5
  
  delete animal5.jumps1;
  
  console.log( rabbit5.jumps1 ); // ? (3)// undefined no such prop

  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed

  };

  console.log( pockets.pen ); // 3
  console.log( bed.glasses ); // 1
  console.log( table.money ); // undefined

  Let's say we want to create a Person object, and a Student object derived from Person:

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

var me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");