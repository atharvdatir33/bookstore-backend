const jwt = require('jsonwebtoken');
const SECRET = 'your_secret';

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch {
    res.status(403).json({ message: 'Forbidden' });
  }
}

module.exports = { authenticate, SECRET };
