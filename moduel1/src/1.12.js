"use strict";
{
    //nullable types / unknown types
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("There is Nothing to search");
        }
    };
    searchName(null);
    // unknown
    const getSpreedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            console.log(`Converted Spreed ${(value * 1000) / 3600} Ms^-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedValue = parseFloat(result);
            console.log(`Converted Spreed ${(convertedValue * 1000) / 3600} Ms^-1`);
        }
        else {
            console.log("Wrong Output");
        }
    };
    getSpreedInMeterPerSecond('1000 kmh^-1');
    /// never type
    const throwError = (sms) => {
        // throw new Error(sms)
        throw new Error(sms);
    };
    throwError('Mushkill se error hoha giya');
}
const returnType = () => {
    return { name: "jisan", age: 23 };
};
// there is many prob
