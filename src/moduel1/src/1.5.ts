{
// Object
const user: {
    first: string;
    middle?: string;
    last: string;
    isMarried: true;
    company: "Programming Hero"; //type: Literal types
    readonly fullName: string;
}  = {
    first: "al",
    // middle: "amiin",
    last: "parvez",
    isMarried: true,
    company: "Programming Hero",
    fullName: "Al Amin Parvaje"
}


user.first = "nothing"
console.log('user',user);






}