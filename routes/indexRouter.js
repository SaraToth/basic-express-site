const { Router } = require("express");

const indexRouter = Router();


indexRouter.get("/about", (req, res) => {
    res.send("About");
})

indexRouter.get("/contact", (req, res) => {
    res.send("Contact");
})

indexRouter.get("/", (req, res) => {
    res.send("Home");
})

module.exports = indexRouter;

/*GET /
GET /about
GET /contact
POST /contact */