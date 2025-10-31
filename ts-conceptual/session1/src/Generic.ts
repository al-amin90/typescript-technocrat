{
  type ArrayType<T> = Array<T>;

  const numArr: ArrayType<number> = [3, 5, 7, 34, 87];
  const stringArr: ArrayType<string> = ["mir", "mezba", "anik"];
  const booleanArr: ArrayType<boolean> = [true, false, false, true];

  //interface
  interface IPerson<A, D, I> {
    name: string;
    age: number;
    isActive: A;
    designation: D;
    id: I;
  }
  const person: IPerson<boolean, string, number> = {
    name: "atik",
    age: 34,
    isActive: true,
    designation: "next level web",
    id: 23,
  };

  //function with generic
  const addValue = <N, A, P>(sms1: N, sms2: A, personInfo: P): {} => {
    return { sms1, sms2, personInfo };
  };

  console.log(
    addValue<string, number, IPerson<boolean, string, number>>("23", 54, {
      name: "atik",
      age: 34,
      isActive: true,
      designation: "next level web",
      id: 23,
    })
  );
}
