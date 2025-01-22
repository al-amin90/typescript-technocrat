{   
    type ArrayType<T> = Array<T>

    const numArr: ArrayType<number> = [3, 5 ,7 ,34, 87]
    const stringArr : ArrayType<string> = ["mir", "mezba", "anik"]
    const booleanArr: ArrayType<boolean> = [true, false, false ,true]

    //interface
    interface IPerson<A , I, D> {
        name: string,
        age: number,
        isActive: A,
        designation: D,
        id: I
    }
    const person : IPerson<Boolean, number, string> = {
        name: "atik",
        age: 34,
        isActive: true,
        designation: "next level web",
        id: 23
    }

    //function with generic
    const addValue = <T, N , P>(sms1: T, sms2: N, personInfo: P) : {} => {
        return {sms1 , sms2, personInfo};
    }
    console.log(
        addValue<number, number, IPerson<boolean, number, string>>(   23, 
        54, 
        {
        name: "atik",
        age: 34,
        isActive: true,
        designation: "next level web",
        id: 23
    })
);



}