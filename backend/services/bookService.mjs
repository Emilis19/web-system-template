import app from '../app.mjs';

const books = [


];
const test = "test"
app.get("/api/test", (request, response) => {
    response.status(200).send("test");
});
app.post("/api/book", (req, res) => {
    
    if(req.body.id !== null){
        let exists = false
        books.forEach(books => {
            if(books.id === req.body.id)
            {
                exists = true;
                return;
            }
        })
        if (exists){
            res.status(200).send(books)
        }
        else{
        books.push(req.body)
        res.status(200).send(JSON.stringify(books))
        }
       }
       else{
        res.status(400).send([{message: "invalid post input"}])
       }
       
    })

app.get("/api/books", (req, res) => {
    res.send(books);
});
app.delete("/api/book/:id", (req, res) => {
  const bookID = req.params.id;
  const index = books.findIndex(book => book.id === bookID);
  const removedBook = books[index];
  books.splice(index, 1);
  res.send(removedBook);
});
app.get("/api/books/:sort", (req, res) => {
    if (req.params.sort == "ascending") {
    res.send(books.sort((a, b) => (a.volumeInfo.title < b.volumeInfo.title) ? 1 : -1));
    }
    else{
    res.send(books.sort((a, b) => (a.volumeInfo.title > b.volumeInfo.title) ? 1 : -1));
    }
});