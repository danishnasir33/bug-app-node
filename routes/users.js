const express = require('express')
const router = express.Router()

const UserController = require("../app/user/UserController")
const { CheckAuth } = require("../middleware");
const USERS_ROUTES_PREFIX = "/users"

router.get(`/developers`, CheckAuth.authenticate, UserController.getDevelopers)

router.get(`${USERS_ROUTES_PREFIX}/me`, CheckAuth.authenticate, UserController.getUser)

module.exports = router;