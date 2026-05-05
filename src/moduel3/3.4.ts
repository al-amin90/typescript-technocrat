{
  // instance of guard
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sleepTime(numberOfHours: number) {
      console.log(`i am sleep ${numberOfHours} `);
    }
  }

  class Student extends Person {
    constructor(name: string) {
      super(name);
    }

    doStudy(numberOfHours: number) {
      console.log(`i am study ${numberOfHours} `);
    }
  }

  class Teacher extends Person {
    constructor(name: string) {
      super(name);
    }

    takeClass(numberOfHours: number) {
      console.log(`i am takeing class ${numberOfHours} `);
    }
  }

  //smart way te handle korar jonno chaile amra function bebohar korte pari
  const isStudent = (user: Person) => {
    return user instanceof Student;
  };
  const isTeacher = (user: Person) => {
    return user instanceof Teacher;
  };

  const getUser = (user: Person) => {
    if (user instanceof Student) {
      user.doStudy(1);
    } else if (isTeacher(user)) {
      user.takeClass(3);
    } else {
      user.sleepTime(8);
    }
  };

  const student = new Student("tamim vai"); // a gulo ak akta instance
  const teacher = new Teacher("mezba vai");
  const person = new Person("hiru vai");

  getUser(person);
}
