{
    //Promise
    type ToDo = { userId: number, id: number, title: string, completed: string }

    const getToDo = async() : Promise<ToDo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();

        return data
    }
    const data  =   getToDo()
    console.log(data);

    // Custom  Promise
    type Something = {something: string}
    // const createPromise = () : Promise<Something> => {
    //     return new Promise<Something>((resolve, reject) => {
    //         const data: Something = {something: "something"}
    //         if(data){
    //             resolve(data)
    //         }else{
    //             reject('failed to load data')
    //         }
    //     })
    // }

    const createPromise = () : Promise<Something> => {
        return new  Promise<Something> ((resolve, reject) => {
            const data : Something  = {something: "something"}

            if(data){
                resolve(data)
            }else{
                reject("failed to load data")
            }
        })
    }

    //calling create promise function
    const showData = async () :  Promise<Something> => {
        const data : Something = await createPromise();
        // console.log(data, "D");
        return data
    }
    showData()







}