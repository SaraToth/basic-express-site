const { Router } = require("express");
const bookRouter = Router();
const { getBooks, getBookById, getBookReservation } = require("../controllers/bookController");

// "/" = /books/
bookRouter.get("/:bookId/reserve", getBookReservation);
bookRouter.get("/:bookId", getBookById);
bookRouter.get("/", getBooks);

module.exports = bookRouter;