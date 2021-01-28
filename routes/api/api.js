const express = require('express')
const router = express.Router()
const tempAndHum = require('./tempAndHum')

router.use('/tempandhum', tempAndHum)

module.exports = router