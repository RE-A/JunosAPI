const express = require('express')
const router = express.Router();
const main = require('./page/main')
const api = require('./api/api')

router.get('/', main)
router.use('/api', api)

module.exports = router