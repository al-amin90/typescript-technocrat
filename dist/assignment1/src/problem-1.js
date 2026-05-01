"use strict";
// problem-1
const sumArray = (nums) => {
    return nums.reduce((acc, current) => acc + current, 0);
};
sumArray([1, 2, 3, 4, 5]);
// problem-2
const removeDuplicates = (nums) => {
    const noDuplicates = [];
    nums.forEach((n) => {
        if (!noDuplicates.includes(n)) {
            noDuplicates.push(n);
        }
    });
    return noDuplicates;
};
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// problem-3
const countWordOccurrences = (str, value) => {
    const splitSentence = str.split(" ");
    let count = 0;
    splitSentence.forEach((s) => {
        if (s.toLocaleLowerCase() === value.toLocaleLowerCase()) {
            count++;
        }
    });
    return count;
};
countWordOccurrences("typescript I typescript typescript love Typescript", "typescript");
const calculateShapeArea = (obj) => {
    if ("radius" in obj) {
        return parseFloat((Math.PI * obj.radius * obj.radius).toFixed(2));
    }
    else {
        return obj.width * obj.height;
    }
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
// problem-5
const person = { name: "Alice", age: 30 };
const getProperty = (user, key) => {
    return user[key];
};
console.log(getProperty(person, "name"));
const myProfile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};
const updateProfile = (obj, update) => {
    return Object.assign(Object.assign({}, obj), update);
};
updateProfile(myProfile, { age: 26 });
// problem-7
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarYear() {
        return new Date().getFullYear() - this.year;
    }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarYear());
// problem-8
const validateKeys = (obj, keys) => {
    return keys.every((key) => key in obj);
};
