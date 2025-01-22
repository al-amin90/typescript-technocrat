{
    const getLength = <T extends {length: number}>(value: T) => {
        return value.length
    }
    console.log(getLength<string>("hello world"));

    const info: (number | string)[] = [2, 24, "ali", " hosau"]
}