# Book library system

## Description
A simple web using Openlibrary public api to fetch data and display various results!

## Entity definition
- Books
    - bib_key : string
    - title : string, min: 1, max: 12000
- Authors
    - name : string, min: 1, max: 100
- Subject
    - name : string, min: 1, max: 50
- Publishers
    - name : string, min: 1, max: 100
- Publish_place
    - name : string, min: 1, max: 100
- Publish_date
    - date : string, YYYY:MM:DD
- Links
    - url : string, url
    - title : string (Author's website), url
- Cover
    - medium : string, url
- Number_of_pages
    - number : int, min: 1, max: 14000 

## API definition
- POST /api/search/{string}
    - 400 : Invalid input.
- GET /api/search/books
    - 400 : Results not found.
- GET /api/list/{id}
    - 400 : Result not found.
    - 400 : No authorization.
- GET /api/books/{bibkey}
    - 400 : Invalid input.
    - 400 : Result not found.
- DELETE api/list/{id}/{bibkey}
    - 400 : Invalid input.
    - 400 : No authorization.
- POST /api/list/{id}/{bibkey}
    - 400 : No authorization

## UI definition
The view is going to be based on displaying a single book. There's going to be a search bar and the found results
are going to be showcased in the middle. There's also going to be a small menu at the left of the screen to navigate.
- https://wireframe.cc/ncspyA
