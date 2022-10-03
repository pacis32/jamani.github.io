"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator,copySorted,sortByAge,getAverageAge }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {

        let newArr = arr.filter(item => item >= a && item <= b);
        return newArr;
      }
  

 
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] < a) || (arr[i] > b)) {
          arr.splice(i, 1);
        }
      };
  }
 

  function Calculator() {
    this["*"] = (a, b) => +a * +b,
    this["+"] = (a, b) => +a + +b,
    this["/"] = (a, b) => +a / +b,
    this["**"] = (a, b) => (+a) ** (+b),
    this["-"] = (a, b) => +a - +b,
    this.calculate = function (str) {
      let numArr = str.split(" ");
      for (let prop in this) {
        if (numArr[1] === prop) {
          return this[prop](numArr[0], numArr[2]);
        };
      };
    },
    this.addMethod = function (name, func) {
      for (let prop in this) {
        if (name === prop) {
          func = this[prop]();
        };
      };
    }

  }

  function unique(arr) {
    let uniqueArr = [];
  for (let element of arr) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr;
  
  }


  function groupById(array) {
    return array.reduce(function (previousValue, item) {
        previousValue[item.id] = item;
        return previousValue;
      }, {})
  }

  function copySorted(arr) {
    let copyArr = arr.map((item) => item);
    return copyArr.sort();
  }

  function sortByAge(arr) {
    let newArr = arr.sort(function (a, b) {
      if (a.age > b.age) {
        return -1;
      } else if (a.age < b.age) {
        return 1;
      } else if (a.age = b.age) {
        return 0;
      }
    });
    return newArr;
  }

  function getAverageAge(arr) {
    let average = arr.reduce((sum, element) => sum + element.age, 0) / arr.length;
    return average;
  }