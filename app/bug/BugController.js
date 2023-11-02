const BugManager = require('./BugManager')

const {
  ErrorCodes,
  BugConstants
} = require('../../constants')

const { Validators } = require('../../helpers')

class BugController {

  static async getBugsForUser(req, res) {

    try {

      const bugs = await BugManager.getBugsForUser(req.user);

      res.json({
        success: true,
        data: bugs
      });

    } catch (err) {

      console.log(`getBugsForUser:: Request to get all bugs for user failed. data:: `, req.user, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : BugConstants.MESSAGES.FETCHING_BUG_FAILED
      });

    }

  }
  
  static async getProjectBugs(req, res) {

    try {

      const bugs = await BugManager.getProjectBugs(req.body);

      res.json({
        success: true,
        data: bugs
      });

    } catch (err) {

      console.log(`getProjectBugs:: Request to get all bugs for project failed. data:: `, req.body, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : BugConstants.MESSAGES.FETCHING_BUG_FAILED
      });

    }

  }

  static async createBug(req, res) {

    try {

      const bug = await BugManager.createBug(req.user, req.file, req.body);

      res.json({
        success: true,
        data: bug
      });

    } catch (err) {

      console.log(`createBug:: Request to create bug failed. data:: `, req.body, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : BugConstants.MESSAGES.CREATING_BUG_FAILED
      });

    }

  }

  static async deleteBug(req, res) {

    try {

      const bugId = req.params.bugId;

      const bug = await BugManager.deleteBug(req.user, bugId);

      res.json({
        success: true,
        data: bug
      });

    } catch (err) {

      console.log(`deleteBug:: Request to delete a bug failed. data:: `, bugId, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : BugConstants.MESSAGES.DELETING_BUG_FAILED
      });

    }

  }

  static async updateBug(req, res) {

    try {

      const bugId = req.params.bugId;

      const bug = await BugManager.updateBug(req.user, bugId, req.body);

      res.json({
        success: true,
        data: bug
      });

    } catch (err) {

      console.log(`updateBug:: Request to update a bug failed. data:: `, req.body, err)

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : BugConstants.MESSAGES.UPDATING_BUG_FAILED
      });

    }

  }

}

module.exports = BugController