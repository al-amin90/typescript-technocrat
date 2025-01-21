"use strict";
{
    function repeatString(str, num) {
        return str.repeat(num);
    }
    // console.log(repeatString("jisan" ,3));
    const findLargestNumber = (nums) => {
        return Math.max(...nums);
    };
    // console.log(findLargestNumber([3, 56, 3, 756, 34]));
    const filterEvenNumbers = (nums) => {
        return nums.filter(num => num % 2 === 0);
    };
    // console.log(filterEvenNumbers([3, 56, 3, 756, 34]));
    const reverseArray = (arr) => {
        return arr.reverse();
    };
    const calclutedAverageAge = (std) => {
        const total = std.grades.reduce((acc, num) => acc + num, 0);
        return total / std.grades.length;
    };
    const isRecentBook = (book) => {
        const currentYear = new Date().getFullYear();
        return currentYear - book.publishYear <= 5;
    };
    // console.log(isRecentBook({
    //     title:"kekok",
    //     author: "nigu",
    //     publishYear: 2020
    // }));
    const logString = (input) => {
        if (typeof input === "string") {
            console.log(input);
        }
        else {
            console.log("Error: hey dev there is a error");
        }
    };
    // logString({})
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        displayInfo() {
            return `Your car model is ${this.model} from the company ${this.brand} released in ${this.year}`;
        }
    }
    const car1 = new Car("BMW", "M7", 2010);
    console.log(car1.displayInfo());
}
