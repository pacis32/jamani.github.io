const arr1234 = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr1234;
console.log(a);
console.log(b);
console.log(c);

const sample = [1,2,3];
const mapResult = sample.map(function(val, index, array) {
    console.log('val :', val, 'index :', index, 'array :', array);
    return (val * 2);
});