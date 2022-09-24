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