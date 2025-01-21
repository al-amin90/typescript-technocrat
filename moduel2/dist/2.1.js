"use strict";
{
    // type assertion
    let anything;
    anything = 34;
    // (anything as number).
    const KgToGm = (value) => {
        if (typeof value === "string") {
            return `The converted value is ${parseFloat(value) * 1000}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = KgToGm(1000);
    const result2 = KgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
