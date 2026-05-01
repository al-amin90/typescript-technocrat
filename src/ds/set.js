const arr = ["maanof", "apple", "harlm"];

const set = new Set(arr);
set.forEach((v) => console.log(v)); //set sudu ati kaj kore

console.log(set.has("tomato"));
console.log(set.delete("apple"));
console.log("ser", set);

const from = Array.from(arr); //jodi arr method use korte chai tokon arr convert korte hobe
from.push("tomato");
