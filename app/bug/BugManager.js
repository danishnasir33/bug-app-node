const { 
  AuthUtil,
  BugUtil,
  ProjectUtil
} = require('../../utilities')

const {
  UserHandler,
  ProjectHandler,
  BugHandler
} = require('../../handlers')

class BugManager {

  static async getBugsForUser(user) {

    console.log(`getBugsForUser:: Request to get user bugs. user_id:: `, user.user_id)

    let bugs = await BugHandler.fetchBugsByUserId(user.user_id)

    return bugs

  }

  static async getProjectBugs(data) {

    console.log(`getProjectBugs:: Request to get a project bugs. project_id:: `, data.project_id)

    let project = await ProjectHandler.fetchProjectById(data.project_id)

    ProjectUtil.validateProject(project)

    let bugs = await BugHandler.fetchBugsByProjectId(project.project_id)

    return bugs

  }  

  static async createBug(user, file, data) {

    console.log(`createBug:: Request to create bug. Data:: `, data)

    BugUtil.validateCreateBugRequest(data)

    if (!data.description) {
      data.description = ''
    }
    if (!file) {
      file = ''
    }
    if (!data.deadline) {
      data.deadline = null
    }

    let developerUser = await UserHandler.fetchUserById(data.developer_user_id)
    
    AuthUtil.validateUserToAuthenticate(developerUser)

    let project = await ProjectHandler.fetchProjectById(data.project_id)

    ProjectUtil.validateProject(project)

    console.log('File object:', file);

    let bug = await BugHandler.createBug(user.user_id, file, data)

    return bug

  }

  static async deleteBug(user, bugId) {

    console.log(`deleteBug:: Request to delete a bug. bug_id:: `, bugId)

    let bug = await BugHandler.fetchBugById(bugId)

    BugUtil.validateBug(bug)

    // Check if the user has the right to delete the bug
    // if (bug.creator_user_id !== user.user_id) {
    //   throw new Error('You do not have the right to delete this bug.')
    // }

    let deletedBug = await BugHandler.deleteBugById(bug.bug_id)

    return deletedBug

  }

  static async updateBug(user, bugId, data) {

    console.log(`deleteBug:: Request to update a bug. bug_id:: `, bugId)

    let bug = await BugHandler.fetchBugById(bugId)

    BugUtil.validateBug(bug)

    // Check if the user has the right to update the bug
    // if (bug.creator_user_id !== user.user_id) {
    //   throw new Error('You do not have the right to update this bug.')
    // }

    let updatedBug = await BugHandler.updateBugById(bug.bug_id, data)

    return updatedBug

  }

}

module.exports = BugManager