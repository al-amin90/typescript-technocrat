{
    
    
    // const rollNumbers: number[] = [2,45,5,65,6 ,4,3,]
    // const mentors: string[] = ['x','y', 'z']
    // const boolArray: boolean[] = [true, false, true]

    // Generic Type ---> reuseable type korte parci....... use kore angle braclet user korbo

    const rollNumbers: Array<number> = [2, 45, 5, 65, 6, 4, 3,]
    const mentors: Array<string> = ['x', 'y', 'z']
    const boolArray: Array<boolean> = [true, false, true];

    type GenericArray<T> = Array<T>
    
    
    const rollNumbers2: GenericArray<number> = [2, 45, 5, 65, 6, 4, 3,]
    const mentors2: GenericArray<string> = ['x', 'y', 'z']
    const boolArray2: GenericArray<boolean> = [true, false, true];

    const user : GenericArray<{name: string; age: number}> = [
        {
            name: "x",
            age: 23
        },
        {
            name: "y",
            age: 345
        }
    ]


    const add = (a: number, b: number) => a + b;
    add(23, 2)


    // Generic Type use kore Tuple ------------> Generic ar maddo me resuseable type use kora jai
    type GenericTuple<X, Y> = [x, Y]
    interface User {name:string, age: number}
    
    const manus: [string, string] = ["x", "y"]
    const UserWithId: GenericTuple<number, User> = [1, {name: "lalu", age:54}]



}