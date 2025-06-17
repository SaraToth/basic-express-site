const db = require("../db");

async function getBooks(req, res) {
    const books = await db.getBooks();

    if (!books) {
        res.status(404).send("No books are available");
    };

    res.send(books);
};

async function getBookReservation(req, res) {
    const { bookId } = req.params;
    const book = await db.getBookById(Number(bookId));
    if (!book) {
        res.status(404).send("Book not found");
    }
    res.send(`Would you like to reserve ${book.title}?`);
};

async function getBookById(req, res) {
    const { bookId } = req.params;

    const book = await db.getBookById(Number(bookId));

    if (!book) {
        res.status(404).send("Book not found");
    }

    res.send(`Book title: ${book.title}`);
};

module.exports = { getBookById, getBooks, getBookReservation };