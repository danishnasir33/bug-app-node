/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user_projects', function (table) {
    table.integer('user_id').unsigned().notNullable();
    table.integer('project_id').unsigned().notNullable();

    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .foreign('project_id')
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE');

    table.primary(['user_id', 'project_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('user_projects');
};
