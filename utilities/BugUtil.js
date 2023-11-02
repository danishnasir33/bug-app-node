const {
  ErrorCodes,
  BugConstants
} = require('../constants');

const {
  Validators,
  Exception
} = require('../helpers')

class BugUtil {

  static validateCreateBugRequest (data) {

    if (!data || (!data.title)) {

      console.log(`validateCreateBugRequest:: Invalid data to create bug. data:: `, data);

      throw new Exception(BugConstants.MESSAGES.INVALID_DATA_TO_CREATE_BUG, ErrorCodes.BAD_REQUEST, { reportError: true }).toJson();

    }

    if (!Validators.isValidStr(data.title)) {

      console.log(`validateCreateBugRequest:: Bug title is not valid. data:: `, data);

      throw new Exception(BugConstants.MESSAGES.INVALID_BUG_TITLE, ErrorCodes.BAD_REQUEST, { reportError: true }).toJson();

    }

    if (!Validators.isValidStr(data.bug_type)) {

      console.log(`validateCreateBugRequest:: Bug type is not valid. data:: `, data);

      throw new Exception(BugConstants.MESSAGES.INVALID_BUG_TYPE, ErrorCodes.BAD_REQUEST, { reportError: true }).toJson();

    }

    if (!Validators.isValidStr(data.status)) {

      console.log(`validateCreateBugRequest:: Bug status is not valid. data:: `, data);

      throw new Exception(BugConstants.MESSAGES.INVALID_BUG_STATUS, ErrorCodes.BAD_REQUEST, { reportError: true }).toJson();

    }

  }

  static validateBug (bug) {

    if (!bug) {

      console.log(`validateBug:: Bug does not exist. bug:: `, bug);

      throw new Exception(BugConstants.MESSAGES.BUG_DOES_NOT_EXIST, ErrorCodes.DOCUMENT_NOT_FOUND, { reportError: true }).toJson();

    }

  }

}

module.exports = BugUtil