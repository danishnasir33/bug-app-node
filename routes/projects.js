const express = require('express')
const router = express.Router()

const ProjectController = require("../app/project/ProjectController")
const { CheckAuth } = require("../middleware");
const PROJECTS_ROUTES_PREFIX = "/projects"

router.get(`/user${PROJECTS_ROUTES_PREFIX}`, CheckAuth.authenticate, ProjectController.getProjectsForUser)

router.get(`/manager${PROJECTS_ROUTES_PREFIX}`, CheckAuth.authenticate, ProjectController.getProjectsForManager)

router.post(`${PROJECTS_ROUTES_PREFIX}`, CheckAuth.authenticate, ProjectController.createProject)

router.delete(`${PROJECTS_ROUTES_PREFIX}`, CheckAuth.authenticate, ProjectController.deleteProject)

module.exports = router