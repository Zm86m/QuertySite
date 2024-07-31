// routes/search.js
const express = require('express');
const router = express.Router();

router.get('/:query/:conditions', (req, res) => {
  const { query, conditions } = req.params;
  res.render('search', { title: 'Search Results', query, conditions });
});

module.exports = router;
