const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

//404 Handler for non existing pages
app.use((req, res, next) => {
    res.status(404).send("This page does not exist");
});

// Error Middleware Handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("routing");
});