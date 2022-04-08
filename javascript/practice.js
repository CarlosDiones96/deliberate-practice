//Arrow functions
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(map => materials.length));

let empty = () => {};

(()=> 'foobar')();

var simple = a => a > 15 ? 15 : a;
simple(16);
simple(10);

let max = (a, b) => a > b ? a : b;

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);

var even = arr.filter(v => v % 2 == 0);

var double = arr.map(v => v * 2);

Promise.then(a => {
    //...
}).then(b => {
    //...
});

setTimeout(() =>{
    console.log('I happen sooner');
    setTimeout(() => {
        console.log('I happen later');
    }, 1);
}, 1);
