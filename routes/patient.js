const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    const [rows] = await db.query("select * from patient")
    res.json(rows)
});


// Booking - POST

router.post('/book', async (req, res) => {

});

module.exports = router;
