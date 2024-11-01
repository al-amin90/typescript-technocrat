"use strict";
{
    // Learning function
    function add(a, b) {
        return a + b;
    }
    add(2, 2);
    const addArrow = (a, b) => a + b;
    // Object --- function ---> Method
    const poorUser = {
        name: "parvez",
        balance: 0,
        addBalance(balan) {
            return `mt name ${this.name}. my balance is ${this.balance + balan}`;
        }
    };
    const result = poorUser.addBalance(3);
    console.log(result);
    const arr = [3, 54, 65, 2];
    const newArr = arr.map((e) => e * e);
}
