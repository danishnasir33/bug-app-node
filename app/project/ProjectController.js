const ProjectManager = require('./ProjectManager');

const {
  ErrorCodes,
  ProjectConstants
} = require('../../constants');

const { Validators } = require('../../helpers')

class ProjectController {

  static async createProject(req, res) {

    try {

      const project = await ProjectManager.createProject(req.user, req.body);

      res.json({
        success: true,
        data: project
      });

    } catch (err) {

      console.log(`createProject:: Request to create project failed. data:: `, req.body, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : ProjectConstants.MESSAGES.CREATING_PROJECT_FAILED
      });

    }

  }

  static async getProjectsForUser(req, res) {

    try {

      const projects = await ProjectManager.getProjectsForUser(req.user.user_id);

      res.json({
        success: true,
        data: projects
      });

    } catch (err) {

      console.log(`getProjectsForUser:: Request to fetch projects failed. data:: `, req.body, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : ProjectConstants.MESSAGES.FETCHING_PROJECT_FAILED
      });

    }

  }

  static async getProjectsForManager(req, res) {

    try {

      const projects = await ProjectManager.getProjectsForManager(req.user.user_id);

      res.json({
        success: true,
        data: projects
      });

    } catch (err) {

      console.log(`getProjectsForManager:: Request to fetch projects failed. data:: `, req.body, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : ProjectConstants.MESSAGES.FETCHING_PROJECT_FAILED
      });

    }

  }

  static async deleteProject(req, res) {

    try {

      const project = await ProjectManager.deleteProject(req.user, req.body);

      res.json({
        success: true,
        data: project
      });

    } catch (err) {

      console.log(`deleteProject:: Request to delete project failed. data:: `, req.body, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : ProjectConstants.MESSAGES.DELETING_PROJECT_FAILED
      });

    }

  }

}

module.exports = ProjectController