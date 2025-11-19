// d:\projects\Cousera_backend\routes\productRoutes.js
const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getProducts).post(protect, createProduct);

module.exports = router;
