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
    return authors;
};

async function getBooks() {
    return books;
};

module.exports = { getAuthorById, getAuthors, getBooks, getBookById };