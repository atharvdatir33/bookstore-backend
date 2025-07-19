const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');

const app = express();
app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
