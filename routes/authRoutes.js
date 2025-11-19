const  express = require('express');
const router = express.Router();

const {
    registerUser,
    authUser,
    getUserProfile,

} = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', getUserProfile);

module.exports = router;