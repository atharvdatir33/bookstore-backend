const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample book data
let books = {
  "123456": {
    isbn: "123456",
    title: "Node.js Basics",
    author: "John Doe",
    reviews: {}
  },
  "654321": {
    isbn: "654321",
    title: "Learning Express",
    author: "Jane Smith",
    reviews: {}
  }
};

let users = {}; // username: password

// Task 1: Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
app.get('/books/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  if (book) res.json(book);
  else res.status(404).send('Book not found');
});

// Task 3: Get books by Author
app.get('/books/author/:author', (req, res) => {
  const result = Object.values(books).filter(
    book => book.author.toLowerCase() === req.params.author.toLowerCase()
  );
  res.json(result);
});

// Task 4: Get books by Title
app.get('/books/title/:title', (req, res) => {
  const result = Object.values(books).filter(
    book => book.title.toLowerCase() === req.params.title.toLowerCase()
  );
  res.json(result);
});

// Task 5: Get book review
app.get('/books/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  if (book) res.json(book.reviews);
  else res.status(404).send('Book not found');
});

// Task 6: Register new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).send('User already exists');
  }
  users[username] = password;
  res.send('User registered successfully');
});

// Task 7: Login user
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Task 8: Add/Modify book review
app.put('/books/review/:isbn', (req, res) => {
  const { username, review } = req.body;
  const book = books[req.params.isbn];
  if (book) {
    book.reviews[username] = review;
    res.send('Review added/updated');
  } else {
    res.status(404).send('Book not found');
  }
});

// Task 9: Delete book review by user
app.delete('/books/review/:isbn/:username', (req, res) => {
  const { isbn, username } = req.params;
  const book = books[isbn];
  if (book && book.reviews[username]) {
    delete book.reviews[username];
    res.send('Review deleted');
  } else {
    res.status(404).send('Book or review not found');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
