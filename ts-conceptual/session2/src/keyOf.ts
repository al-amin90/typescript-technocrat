{
    type Book = {
        title: string;
        author: string;
        yearPublished: number
    }
    type BookKeys = keyof Book;

    const getBookProperty =<B, K extends keyof B>(book:B, key:K): B[K] => {
        return book[key]
    }

    const myBook: Book ={
        title: "The Grate ",
        author: "mezba",
        yearPublished: 3030
    }

    console.log(getBookProperty(myBook, "author"));
}
