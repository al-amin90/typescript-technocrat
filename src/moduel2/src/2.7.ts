{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle;
  const person1: Owner2 = "car";

  // const getPropertyValue = <X, Y extends keyof X>(obj:X , key: Y) => {
  //     return obj[key]
  // }

  const user = {
    name: "al-amin",
    age: 36,
    address: "ctg",
  };

  const getPropertyValue = <X>(obj: X, key: keyof X) => {
    return obj[key];
  };

  const car = {
    model: "Toyota",
    year: 2303,
  };
  const student = {
    id: 23,
    name: "x",
    email: "x@gmail.com",
    devType: "BLWD",
  };
  const student1 = getPropertyValue(student, "devType");
  const result1 = getPropertyValue(car, "year");
}
