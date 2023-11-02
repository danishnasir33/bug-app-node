/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('bugs', function (table) {
    table.increments('bug_id').primary();
    table.string('title').notNullable().unique();
    table.text('description');
    table.string('screen_shot');
    table.enu('bug_type', ['feature', 'bug']).notNullable();
    table.enu('status', ['new', 'started', 'completed', 'resolved']).notNullable();
    table.date('deadline');

    table.integer('creator_user_id').unsigned().notNullable();
    table.integer('developer_user_id').unsigned().notNullable();
    table.integer('project_id').unsigned().notNullable();

    table
      .foreign('creator_user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .foreign('developer_user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .foreign('project_id')
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('bugs');
};
