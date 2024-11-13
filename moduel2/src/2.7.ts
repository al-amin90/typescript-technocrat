{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";
    type Owner2 = keyof Vehicle
    const person1: Owner2 = "car"

    const getPropertyValue = <X, Y extends keyof X>(obj:X , key: Y) => {
        return obj[key]
    }

    const user = {
        name: "al-amin",
        age: 36,
        address: "ctg"
    }
    const car = {
        model: "Toyota",
        year: 2303
    }
    const result1 = getPropertyValue(car, "year")
    console.log(result1);







}