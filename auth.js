const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/auth');

let users = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: 'User already exists' });
  }
  users.push({ username, password });
  res.json({ message: 'User registered' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ username }, SECRET);
  res.json({ token });
});

module.exports = router;
