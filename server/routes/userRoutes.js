const express = require('express');
const router = express.Router();

// Dummy profile route
router.get('/profile', (req, res) => {
  res.json({ message: 'User profile data will appear here.' });
});

module.exports = router;
