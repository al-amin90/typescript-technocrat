"use strict";
{
    const person1 = "car";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "al-amin",
        age: 36,
        address: "ctg"
    };
    const car = {
        model: "Toyota",
        year: 2303
    };
    const result1 = getPropertyValue(car, "year");
    console.log(result1);
}
