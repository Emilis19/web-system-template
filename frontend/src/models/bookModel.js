export const insert = (book) => fetch('/api/book', {
    method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json',
        },
  }).then(response => response.json())

export const getBooks = () => fetch('/api/books')
.then(response => response.json());

export const deleteBook = (id) => fetch(`/api/book/${id}`,
    {
        method: 'DELETE',
    })
.then(response => response.json());

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="
export const searchBooks = (query) => fetch(BASE_URL + query, 
        {
            method:"GET"
        })
    .then(response =>  response.json());

export const getFilteredBooks = (sort) => fetch(`/api/books/${sort}`)
    .then(response => response.json());