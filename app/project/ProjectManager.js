const { 
  ProjectUtil,
  AuthUtil
} = require('../../utilities')

const {
  UserHandler,
  ProjectHandler,
  BugHandler
} = require('../../handlers')

class ProjectManager {

  static async createProject(user, data) {

    console.log(`createProject:: Request to create project. Data:: `, data)

    ProjectUtil.validateCreateProjectRequest(data)

    let project = await ProjectHandler.createProject(user.user_id, data)

    project = project[0];

    console.log('project: ', project)

    await ProjectHandler.createUserProject(user.user_id, project.project_id)

    return project

  }

  static async getProjectsForUser(userId) {

    console.log(`getProjectsForUser:: Request to get user projects. user_id:: `, userId)

    let projects = await ProjectHandler.getProjectsByUserId(userId)

    return projects

  }

  static async getProjectsForManager(userId) {

    console.log(`getProjectsForManager:: Request to get user projects. user_id:: `, userId)

    let projects = await ProjectHandler.getProjectsByManagerId(userId)

    return projects

  }

  static async deleteProject(user, data) {

    console.log(`deleteProject:: Request to delete a project. project_id:: `, data.project_id)

    let project = await ProjectHandler.fetchUserProject(user.user_id, data.project_id)

    ProjectUtil.validateProject(project)

    let deletedProject = await ProjectHandler.deleteProject(project.project_id)

    return deletedProject

  }

}

module.exports = ProjectManager