
    // function

function add(a: number, b: number = 10): number{
    return a + b
}
add(23, 54)

const addArrow = (a: number , b: number):number => a + b

const poorUser = {
    name: " jisab",
    balance: 0,
    addBalance(money: number): string {
        return `${this.name} new balance is ${this.balance + money}`
    }
}
console.log('poorUer', poorUser.addBalance(30));

const arr: number[] = [2, 3, 5, 4]

const square: number[] = arr.map((element: number): number => element * element)

