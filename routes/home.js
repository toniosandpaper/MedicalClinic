const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    res.render('./home/home.ejs',
        {
            name: "Andrew"
        }
    )
});


module.exports = router;    
