// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith

/**“Destructuring” does not mean “destructive”.
It’s called “destructuring assignment,” because it “destructurizes” by 
copying items into variables. But the array itself is not modified. */

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul

/**Works with any iterable on the right-side
…Actually, we can use it with any iterable, not only arrays: */

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// sorting 
let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

rivers.sort(function (a, b) {
    console.log(a, b);
    return a.charAt(3) - b.charAt(3);
});

let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
employees.sort(function (x, y) {
    return x.salary - y.salary;
});

console.table(employees);

employees.sort(function (x, y) {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});


console.table(employees);


employees.sort(function (x, y) {
    let a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b;
});

console.table(employees);


let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

rivers.sort(function (a, b) {
    console.log(a, b);
    return a.length - b.length;
});


// temporary array holds objects with position
// and length of element
var lengths = rivers.map(function (e, i) {
    return {index: i, value: e.length };
});

// sorting the lengths array containing the lengths of
// river names
lengths.sort(function (a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// copy element back to the array
var sortedRivers = lengths.map(function (e) {
    return rivers[e.index];
});

console.log(sortedRivers);