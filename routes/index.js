const express = require('express')
const router = express.Router();
const main = require('./page/main')

router.get('/', main)

module.exports = router