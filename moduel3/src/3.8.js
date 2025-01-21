"use strict";
{
    // polymorphisom
    // kono akra class ar paticular method onno method giye redesign hoi tahole, tokon same method vinno vinno output disse setai holo polymorphisom
    class Person {
        getSleep() {
            console.log('I am sleeping for 8 hours per day');
        }
    }
    class Student extends Person {
        getSleep() {
            console.log('I am sleeping for 7 hours per day');
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log('I am sleeping for 6 hours per day');
        }
    }
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    const getSleepingHours = (param) => {
        param.getSleep();
    };
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        // PI * r2
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, wight) {
            super();
            this.height = height;
            this.wight = wight;
        }
        // height * wight
        getArea() {
            return this.height * this.wight;
        }
    }
    const area = new Shape();
    const areaCircle = new Circle(3);
    const areaRectangle = new Rectangle(10, 20);
    const calclutedArea = (param) => {
        console.log(`The area is ${param.getArea()}`);
    };
    calclutedArea(area);
    calclutedArea(areaCircle);
    calclutedArea(areaRectangle);
}
