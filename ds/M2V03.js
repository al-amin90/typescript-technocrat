//TODO sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

const sortData = numbers.sort((a, b) => b - a); //? this is in-place sort
const fruitsSort = fruits.sort((a, b) => a.localeCompare(b)); //? this is case insensetive sort

//TODO Nested array flat

const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];
console.log(arr.flat(Infinity)); //? this is goose infinite nested arr layer break korbe

//TODO break layer Duplicate remove
const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];
console.log([...new Set(tagsFromPosts.flat(Infinity))]); //? [ 'javascript', 'react', 'css', 'node', 'express', 'html' ]

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];
console.log([...new Set(tagsFromPosts.flat(Infinity))]); //? [ 'javascript', 'react', 'css', 'node', 'express', 'html' ]
