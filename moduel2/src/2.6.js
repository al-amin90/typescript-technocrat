"use strict";
{
    //constraints
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student3 = addCourseToStudent({ id: 4, email: "emni@gmail.com", name: "emni" });
    const student1 = addCourseToStudent({
        id: 23,
        name: "x",
        email: "x@gmail.com",
        devType: "BLWD"
    });
    const student2 = addCourseToStudent({
        id: 35,
        name: "x",
        email: "x@gmail.com",
        shasType: "Admin"
    });
}
