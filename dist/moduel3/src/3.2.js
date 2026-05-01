"use strict";
{
    // OOP Inheritance
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            // console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Mr. Student", 20, "uganda");
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher = new Teacher("Mr. Student", 20, "uganda", "professor");
    // teacher.getSleep(3);
}
{
    class Student {
        constructor(name, age, address) {
            this.name = name;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours} hours`);
        }
    }
    const student1 = new Student("Mr. Student", 20, "uganda");
    student1.getSleep(3);
    class Teacher extends Student {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take class ${numOfClass} hours`);
        }
    }
    const teacher1 = new Teacher("Mr. Ali", 20, "uganda", "professor");
    console.log(teacher1.name);
}
