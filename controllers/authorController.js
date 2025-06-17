const db = require("../db");
const asyncHandler = require("express-async-handler");

const getAuthorById = asyncHandler(async (req, res) => {
    const { authorId } = req.params;
    const author = await db.getAuthorById(Number(authorId));
    if (!author) {
        res.status(404).send("Author not found");
        return;
    }
    res.send(`Author Name: ${author.name}`);

});

const getAuthors = asyncHandler(async (req, res) => {
    const authors = await db.getAuthors();

    if (!authors) {
        res.status(404).send("No authors available");
        return;
    }
    res.send(authors);
});

module.exports = { getAuthorById, getAuthors };