const asyncHandler = require('express-async-handler');
const Course = require('../models/Course');

// @desc   Fetch all courses
// @route  GET /api/courses
// @access Public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

// @desc   Create a course
// @route  POST /api/courses
// @access Private (Instructors only)
const createCourse = asyncHandler(async (req, res) => {
  const { title, price, description, category } = req.body;

  const course = new Course({
    title,
    price,
    description,
    category,
    instructor: req.user._id,
  });

  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
});

module.exports = { getCourses, createCourse };