// const names = 'shaun';

// // functions
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = names.toUpperCase();
// console.log(resultTwo);

// // callbacks & foreach
// const myFunc = (callbackFunc) => {
//     // do smth
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     console.log(value);
// });

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

























// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// Arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log(area);

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

