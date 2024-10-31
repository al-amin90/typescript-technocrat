// Learning function

function add(a: number, b: number): number {
    return a + b
}

add(2, 2)

const addArrow = (a: number, b: number): number => a + b;

// Object --- function ---> Method

const poorUser = {
    name: "parvez",
    balance: 0,
    addBalance(balan: number): string{
        return `mt name ${this.name}. my balance is ${this.balance + balan}`
    }
}
const result =  poorUser.addBalance(3)
console.log(result);

const arr: number[] = [3, 54, 65, 2]

const newArr: number[] = arr.map((e:number): number => e * e ) 