"use strict";
//destructuring
const user = {
    id: 23,
    name: {
        first: "jidan",
        midlle: " no",
        last: 'kelu'
    },
    contactNo: "01752736250",
    address: "Dhaka"
};
const { contactNo: phoneNo, name: { last } } = user;
const myFriends = ['a', "b", "c", "d", "e"];
const [, , friend, ...rest] = myFriends;
