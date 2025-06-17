const db = require("../db");

async function getAuthorById(req, res) {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        res.status(404).send("Author not found");
        return;
    }
    
    res.send(`Author Name: ${author.name}`);
};

async function getAuthors(req, res) {
    const authors = await db.getAuthors();

    if (!authors) {
        res.status(404).send("No authors available");
        return;
    }
    res.send(authors);
}

module.exports = { getAuthorById, getAuthors };