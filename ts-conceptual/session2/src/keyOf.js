"use strict";
{
    const getBookProperty = (book, key) => {
        return book[key];
    };
    const myBook = {
        title: "The Grate ",
        author: "mezba",
        yearPublished: 3030
    };
    console.log(getBookProperty(myBook, "author"));
}
