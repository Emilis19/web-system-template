export const insert = (book) => fetch('/api/book', {
    method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json',
        },
  }).then(response => response.json())

  

