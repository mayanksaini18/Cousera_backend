const express = require('express');
const router = express.Router();
const {
  getCourses,
  createCourse,
} = require('../controllers/courseController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.route('/').get(getCourses).post(protect, admin, createCourse);

module.exports = router;
