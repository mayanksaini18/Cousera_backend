const asyncHandler = require('express-async-handler');

const admin = asyncHandler(async (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'instructor')) {
    next();
  } else {
    res.status(403);
    throw new Error('Not authorized as an admin or instructor');
  }
});

module.exports = { admin };