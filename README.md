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
- [ ] Define specific service (konkrečios paslaugos) API methods that WEB system is going to use
- [ ] Optionally define additional API methods that WEB system is going to expose
- [ ] API should have at least 4 methods
    - [ ] A method to return entity by ID. Should not have request body
    - [ ] A method to return multiple entities (Array) by ID. This method should support at least one header value to:
        - [ ] Return only entities that match pattern in one of its attributes
        - [ ] Return 10 entities starting provided index
        - [ ] Return sorted entities by one of its attributes (both ascending and descending)
        - [ ] Other (should be approved by Product Owner (PO))
    - [ ] A method to remove entity by ID. Returns removed entity. Should not have request body
    - [ ] A method to update entity by ID. Accepts entity to update and returns updated entity
- [ ] Each method should have HTTP method defined
- [ ] Each method should have URI defined (use {id} as entity ID placeholder)
- [ ] Should return all 4xx errors in unified format. Define format using `joi` language
- [ ] Should return all 5xx errors in unified format. Define format using `joi` language

## UI definition
The view is going to be based on displaying a single book. There's going to be a search bar and the found results
are going to be showcased in the middle. There's also going to be a small menu at the left of the screen to navigate.
- https://wireframe.cc/ncspyA
