const db = require("../db");
const asyncHandler = require("express-async-handler");

const getBooks = asyncHandler(async (req, res) => {
    const books = await db.getBooks();

    if (!books) {
        res.status(404).send("No books are available");
    };

    res.send(books);
});

const getBookReservation = (async (req, res) => {
    const { bookId } = req.params;
    const book = await db.getBookById(Number(bookId));
    if (!book) {
        res.status(404).send("Book not found");
    }
    res.send(`Would you like to reserve ${book.title}?`);
});

const getBookById = asyncHandler(async (req, res) => {
    const { bookId } = req.params;

    const book = await db.getBookById(Number(bookId));

    if (!book) {
        res.status(404).send("Book not found");
    }

    res.send(`Book title: ${book.title}`);
});

module.exports = { getBookById, getBooks, getBookReservation };