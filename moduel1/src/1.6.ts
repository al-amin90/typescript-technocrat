{
    // function

function add(a: number, b: number = 10): number{
    return a + b
}
add(23, 54)

const addArrow = (a: number , b: number): number => a + b

const poorUser = {
    name: " jisab",
    blance: 0,
    addBalance(b: number): string {
        return `${this.blance} + ${b}`
    }
}

const arr: number[] = [23, 54]

const newArr: number[] = arr.map((elem: number): number => elem + elem)

}