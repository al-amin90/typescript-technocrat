{
    const getLength = <T extends {length: number}>(value: T) => {
        return value.length
    }
    console.log(getLength<string>("hello world"));
}