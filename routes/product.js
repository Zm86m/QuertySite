// routes/product.js
const express = require('express');
const router = express.Router();

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.render('product', { title: 'Product Page', productId });
});

module.exports = router;
