# Books library system

## Description
A simple web using React/Node/Express and Google Books API to fetch data, create list and manage it.

## API definition
- GET /api/books/{query}  - search among all the books
    - 400 : Invalid input.
    - 400 : Result not found.
- GET /api/books - get books by user
    - 400 : Result not found.
- DELETE api/book/{id} - deletes book from a list by its ID
    - 400 : Invalid input.
- POST /api/book - posts a book to user
    - 400 : Validation error
- GET /api/books/{sort} - gets books from a list and sorts them
    - 400 : Result not found.
    
