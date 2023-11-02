const UserManager = require('./UserManager')

const {
  ErrorCodes,
  UserConstants
} = require('../../constants')

const { Validators } = require('../../helpers')

class UserController {

  static async getUser(req, res) {

    try {

      const user = await UserManager.getUser(req.user);

      res.json({
        success: true,
        data: user
      });

    } catch (err) {

      console.log(`getUser:: Request to fetch user failed. userId:: ${req.user.user_id} user:: ${req.user.email} params:: ${JSON.stringify(req.params)}`, err);

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : UserConstants.MESSAGES.FETCHING_USER_FAILED
      });

    }

  }

  static async getDevelopers(req, res) {

    try {

      const developers = await UserManager.getDevelopers(req.user);

      res.json({
        success: true,
        data: developers
      });

    } catch (err) {

      console.log(`getUser:: Request to fetch developers failed. userId:: ${req.user.user_id} user:: ${req.user.email} params:: ${JSON.stringify(req.params)}`, err);

      return res.status(Validators.validateCode(err.code, ErrorCodes.INTERNAL_SERVER_ERROR) || ErrorCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.reportError ? err.message : UserConstants.MESSAGES.FETCHING_DEVELOPERS_FAILED
      });

    }

  }

}

module.exports = UserController;