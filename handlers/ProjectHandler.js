const {
  knex,
  Validators
} = require('../helpers');

class ProjectHandler {

  static findUserByEmail(email) {

    return knex('users')
      .select('*')
      .where('email', email)
      .first();

  }

  static createProject(userId, data) {

    return knex('projects')
      .insert({
        project_name: data.project_name,
        project_description: data.project_description,
        manager_id: userId
      })
      .returning('*');
  }

  static createUserProject(user_id, project_id) {

    return knex('user_projects')
      .insert({
        user_id,
        project_id
      });
  }

  static getProjectsByUserId(userId) {

    return knex('user_projects')
      .select('projects.*')
      .join('projects', 'user_projects.project_id', 'projects.project_id')
      .where('user_projects.user_id', userId);
  }

  static getProjectsByManagerId(managerId) {

    return knex('projects')
      .select('*')
      .where('manager_id', managerId);
  }

  static fetchUserProject(userId, projectId) {

    return knex('projects')
      .where('project_id', projectId)
      .andWhere('manager_id', userId)
      .first();  
  }

  static fetchProjectById(id) {

    return knex('projects')
      .select('*')
      .where('project_id', Validators.parseInteger(id, -1))
      .first();
  }

  // static deleteProject(projectId) {
  //   return knex('projects')
  //     .where('project_id', projectId)
  //     .del();   
  // }

  static async deleteProject(projectId) {
    // Fetch the project
    const deletedProject = await knex('projects')
      .where('project_id', projectId)
      .first();

    // Delete the project
    await knex('projects')
      .where('project_id', projectId)
      .del();

    // Return the deleted project
    return deletedProject;
  }

  static deleteAssociatedUserProjects(projectId) {

    return knex('user_projects')
      .where('project_id', projectId)
      .del();   
  }

}

module.exports = ProjectHandler