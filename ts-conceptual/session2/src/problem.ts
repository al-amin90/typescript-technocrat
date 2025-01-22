{
    function repeatString(str: string, num: number) {
        return str.repeat(num)
    }
    // console.log(repeatString("jisan" ,3));

    const findLargestNumber = (nums: number[]): number => {
        return Math.max(...nums)
    }
    // console.log(findLargestNumber([3, 56, 3, 756, 34]));

    const filterEvenNumbers = (nums: number[]): number[] => {
        return nums.filter((num) => num % 2 === 0)
    }
    // console.log(filterEvenNumbers([3, 56, 3, 756, 34]));

    const reverseArray = <T>(arr: T[]): T[] => {
        return arr.reverse()
    }
    // console.log(reverseArray<string>(["df", "s", "aff", "re", "d"]));

    interface Student {
        name: string;
        age: number;
        grades: number[]
    }
    const calclutedAverageAge = (std: Student): number => {
        const total = std.grades.reduce((acc, grade) => acc + grade, 0)
        return total / std.grades.length
    }
    // console.log(calclutedAverageAge({
    //     name: "al amin",
    //     age: 34,
    //     grades: [3, 4,2,3]
    // }));

    type Book = {
        title:string;
        author: string;
        publishYear: number
    }
    const isRecentBook = (book: Book) => {
        const currentYear = new Date().getFullYear()
        return currentYear - book.publishYear <= 5
    }
    // console.log(isRecentBook({
    //     title:"kekok",
    //     author: "nigu",
    //     publishYear: 2020
    // }));

    const logString = (input: unknown) : void => {
        if(typeof input === "string"){
            console.log(input);
        }else{
            console.log("Error: hey dev there is a error");
        }
    }
    // logString({})

    class Car {
        constructor(
            public brand: string, 
            public model: string, 
            public year: number
        ){}4
        
        displayInfo(): string{
            return `Your car model is ${this.model} from the company ${this.brand} released in ${this.year}` 
        }
    }
    const car1 = new Car("BMW", "M7", 2010)
    console.log(car1.displayInfo());
}