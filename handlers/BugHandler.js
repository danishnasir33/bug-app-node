const {
  knex,
  Validators
} = require('../helpers');

class BugHandler {

  static createBug(userId, file, data) {
    return knex('bugs').insert({
      title: data.title,
      description: data.description,
      screen_shot: file.path,
      bug_type: data.bug_type,
      status: data.status,
      deadline: data.deadline,
      creator_user_id: userId,
      developer_user_id: data.developer_user_id,
      project_id: data.project_id
    }).returning('*');
  }

  static fetchBugById(id) {

    return knex('bugs')
      .select('*')
      .where('bug_id', Validators.parseInteger(id, -1))
      .first();
  }

  static async deleteBugById(id) {
    // Fetch the bug
    const deletedBug = await knex('bugs')
      .where('bug_id', Validators.parseInteger(id, -1))
      .first();

    // Delete the bug
    await knex('bugs')
      .where('bug_id', Validators.parseInteger(id, -1))
      .del();

    // Return the deleted bug
    return deletedBug;
  }

  static deleteAssociatedbugs(projectId) {

    return knex('bugs')
      .where('project_id', projectId)
      .del();   
  }

  static fetchBugsByUserId(userId) {
    return knex('bugs')
      .select('*')
      .where('creator_user_id', userId)
      .orWhere('developer_user_id', userId);
  }

  static fetchBugsByProjectId(projectId) {
    return knex('bugs')
      .select('*')
      .where('project_id', projectId)
  }

  static updateBugById(bugId, updateData) {
    return knex('bugs')
      .where({ bug_id: bugId })
      .update(updateData)
      .returning('*');
  }

}

module.exports = BugHandler