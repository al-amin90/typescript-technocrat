{
    //
    const message:unknown = "this is the sms";
     const messageLength = (message as string).length
     console.log(messageLength);
     
        type CustomError = {
            message: "kisu akta"
        }

     try{

     }catch(error) {
        console.log((error as CustomError).message);
     }
    // 

}