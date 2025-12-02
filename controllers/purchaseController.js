const asyncHandler = require('express-async-handler');
const Purchase = require('../models/Purchase');
const Course = require('../models/Course');

// @desc   Create a new purchase (enroll in a course)
// @route  POST /api/v1/purchases
// @access Private
const addPurchase = asyncHandler(async (req, res) => {
  const { courseId } = req.body;

  const course = await Course.findById(courseId);

  if (course) {
    const purchase = await Purchase.create({
      course: courseId,
      user: req.user._id,
    });
    res.status(201).json(purchase);
  } else {
    res.status(404);
    throw new Error('Course not found');
  }
});

module.exports = { addPurchase };