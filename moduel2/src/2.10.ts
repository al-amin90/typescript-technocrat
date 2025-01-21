{
    const arrOfNumbers: number[] = [2, 5, 5, 2]
    const arrOfString: string[] = arrOfNumbers.map((n: number) : string => n.toString())
    // const arrOfString2 : string[] = arrOfNumbers.map((num: number): string => num.toString())
    console.log(arrOfString);

    //
    type AreaNumber = {
        height: number;
        weight: number
    }

    type AreaString = {
        [Key in keyof AreaNumber] : boolean
    }

    type Height = AreaNumber["height"]


    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    type Compile<T, X> = {
        [key in keyof T] : X
    }

    type AreaBoolean = Compile<AreaNumber, boolean>
    type AreaUndefine = Compile<AreaNumber, null>

    const area: AreaString<{ height: number; width: string}> = {
        height: 100,
        width: "34"
    }
}