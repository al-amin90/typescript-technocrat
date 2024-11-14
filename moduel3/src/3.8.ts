{
    // polymorphisom
    // kono akra class ar paticular method onno method giye redesign hoi tahole, tokon same method vinno vinno output disse setai holo polymorphisom
    class Person {
        getSleep (){
            console.log('I am sleeping for 8 hours per day');
        }
    }
    class Student extends Person{
        getSleep (){
            console.log('I am sleeping for 7 hours per day');
        }
    }
    class Developer extends Person{
        getSleep (){
            console.log('I am sleeping for 6 hours per day');
        }
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    const getSleepingHours = (param: Person) => {
        param.getSleep()
    }
    getSleepingHours(person1)
    getSleepingHours(person2)
    getSleepingHours(person3)


    class Shape{
        getArea(): number{
            return 0
        }
    }

    class Circle extends Shape{
        radius: number;

        constructor(radius: number){
            super()
            this.radius = radius
        }
        // PI * r2
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }

    class Rectangle extends Shape {
        height: number;
        wight: number;

        constructor(height: number, wight: number){
            super()
            this.height = height
            this.wight = wight
        }

        // height * wight
        getArea(): number {
            return this.height * this.wight
        }
    }

    const area = new Shape();
    const areaCircle = new Circle(3);
    const areaRectangle = new Rectangle(10 , 20);

    const calclutedArea = (param: Shape) : void => {
        console.log(`The area is ${param.getArea()}`);
    }

    calclutedArea(area)
    calclutedArea(areaCircle)
    calclutedArea(areaRectangle)
}