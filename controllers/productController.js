// d:\projects\Cousera_backend\controllers\productController.js
const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc   Create a product
// @route  POST /api/products
// @access Private
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description } = req.body;

  const product = new Product({
    name,
    price,
    description,
    user: req.user._id,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

module.exports = { getProducts, createProduct };
