{
    type Student = {
        name: string;
        roll: number;
        isMarried: boolean
     }

    const student1: Student = {
        name: "x",
        roll: 2,
        isMarried: true  
    }
    const student2: Student = {
        name: "y",
        roll: 3,
        isMarried: false  
    }

    type UserName = string
    const userName:  UserName  = 'Jisan'
    type IsAdmin = boolean;
    const isAdmin: IsAdmin = true

type Add = (num1: number, num2: number) => number
    const add : Add = (num1, num2) => num1 + num2








}