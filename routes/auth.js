const express = require('express')
const router = express.Router()

const AuthController = require("../app/auth/AuthController")
const USERS_ROUTES_PREFIX = "/auth"

router.post(`${USERS_ROUTES_PREFIX}/signup`, AuthController.signup)

router.post(`${USERS_ROUTES_PREFIX}/login`, AuthController.login)

module.exports = router
