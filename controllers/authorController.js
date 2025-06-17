const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getAuthorById = asyncHandler(async (req, res) => {
    const { authorId } = req.params;
    const author = await db.getAuthorById(Number(authorId));
    if (!author) {
        throw new CustomNotFoundError("Author not found");
    }
    res.send(`Author Name: ${author.name}`);

});

const getAuthors = asyncHandler(async (req, res) => {
    const authors = await db.getAuthors();

    if (!authors) {
        throw new CustomNotFoundError("No Authors available");
    }
    res.render("authorsList", { authors: authors});
});

module.exports = { getAuthorById, getAuthors };