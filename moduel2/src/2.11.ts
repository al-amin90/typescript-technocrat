{
    // utility types
    // ===> PICK
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: number;
    }

    type NameAge = Pick<Person, "name" | "age">
    // ===> Omit
    type ContactInfo = Omit<Person, "name" | "age" | "email">
    // ===> Required
    type PersonRequired = Required<Person>

    // ===> Partial
    type PersonPartial = Partial<Person>

    // ===> Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Al amin",
        age: 23,
        contactNo: 3535
    }
    person1.age = 200

    // ===> Record
     type MyObj1 = {
        a: string;
        b: string
     }
    type MyObj2 = Record<string, string>
    
    const obj1: MyObj2 = {
        a: "xx",
        b: "yy",
        c: "zz",
        d: "gg"
    }
    
    const EmptyObj: Record<string, unknown> = {}
    EmptyObj.age = 34;
    EmptyObj.name = "al"
}