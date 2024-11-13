{
    //constraints
    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = 'Next Level Web Development'
        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent({ id: 4, email: "emni@gmail.com", name: "emni" })

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 23,
        name: "x",
        email: "x@gmail.com",
        devType: "BLWD"
    });

    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        shasType: string;
    }>({
        id: 35,
        name: "x",
        email: "x@gmail.com",
        shasType: "Admin"
    });










}