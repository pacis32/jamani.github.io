/* eslint-disable require-jsdoc */
/* eslint-disable strict */
// function Bear() {}
//  Bear.prototype = { climbs: true};
//  const bear = new Bear();
//   Bear.prototype = {}; 
//   console.log( bear.climbs );

// function Bear() {} 
// Bear.prototype = { climbs: true}; 
// const bear = new Bear(); 
// Bear.prototype.climbs = false; 
// console.log( bear.climbs );

// function Bear() {} 
// Bear.prototype = { climbs: true}; 
// const bear = new Bear();
//  Bear.prototype = { climbs: false}; 
//  console.log( bear.climbs );

 function User(name){
    console.log("1:" , this);
    this.name = name;
    console.log("2:" , this);
    }
  tina = {};
  const thisUser = User.bind(tina);
  thisUser("Rujuan");
  thisUser("Tina");
  console.log("3: ", tina);  