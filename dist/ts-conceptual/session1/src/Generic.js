"use strict";
{
    const numArr = [3, 5, 7, 34, 87];
    const stringArr = ["mir", "mezba", "anik"];
    const booleanArr = [true, false, false, true];
    const person = {
        name: "atik",
        age: 34,
        isActive: true,
        designation: "next level web",
        id: 23,
    };
    //function with generic
    const addValue = (sms1, sms2, personInfo) => {
        return { sms1, sms2, personInfo };
    };
    console.log(addValue("23", 54, {
        name: "atik",
        age: 34,
        isActive: true,
        designation: "next level web",
        id: 23,
    }));
}
