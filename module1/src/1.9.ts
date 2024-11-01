{
    // Type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string
    }


    const student : Student = {
        name: 'mezva',
        age:59,
        gender: "male",
        contactNo: '01752726250',
        address: 'ctg'
    }

    const student2: Student = {
        name: 'Mir',
        age:49,
        gender: "male",
        address: 'dhk'
    }

    type UserName = string;
    type IsAdmin = boolean
    const userName : UserName = "jisan"
    const isAdmin: IsAdmin = true

    type Add = (num1: number, num2 : number) => number
    const add: Add = (num1, num2) => num1 + num2

}