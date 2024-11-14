{
    const arrOfNumbers: number[] = [2, 5, 5, 2]
    const arrOfString: string[] = arrOfNumbers.map(num => num.toString())
    // const arrOfString2 : string[] = arrOfNumbers.map((num: number): string => num.toString())
    console.log(arrOfString);


    type Something = {something: string}
    const createPromise = () : Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = {something: "something"}
            if(data){
                resolve(data)
            }else{
                reject('failed to load data')
            }
        })
    }


    //calling create promise function
    const showData = async() : Promise<Something> => {
        const data: Something = await createPromise()
        return data
    }
    showData()
    
}