{
// nullable types
const searchName = (value:string ) => {
    if(value){
        console.log("searching");
    }else{
        console.log("there is nothing to search");
    }
}


// searchName(undefined)

// unKnown type
const getSpreedInMeterPerSecond = (value: unknown) => {
    if(typeof value === "number"){
        const convetedSpreed = (value * 1000) / 3600;
        console.log(`The spreed is ${convetedSpreed} ms^-1` );
    }

    else if(typeof value === 'string'){
        const [result , unit] = value.split(' ')
        const convetedSpreed = (parseFloat(result) * 1000) / 3600;
        console.log(`The spreed is ${convetedSpreed} ms^-1` );
    } else{
        console.log("wrong Inputs");
    }
}
getSpreedInMeterPerSecond(`1000 ms^-1`)
getSpreedInMeterPerSecond(null)

// never

const throwError = (msg: string): never => {
    throw new Error(msg)
}

throwError("mushkil se error hogeya")







}