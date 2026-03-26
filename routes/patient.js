const express = require('express');
const router = express.Router();
const db = require('../db');
const {register, login, logout} = require('../auth')


router.get('/', async (req, res) => {
    const [rows] = await db.query("select * from patient")
    res.json(rows)
});

router.post('/register', register);
router.post('/login', login)
router.get('/logout', logout)

// Booking - POST

router.post('/book', async (req, res) => {

});

module.exports = router;
