{
    type Book = {
        title: string;
        author: string;
        yearPublished: number
    }
    type BookKeys = keyof Book;

    const getBookProperty = <T, K extends keyof T>(book: T, key: K) : T[K]=> {
        return book[key]
    }

    const myBook: Book ={
        title: "The Grate ",
        author: "mezba",
        yearPublished: 3030
    }

    console.log(getBookProperty(myBook, "author"));
}
