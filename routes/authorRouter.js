const { Router } = require("express");
const authorRouter = Router();

// Where / = /authors/
authorRouter.get("/", (req, res) => {
    res.send("all authors");
});

authorRouter.get("/:authorId", (req, res) => {
    res.send("author info");
});

module.exports = authorRouter;