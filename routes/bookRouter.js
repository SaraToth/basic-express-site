const { Router } = require("express");
const authorRouter = require("./authorRouter");
const bookRouter = Router();

bookRouter.get("/:bookId/reserve", (req, res) => {
    const { bookId } = req.params;
    res.send(`BookId: ${bookId} reservation info`);
    res.send("Get book reservation info");
});

bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`BookId: ${bookId} info`);
});

// Where / = /books/
bookRouter.get("/", (req, res) => {
    res.send("all books");
});

module.exports = bookRouter;


//POST /books/:bookId/reserve