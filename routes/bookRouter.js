const { Router } = require("express");
const bookRouter = Router();
const { getBooks, getBookById, getBookReservation } = require("../controllers/bookController");

bookRouter.get("/:bookId/reserve", getBookReservation);

bookRouter.get("/:bookId", getBookById);

// Where / = /books/
bookRouter.get("/", getBooks);

module.exports = bookRouter;


//POST /books/:bookId/reserve