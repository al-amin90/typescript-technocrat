"use strict";
// function
function add(a, b = 10) {
    return a + b;
}
add(23, 54);
const addArrow = (a, b) => a + b;
const poorUser = {
    name: " jisab",
    balance: 0,
    addBalance(money) {
        return `${this.name} new balance is ${this.balance + money}`;
    }
};
console.log('poorUer', poorUser.addBalance(30));
const arr = [2, 3, 5, 4];
const square = arr.map((element) => element * element);
