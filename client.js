const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Task 10: Get all books (async/await)
async function getAllBooks() {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    console.log('All Books:', res.data);
  } catch (err) {
    console.error(err);
  }
}

// Task 11: Get book by ISBN (Promises)
function getBookByISBN(isbn) {
  axios.get(`${BASE_URL}/books/isbn/${isbn}`)
    .then(res => {
      console.log('Book by ISBN:', res.data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Task 12: Get books by Author (async/await)
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log('Books by Author:', res.data);
  } catch (err) {
    console.error(err);
  }
}

// Task 13: Get books by Title (async/await)
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log('Books by Title:', res.data);
  } catch (err) {
    console.error(err);
  }
}

// Call examples:
getAllBooks();
getBookByISBN("123456");
getBooksByAuthor("John Doe");
getBooksByTitle("Node.js Basics");
