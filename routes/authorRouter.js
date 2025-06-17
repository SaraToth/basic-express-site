const { Router } = require("express");
const { getAuthorById, getAuthors } = require("../controllers/authorController");
const authorRouter = Router();

// Where / = /authors/
authorRouter.get("/", getAuthors);

authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;