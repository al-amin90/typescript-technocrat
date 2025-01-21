"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //===> Task 1: Basic Data Types and First Program
    const message = (value) => {
        return value;
    };
    const result = message("Hello World, I will complete this course successfully and become a Next level Web Developer!");
    //===> Task 2: Functions, Optional, and Literal Types
    const message2 = (name, age, role) => {
        // console.log({ name, age, role });
    };
    message2('al amin', 22);
    const person = {
        name: "al amin",
        address: "bherama",
        hairAndEye: "black",
        color: "green",
        incomeAndExpense: 3444,
        hobbies: ["game"],
        family: {
            relation: "sibling",
            name: "al amin",
            age: 23,
        },
        members: 5,
        skills: ["html"],
        maritalStatus: "single",
        friends: {
            name: "goru",
            yearsKnown: 0,
        }
    };
    const pages = {
        name: "Adult Book",
        popularity: "65%"
    };
    const pages2 = {
        name: "iju pagle",
        popularity: "54%",
        publishYear: 34,
    };
    //===> Task 5: Function Type
    const reverseWord = (value) => {
        const splitString = value.split("");
        const reverse = splitString.reverse().join("");
        // console.log(reverse);
    };
    reverseWord("hello");
    //===> Task 6: Spread and Rest Operators, Destructuring
    let grandTotal = 0;
    const spreadAge = (...ages) => {
        const value = [3, 7];
        const totalArray = [...value, ...ages];
        const grandTotal = totalArray.reduce((total, num) => num + total);
        // console.log(grandTotal);
    };
    spreadAge(2, 5, 7, 1);
    //===> Task 7: Type Assertion and Narrowing
    const isType = (value) => {
        if (typeof value === "string") {
            return value.length;
        }
        else if (typeof value === "number") {
            return Math.pow(value, 2);
        }
    };
    const result3 = isType(9);
    const describeAdmin = (user) => {
        return user.description;
    };
    const result4 = describeAdmin({ name: "alamin", email: "iejesun30@gmail.com", adminLevel: "employ", description: "there is nothing to say" });
    const getEmployeeCity = (employee) => {
        var _a;
        return (_a = employee === null || employee === void 0 ? void 0 : employee.address) === null || _a === void 0 ? void 0 : _a.city;
    };
    // console.log(getEmployeeCity({name: 'alamin', address:{city: "kushtia"}}));
    //===> Task 10: Nullish Coalescing
    const getDisplayName = (name) => {
        return name !== null && name !== void 0 ? name : "Anonymous";
    };
    // console.log(getDisplayName("s"));
    //===> Task 11: Unknown Type
    const processData = (data) => {
        if (typeof data === "string") {
            return data.toUpperCase();
        }
        else if (typeof data === "number") {
            return Math.pow(data, 2);
        }
        else {
            return "Wrong Output";
        }
    };
    const fetchUserData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = {
                    name: "al-amin",
                    age: 34
                };
                resolve(user);
            }, 2000);
        });
    };
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield fetchUserData();
        // console.log(data);
    });
    getData();
    //===> Task 15: Type Guards
}
