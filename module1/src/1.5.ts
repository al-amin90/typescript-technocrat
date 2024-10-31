// Reference type ===> Object

const user : {
    readonly company: string; //type ---> Literal types 
    firstName: string;
    middleName?: string; //Optional type
    lastName: string;
    isMarried: boolean
} = {
    company: "Ali Ullah",
    firstName: 'Maruf',
    lastName: 'Billah',
    isMarried: true,
}

user.company = "ph"