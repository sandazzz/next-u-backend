'use strict'
const database = require('../utils/database')
const { stringIsAMatch, hashString, generateToken, getUserByToken, validateToken } = require('../utils/index')

module.exports = async function (fastify, opts) {
  const log = fastify.log

  // --- LOGIN ---
  // this route should receive on the request body only two fields: email and password
  // the route should first retrieve the user from the database, filtering the SQL query by the email provided
  // once with the user retrieved, you should use the utility method "stringIsAMatch" to compare the password included in the 
  // request body with the password from the user in the database.
  // if the passwords are a match, the response of the request should include: email, user's token and username
  // if the passwords are NOT a match, the response should have a status code 401 and
  // the request body should have a "message" field with the value "invalid credentials"
  fastify.post('/api/users/login', async function (req, reply) {
  })

  // --- GET USER PROFILE ---
  // this route should use the value from "req.userId" to make a query into the "user" table with said userId.
  // the response body should be include the following fields: user.email, user.username and user.token
  fastify.route({
    url: '/api/user',
    method: 'GET',
    preHandler: validateToken,
    handler: async (req, reply) => {
      // add the route implementation here
    }
  })

  // --- SIGN UP ---
  // this route should receive the data needed for creating a new user (username, email and password) on the request body
  // with those fields it should insert a new row in the User table using the database util
  // the response of the request should include: email, users'bio, user's image, user's token and username
  fastify.route({
    url: '/api/users',
    method: 'POST',
    handler: async (req, reply) => {
      // add the route implementation here
    }
  })

  // --- do not modify ---
  fastify.put('/api/user', async (req, reply) => req.body)
  // --- do not modify ---
  fastify.get('/api/profiles/:username', async (req, reply) => {
    const user = await database('user').select(['username', 'bio', 'image']).where({ username: req.params.username }).first()
    return {
      profile: user
    }
  })
}
