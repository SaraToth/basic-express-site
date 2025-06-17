const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const authorRouter = require("./routes/authorRouter");

app.use("/authors", authorRouter);
app.use("/", indexRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log("routing");
});


/*GET /about
GET /contact
POST /contact

GET /books
GET /books/:bookId
GET /books/:bookId/reserve
POST /books/:bookId/reserve

GET /authors
GET /authors/:authorId
*/