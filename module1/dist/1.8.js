"use strict";
//  destructuring
{
    const user = {
        id: 3252,
        name: {
            firstName: "AL Amin",
            middleName: "Parvez",
            lastName: "Jisan"
        },
        contactNo: "01716724371",
        address: "Ugenda"
    };
    const { contactNo, name: { middleName: mid } } = user;
    console.log(mid);
}
