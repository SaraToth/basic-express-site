const { Router } = require("express");
const bookRouter = Router();

bookRouter.get("/:bookId/reserve", (req, res) => {
    res.send("Get book reservation info");
});

bookRouter.get("/:bookId", (req, res) => {
    res.send("Book info");
});

// Where / = /books/
bookRouter.get("/", (req, res) => {
    res.send("all books");
});

module.exports = bookRouter;


//POST /books/:bookId/reserve