{
  //constraints
  type Student = { id: number; name: string; email: string };

  const addCourseToStudent = <T extends Student>(student: T) => {
    const course: string = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({ emni: "emni" });

  const student1 = addCourseToStudent({
    id: 23,
    name: "x",
    email: "x@gmail.com",
    devType: "BLWD",
  });

  const student2 = addCourseToStudent({
    id: 35,
    name: "x",
    email: "x@gmail.com",
    shasType: "Admin",
  });
}
const getLength = <T extends { length: number }>(value: T) => {
  return value.length;
};
console.log(getLength<string>("hello world"));
