import app from '../app.mjs';

const books = [


];

app.post('/api/book', (req, res) => {
    books.push(req.body)
    res.send(books)
})