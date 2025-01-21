"use strict";
{
    // function with Generic
    const creteArray = (param) => {
        return [param];
    };
    const creteArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = creteArray("bangladesh");
    const res2 = creteArrayWithGeneric(true);
    const res3 = creteArrayWithGeneric({ name: "al amin", age: 23 });
    console.log(res3);
    // function with Generic with Tuple
    const creteArrayWithGenericTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res22 = creteArrayWithGenericTuple("al amin", 232);
    const res33 = creteArrayWithGenericTuple(true, { isMarrid: true });
    console.log(res33);
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    console.log(addCourseToStudent({
        name: "x", email: "x@gmail.com", devType: "BLWD"
    }));
    console.log(addCourseToStudent({
        name: "x", email: "x@gmail.com", type: "Admin"
    }));
}
