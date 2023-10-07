/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('user', function (table) {
      table.increments('id').primary()
      table.string('email', 255)
      table.string('username', 255).unique()
      table.string('bio', 255)
      table.string('image', 255).defaultTo('https://api.realworld.io/images/demo-avatar.png')
      table.string('token', 255)
      table.string('password', 255)
      table.timestamp('createdAt').defaultTo(knex.fn.now(3))
      table.timestamp('updatedAt').defaultTo(knex.fn.now(3))
    })
    .createTable('article', function (table) {
      table.increments('id').primary()
      table.string('title', 255)
      table.string('body', 255)
      table.string('description', 255)
      table.string('slug', 255).unique()
      table.boolean('favorited')
      table.integer('favoritesCount')
      table.specificType('tagList', 'text[]')
      table
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
      table.timestamp('createdAt').defaultTo(knex.fn.now(3))
      table.timestamp('updatedAt').defaultTo(knex.fn.now(3))
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('article').dropTable('user')
}
