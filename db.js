const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
];

const books = [
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Christmas in New York" },
    { id: 3, title: "On the Road" },
];

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
}; 

async function getBookById(bookId) {
    return books.find(book => book.id === bookId);
};

async function getAuthors() {
    const authorList = [];
    authors.forEach(author => authorList.push(author.name));
    return authorList.join(", ");
};

async function getBooks() {
    const bookList = [];
    books.forEach(book => bookList.push(book.title));
    return bookList.join(", ");
};

module.exports = { getAuthorById, getAuthors, getBooks, getBookById };