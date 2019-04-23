import app from '../app.mjs';

const books = [


];
const test = "test"
app.get("/api/test", (request, response) => {
    response.status(200).send("test");
});
app.post("/api/book", (req, res) => {
    console.log("i post")
    console.log(req)
    books.push(req.body)
    console.log(books)
    res.setHeader("Content-Type", 'application/json')
    res.status(200).send(JSON.stringify(books))
})