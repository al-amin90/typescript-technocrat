"use strict";
{
    const movieName = "DeadPool";
    const newMovie = "DeadPool";
    // typeof ar use 
    const movie = {
        title: "Rock On",
        director: "mir vai"
    };
    const newMovie2 = {
        title: "kande moriya",
        director: "janin na"
    };
    const logMessage = (input) => {
        if (typeof input === "string") {
            console.log("simple sms info");
        }
        else if (typeof input === "number") {
            console.log("Error Code", input);
        }
        else if ("message" in input && "level" in input) {
            console.log(`Denger level ${input.level} of ${input.message}`);
        }
    };
    logMessage({ message: "goggl", level: "error" });
}
