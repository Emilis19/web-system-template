# Books library system

## Description
A simple web using Openlibrary public api to fetch data, create lists and display various search results!

## Entity definition
- Books
    - bib_key : string, min: 10, max: 50
    - title : string, min: 1, max: 12000
    - author_name : string, min: 1, max: 100
    - subject : string, min: 1, max: 50
    - publisher_name : string, min: 1, max: 100
    - publisher_place : string, min: 1, max: 100
    - publish_date : string, YYYY:MM:DD
    - url : string, url
    - authors_site : string, url
    - cover_medium : string, url
    - number_pages : int, min: 1, max: 14000

## API definition
- GET /api/books?title={string} - search among all the books
    - 400 : Invalid input.
    - 400 : Result not found.
- GET /api/user/books?category={category}&sort={sort} - get books by user
    - 400 : Result not found.
    - 400 : No authorization.
- GET /api/books/{bibkey} - get book by its ID
    - 400 : Invalid input.
    - 400 : Result not found.
- DELETE api/user/books/{bibkey} - deletes book from a list by its ID
    - 400 : Invalid input.
    - 400 : No authorization.
- POST /api/user/books - posts a book to user
    - 400 : No authorization
    - 400 : Validation error

## UI definition
The view is going to be based on displaying a single book. There's going to be a search bar and the found results
are going to be showcased in the middle. There's also going to be a small menu at the left of the screen to navigate.
- https://wireframe.cc/ncspyA
