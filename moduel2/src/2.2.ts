{
    //interface

    type User1 = {
        name: string;
        age: number
    }
    interface User2 {
        name: string;
        age: number;
    }
    type UserWithRole = User2 & {role: string}
    interface UserWithRole2 extends User2 {
        role: string
    }

    const User1: UserWithRole2 = {
        name: "al amin",
        age: 23,
        role: "manager"
    }

    ///             js ---> Object , Array -> Object Function ->> Object

    type Roll = number[]
    interface Roll1 {
        [index: number] : number
    }
    
    const rollNumbers1: number[] = [2, 4,5 ,23, 6]
    const rollNumbers2: Roll = [2, 4,5 ,23, 6]
    const rollNumbers3: Roll1 = [2, 4,5 ,23, 6]
                            //   0  1 2  3   4
    const rollNumbers4: Array<number> = [2, 4,5 ,23, 6]

    // function
    type Add1 = (a: number , b: number) => number;
    interface Add2 {
        (a: number, b : number) : number
    }
    const add = (a: number , b: number) : number => a + b ;
    const add1: Add2 = (a , b) => a + b ;


}