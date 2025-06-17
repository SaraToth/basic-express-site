const { Router } = require("express");
const indexRouter = Router();
const { getHome, getAbout, getContact } = require("../controllers/indexController");


indexRouter.get("/about", getAbout);
indexRouter.get("/contact", getContact);
indexRouter.get("/", getHome);

module.exports = indexRouter;
