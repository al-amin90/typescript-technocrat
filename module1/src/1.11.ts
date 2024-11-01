{

    // ? || ternary operator || optional chaining || nullish coalescing operator

    const age : number = 15;

    if( age >= 18){
        console.log("Adult");
    }else{
        console.log("not Adult");
    }

    const isAdult = age >= 18 ? "Adult" : "not Adult"
    console.log({isAdult});

    // nullish coalescing operator
    const isAuthenticated = undefined

    const result1 = isAuthenticated ?? "Guest"
    const result2 = isAuthenticated ? isAuthenticated : "Guest"
    console.log({result1}, {result2}); // ----> { result1: '' } { result2: 'Guest' }

    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            presentAddress: string,
            permanentAddress?: string
        }
    }

    const user : User = {
        name: "parvez",
        address: {
            city: "kushtia",
            road: "mojompur",
            presentAddress: "kushtia town"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address" ;
    console.log({permanentAddress});







}