const express = require('express');
const router = express.Router();
const message = require('../Controllers/Controller')
const sumint = require('../Controllers/Controller')


router.get('/mesgs',message)
router.post('/calculatesum',sumint)





module.exports = router;