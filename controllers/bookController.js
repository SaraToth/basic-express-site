const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getBooks = asyncHandler(async (req, res) => {
    const books = await db.getBooks();

    if (!books) {
        throw new CustomNotFoundError("No books are available");
    };

    res.render("booksList", { books: books});
});

const getBookReservation = asyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const book = await db.getBookById(Number(bookId));
    if (!book) {
        throw new CustomNotFoundError("Book not found");
    }
    res.send(`Would you like to reserve ${book.title}?`);
});

const getBookById = asyncHandler(async (req, res) => {
    const { bookId } = req.params;

    const book = await db.getBookById(Number(bookId));

    if (!book) {
        throw new CustomNotFoundError("Book not found");
    }

    res.send(`Book title: ${book.title}`);
});

module.exports = { getBookById, getBooks, getBookReservation };