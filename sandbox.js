// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// console.log(10 / 2);
// let results = radius % 3;

//let results = pi * radius ** 2;

// order of operation
// let results = 5 * (10 - 3) ** 2;

// console.log(results);

// let likes = 10;
//likes = likes + 1;

//likes++;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;
//console.log(likes);

// NaN - Not a number

//console.log(5 / "hello");

// let result = "the blog has " + likes + " likes";
// console.log(result);

// template strings
const title = "Best reads of 2019";
const author = "Param";
const likes = 30;

// concatenation
// let result =
//   "The blog called " + title + " by " + author + " has " + likes + " likes";

// console.log(result);

// template literal
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);
