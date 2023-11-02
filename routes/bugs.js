const express = require('express')
const router = express.Router()

const BugController = require("../app/bug/BugController")
const { CheckAuth } = require("../middleware");
const PROJECTS_ROUTES_PREFIX = "/bugs"

const {
  Multer
} = require('../middleware')

const upload = Multer.setupMulter()

router.get(`${PROJECTS_ROUTES_PREFIX}`, CheckAuth.authenticate, BugController.getBugsForUser)

router.post(`/project${PROJECTS_ROUTES_PREFIX}`, CheckAuth.authenticate, BugController.getProjectBugs)

router.post(`${PROJECTS_ROUTES_PREFIX}`, CheckAuth.authenticate, upload.single('screen_shot'), BugController.createBug)

router.delete(`${PROJECTS_ROUTES_PREFIX}/:bugId`, CheckAuth.authenticate, BugController.deleteBug)

router.patch(`${PROJECTS_ROUTES_PREFIX}/:bugId`, CheckAuth.authenticate, BugController.updateBug)


module.exports = router