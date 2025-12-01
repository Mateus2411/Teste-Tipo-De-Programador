const express = require('express');
const router = express.Router();
const { register, login, usersDb } = require('../controllers/authControllers');

router.post('/register', register);
router.post('/login', login);
router.get('/banco', usersDb);

module.exports = router;
