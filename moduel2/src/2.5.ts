{
// function with Generic

const creteArray = (param: string): string[] => {
    return [param]
}
const creteArrayWithGeneric = <T>(param: T) : T[] => {
    return [param]
}

type User = {name: string; age: number}
const res1 = creteArray("bangladesh")
const res2 = creteArrayWithGeneric<boolean>(true);
const res3 = creteArrayWithGeneric<User>({name: "al amin", age: 23})
console.log(res3);

// function with Generic with Tuple
const creteArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2]
}
const res22 = creteArrayWithGenericTuple<string, number>("al amin", 232);
const res33 = creteArrayWithGenericTuple<boolean, {isMarrid: boolean}>(true, {isMarrid: true});
console.log(res33);




const addCourseToStudent = <T>(student: T) => {
    const course = 'Next Level Web Development'
    return {
        ...student,
        course
    }
}

interface student1 {name: string, email: string, devType: string}
interface student2 {name: string, email: string, type: string}

console.log(addCourseToStudent<student1>({
    name: "x", email: "x@gmail.com", devType: "BLWD"
}));
console.log(addCourseToStudent<student2>({
    name: "x", email: "x@gmail.com", type: "Admin"
}));




}