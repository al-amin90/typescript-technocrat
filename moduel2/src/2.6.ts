{
    //constraints
    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development'
        return {
            ...student,
            course
        }
    }
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