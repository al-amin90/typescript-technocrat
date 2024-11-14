{
    //===> Task 1: Basic Data Types and First Program
    const message = (value: string): string => {
        return value
    }
    const result = message("Hello World, I will complete this course successfully and become a Next level Web Developer!")

    //===> Task 2: Functions, Optional, and Literal Types
    const message2 = (name: string, age: number, role?: 'admin' | 'user' | 'guest') => {
        // console.log({ name, age, role });
    }
    message2('al amin', 22)

    //===> Task 3: Functions, Optional, and Literal Types
    type HairColor = 'black' | 'brown' | 'blonde' | 'red' | 'gray' | 'white' | 'other';
    type EyeColor = 'brown' | 'blue' | 'green' | 'hazel' | 'gray' | 'amber' | 'other';
    type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed' | 'other';
    type Job = {
        title: string;
        yearsOfExperience: number;
    };
    type FamilyMember = {
        relation: 'parent' | 'sibling' | 'spouse' | 'child' | 'other';
        name: string;
        age: number;
    };
    type Friend = {
        name: string;
        yearsKnown: number;
    };

    type Person = {
        name: string;
        address: string;
        hairAndEye: HairColor;
        color: EyeColor;
        incomeAndExpense: number;
        hobbies: string[];
        family: FamilyMember;
        members: number;
        job?: Job;
        skills: string[];
        maritalStatus: MaritalStatus;
        friends: Friend;
    }
    const person: Person = {
        name: "al amin",
        address: "bherama",
        hairAndEye: "black",
        color: "green",
        incomeAndExpense: 3444,
        hobbies: ["game"],
        family: {
            relation: "sibling",
            name: "al amin",
            age: 23,
        },
        members: 5,
        skills: ["html"],
        maritalStatus: "single",
        friends: {
            name: "goru",
            yearsKnown: 0,
        }
    }

    //===> Task 4: Union and Intersection Types
    interface Book {
        name: string,
        publishYear: number
    }
    interface Magazine {
        name: string,
        popularity: string
    }
    type UnionPage = Book | Magazine;
    type IntersectionPage = Book & Magazine

    const pages: UnionPage = {
        name: "Adult Book",
        popularity: "65%"
    }
    const pages2: IntersectionPage = {
        name: "iju pagle",
        popularity: "54%",
        publishYear: 34,
    }

    //===> Task 5: Function Type
    const reverseWord = (value: string) => {
        const splitString = value.split("")
        const reverse = splitString.reverse().join("")
        // console.log(reverse);
    }
    reverseWord("hello")

    //===> Task 6: Spread and Rest Operators, Destructuring
    let grandTotal = 0;
    const spreadAge = (...ages: number[]) => {
        const value = [3, 7];
        const totalArray = [...value, ...ages]
        const grandTotal = totalArray.reduce((total, num) => num + total)
        // console.log(grandTotal);
    }
    spreadAge(2, 5, 7, 1)

    //===> Task 7: Type Assertion and Narrowing
    const isType = (value: string | Number): string | number | undefined => {
        if (typeof value === "string") {
            return value.length;
        } else if (typeof value === "number") {
            return Math.pow(value, 2)
        }
    }
    const result3 = isType(9);
    // console.log(result3);    

    //===> Task 8: Intersection Types
    type User = {
        name: string;
        email: string;
    }
    type Admin = {
        adminLevel: "Leader" | "employ";
        description: string;
    }
    type AdminUser = User & Admin;

    const describeAdmin = (user: AdminUser): string => {
        return user.description
    }
    const result4 = describeAdmin({ name: "alamin", email: "iejesun30@gmail.com", adminLevel: "employ", description: "there is nothing to say" })
    // console.log(result4);

    //===> Task 9: Optional Chaining
    type employ = {
        name: string;
        address?: { city?: string }
    }
    const getEmployeeCity = (employee: employ): string | undefined => {
        return employee?.address?.city
    }
    // console.log(getEmployeeCity({name: 'alamin', address:{city: "kushtia"}}));

    //===> Task 10: Nullish Coalescing
    const getDisplayName = (name: string | null | undefined): string => {
        return name ?? "Anonymous"
    }
    // console.log(getDisplayName("s"));

    //===> Task 11: Unknown Type
    const processData = (data: unknown): string | number => {
        if (typeof data === "string") {
            return data.toUpperCase();
        } else if (typeof data === "number") {
            return Math.pow(data, 2)
        } else {
            return "Wrong Output"
        }
    }
    // console.log(processData("alvaikunta"));

    //===> Task 12: Never Type
    // const handleError = (message: string): never => {
    //     throw new Error (message)
    // }

    // try{
    //     handleError("something went wrong")
    // }catch(error){
    //     console.log(error);
    // }


    //===> Task 14: Asynchronous TypeScript and Type Aliases
    type MyUser = {
        name: string;
        age: number
    }
    const fetchUserData = (): Promise<MyUser> => {
        return new Promise<MyUser>((resolve, reject) => {
            setTimeout(() => {
                const user: MyUser = {
                    name: "al-amin",
                    age: 34
                }
                resolve(user)
            }, 2000)
        })
    }

    const getData = async () => {
        const data = await fetchUserData();
        // console.log(data);
    }
    getData()

    //===> Task 15: Type Guards

}