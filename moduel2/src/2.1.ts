{
    // type assertion
    let anything : any;

    anything = 34;
    // (anything as number).

    const KgToGm = (value: string | number): string | number |undefined =>  {
        if(typeof value === "string"){
            return `The converted value is ${parseFloat(value)* 1000}`
        }else if ( typeof value === "number"){
            return value* 1000
        }
    }

    const result1 = KgToGm(1000) as number 
    const result2 = KgToGm("1000") as string 


    type CustomError = {
        message: "all error"
    }

    
    try{

    }catch(error){
        console.log((error as CustomError).message);
    }











}