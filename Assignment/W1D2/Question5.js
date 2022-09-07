"use strict";
function convertFahrenheit(temp){
    let tempInCelcius= ((temp-32)*5/9);
    return tempInCelcius;
}
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0).toFixed(4));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100).toFixed(4));