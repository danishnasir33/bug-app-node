const Bug = Object.freeze({

  MESSAGES: {
    CREATING_BUG_FAILED: 'Something went wrong while creating the bug. Please try again.',
    FETCHING_BUG_FAILED: 'Something went wrong while fetching bugs. Please try again.',
    DELETING_BUG_FAILED: 'Something went wrong while deleting the bug. Please try again.',
    UPDATING_BUG_FAILED: 'Something went wrong while updating the bug. Please try again.',
    INVALID_DATA_TO_CREATE_BUG: 'Invalid data to create project',
    INVALID_BUG_TITLE: 'Bug title is not valid.',
    INVALID_BUG_TYPE: 'Bug type is not valid.',
    INVALID_BUG_STATUS: 'Bug Status is not valid.',
    BUG_DOES_NOT_EXIST: 'Bug does not exist.',
    SCREEN_SHOT_NOT_VALID: 'Image type is not valid. Please upload png/gif.'
  }

});

module.exports = Bug;