# Books library system

## Description
A simple web using Google books public api to fetch data, create lists and display various search results!

## Entity definition
- Books
    - id : string, min: 10, max: 50
    - title : string, min: 1, max: 12000
    - author : string, min: 1, max: 100
    - publisher : string, min: 1, max: 100
    - publishedDate : string, YYYY:MM:DD
    - infoLink : string, url
    - thumbnail : string, url

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
    
## UI definition
The view is going to be based on displaying a single book. There's going to be a search bar and the found results
are going to be showcased in the middle. There's also going to be a small menu at the left of the screen to navigate.
- https://wireframe.cc/ncspyA
