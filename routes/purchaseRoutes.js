const express = require('express');
const router = express.Router();
const { addPurchase } = require('../controllers/purchaseController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, addPurchase);

module.exports = router;
