# Book library system

## Description
A simple web using Openlibrary public api to fetch data and display various results!

## Entity definition
- Books
    - bib_key : string
    - title : string
- Authors
    - name : string
- Subject
    - name : string
- Publishers
    - name : string
- Publish_place
    - name : string
- Publish_date
    - date : string
- Links
    - url : string
    - title : string (Author's website)
- Cover
    - medium : string
- Number_of_pages
    - number : int

## API definition
- POST /api/search/{string}
        - 400 : Invalid input.
 - GET /api/search/books
        - 404 : Results not found.
 - GET /api/list
        - 404 : Result not found.
 - GET /api/books/{bibkey}
        - 400 : Invalid inout.
        - 404 : Result not found.
  - DELETE api/list/{id}
        - 400 : Invalid inout.
        - 401 : No authorization.
  - POST /api/list/{id}
        - 401 : No authorization

## UI definition
The view is going to be based on displaying a single book. There's going to be a search bar and the found results
are going to be showcased in the middle. There's also going to be a small menu at the left of the screen to navigate.
- https://wireframe.cc/ncspyA
