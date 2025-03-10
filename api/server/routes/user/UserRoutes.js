const express = require('express');
const { register, login, logout, getTherapists, createTherapist, changePassword } = require('../../controllers/user/UserController.js');
const { refreshToken } = require('../../controllers/user/RefreshTokenController.js');
const { authorization } = require('../../../auth/tokenValidator.js');

const router = express.Router();

router.post('/register', register);
router.get('/getTherapists', authorization, getTherapists);
router.post('/createTherapist', authorization, createTherapist);
router.post('/login', login);
router.post('/logout', authorization, logout);
router.post('/refresh-token', refreshToken);
router.post("/changePassword", authorization, changePassword);


module.exports = router;
