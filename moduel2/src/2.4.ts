{
///         intregate ---- Generic

interface Developer<T, B = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: T;
    bike?: B
}

type EniLabWatch = {
    brand: string;
    model: string;
    display: string
}

const poorDeveloper :Developer<EniLabWatch>  = {
    name: "al amin",
    computer: {
        brand: "Asus",
        model: "X-255U",
        releaseYear: 2010
    },
    smartWatch: {
        brand: "Emilab",
        model: "kw66",
        display: "LED"
    }
}

interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean
}

interface YahamahaBike {
    model:string;
    enginCapacity: number
}

const richDeveloper :Developer<AppleWatch, YahamahaBike>  = {
    name: "kiddus",
    computer: {
        brand: "HP",
        model: "X-250U",
        releaseYear: 2040
    },
    smartWatch: {
        brand: "Apple watch",
        model: "nothing",
        display: "LED",
        heartTrack: true,
        sleepTrack: true

    },
    bike: {
        model: "Yahamaha",
        enginCapacity: 2300
    }
}













}