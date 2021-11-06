const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')

const aunthMiddleware = require('../middleware/auth')

router.route('/dashboard').get(aunthMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router