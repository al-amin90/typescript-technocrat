const course1 = { name: "Programming Hero" };
const course2 = { name: "Level 2" };

const obj = {};

// ----- limitation of obj
obj[course1] = { courseID: "level 1" };
obj[course2] = { courseID: "level 2" }; //? '[object Object]': { name: "Programming Hero" }

// ----- power of Mapp

const map = new Map();

map.set(course1, { courseID: "level 1" });
map.set(course2, { courseID: "level 2" });

//? map.delete(course2);
//? map.clear();

//? console.log(map.size); => 2
//? map.forEach((key, value) => console.log("Key: ", key, "Value: ", value));

// map.forEach((key, value) => (key.name = "Sohoz Sorol Simple" + key.name)); //? reassign the name

// console.log([...map.keys()]); //? [Map Iterator] [ { name: 'Programming Hero' }, { name: 'Level 2' } ]
// console.log([...map.values()]); //? [Map Iterator] [ { name: 'Programming Hero' }, { name: 'Level 2' } ]

// for (key of map.keys()) {
//   key.name = "Yahhh " + key.name;
// }

console.log(map);
