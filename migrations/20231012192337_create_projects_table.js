/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('project_id').primary();
    table.string('project_name').notNullable();
    table.text('project_description').notNullable();

    table.integer('manager_id').unsigned();
    table
      .foreign('manager_id')
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('projects');
};
