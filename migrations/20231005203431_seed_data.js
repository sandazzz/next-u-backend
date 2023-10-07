const { hashString } = require('../utils')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
  const hashed = await hashString('admin')
  await knex('user').insert([
    {
      email: 'admin@example.com',
      username: 'admin',
      bio: 'this is a test bio',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.gp8Zb6HFFMkw0eQtwwtLBi7OJtlO6SQ0PN_IR-Uz8fg',
      password: hashed,
    },
  ])
  await knex('article').insert([
    {
      title: 'How to deploy a website',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description: 'A sample article description.',
      slug: 'article1',
      favorited: false,
      favoritesCount: 0,
      tagList: ['sample', 'test'],
      userId: 1,
    },
  ])

  await knex('article').insert([
    {
      title: 'How to learn javascript',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      description: 'A sample article description.',
      slug: 'article2',
      favorited: false,
      favoritesCount: 0,
      tagList: ['another tag'],
      userId: 1,
    },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return Promise.resolve()
}
