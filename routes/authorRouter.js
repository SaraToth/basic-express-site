const { Router } = require("express");
const authorRouter = Router();

// Where / = /authors/
authorRouter.get("/", (req, res) => {
    res.send("all authors");
});

authorRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    res.send(`Author ${authorId} info`);
});

module.exports = authorRouter;