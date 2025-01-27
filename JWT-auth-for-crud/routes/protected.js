const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Protected route example
router.get('/profile', auth, (req, res) => {
  res.json({
    message: 'Protected route accessed successfully',
    user: req.user
  });
});

module.exports = router;