{
    const movieName = "DeadPool";

    //use "typeof"
    type MovieType = typeof movieName
    const newMovie : MovieType = "DeadPool"

    // typeof ar use 
    const movie = {
        title: "Rock On",
        director: "mir vai"
    }
    type MovieDetails = typeof movie;

    const newMovie2: MovieDetails = {
        title: "kande moriya",
        director: "janin na"
    }

    type DetailsLog = {
        message: string,
        level: "info" | "warn" | "error"
    }
    const logMessage = (input: string | number | DetailsLog) => {
        if(typeof input === "string"){
            console.log("simple sms info");
        }else if( typeof input === "number"){
            console.log("Error Code", input);
        }else if( "message" in input && "level" in input){
            console.log(`Denger level ${input.level} of ${input.message}`);
        }
    }
    logMessage({message: "goggl", level: "error"})
}   