const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("routing");
});