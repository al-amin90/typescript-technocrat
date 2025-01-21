{
    // OOP Inheritance
    class Parent {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            // console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }
    const student1 = new Student("Mr. Student", 20, "uganda");

    class Teacher extends Parent {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher = new Teacher("Mr. Student", 20, "uganda", "professor");
    // teacher.getSleep(3);
}







{
    class Student {
        constructor(public name: string, age: number, address: string) { }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} hours`);
        }
    }

    const student1 = new Student("Mr. Student", 20, "uganda");
    student1.getSleep(3)

    class Teacher extends Student {

        constructor(name: string, age: number, address: string, public designation: string) {
            super(name, age, address)
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take class ${numOfClass} hours`);
        }
    }
    const teacher1 = new Teacher("Mr. Ali", 20, "uganda", "professor");
    console.log(teacher1.name);
}