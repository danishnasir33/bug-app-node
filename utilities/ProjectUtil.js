const {
  ErrorCodes,
  UserConstants,
  ProjectConstants
} = require('../constants');

const {
  Validators,
  Exception
} = require('../helpers')

class ProjectUtil {

  static validateCreateProjectRequest (data) {

    if (!data || (!data.project_name)) {

      console.log(`validateCreateProjectRequest:: Invalid data to create project. data:: `, data);

      throw new Exception(ProjectConstants.MESSAGES.INVALID_DATA_TO_CREATE_PROJECT, ErrorCodes.BAD_REQUEST, { reportError: true }).toJson();

    }

    if (!Validators.isValidStr(data.project_name)) {

      console.log(`validateCreateProjectRequest:: Project name is not valid. data:: `, data);

      throw new Exception(ProjectConstants.MESSAGES.INVALID_PROJECT_NAME, ErrorCodes.BAD_REQUEST, { reportError: true }).toJson();

    }

    if (!Validators.isValidStr(data.project_description)) {

      console.log(`validateCreateProjectRequest:: Project description is not valid. data:: `, data);

      throw new Exception(ProjectConstants.MESSAGES.INVALID_PROJECT_DESCRIPTION, ErrorCodes.BAD_REQUEST, { reportError: true }).toJson();

    }

  }

  static validateProject (project) {

    if (!project) {

      console.log(`validateProject:: Project does not exist. project:: `, project);

      throw new Exception(ProjectConstants.MESSAGES.PROJECT_DOES_NOT_EXIST, ErrorCodes.DOCUMENT_NOT_FOUND, { reportError: true }).toJson();

    }

  }

}

module.exports = ProjectUtil;