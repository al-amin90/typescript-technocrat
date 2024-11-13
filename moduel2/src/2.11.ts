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
    type ContactInfo = Omit<Person, "name" | "age">

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
    person1.age = 20

    // ===> Record
    //  type obj = {
    //     a: string;
    //     b: string
    //  }
    type Obj = Record<string, string>
    const EmptyObj: Record<string, unknown> = {}

    const myObj: Obj = {
        a: "x",
        b: "y",
        c: "z",
        d: "g"
    }

}