'use strict'
const database = require('../utils/database')
const { validateToken, getTableColumns } = require('../utils/index')

module.exports = async function (fastify, opts) {
  // "req" represents the incoming request and it's read-only
  // it will have the request body, querystring, headers, etc.
  // "reply" represents what the response request will be.
  // you can change its status code, body, headers, etc


  // --- GET ARTICLES ---
  // this route should receive on the querystring (req.query) "author", "limit" and "offset" fields
  // with those fields it should create a database query to the table Articles, filtering the amount of rows returned by the limit field
  // and offsetting the results by the offset field
  // if "author" field is present then the "author" field should be used to filter the results by using "author" as username
  // the response body should be something like the following:
  // {
  //   articles: [
  //     article1,
  //     article2,
  //     ...
  //   ]
  // }
  // each article item should include the article's author fields: username, email, image and bio
  // example for article1:
  // {
  //   title: 'hey',
  //   description: 'this is a test article',
  //   author: {
  //     username: 'test user',
  //     email: 'test@gmail.com',
  //     image: '',
  //     bio: ''
  //   }
  // }
  fastify.route({
    method: 'GET',
    url: '/api/articles',
    handler: async function (req, reply) {
    }
  })


  // --- GET AN ARTICLE ---
  fastify.route({
    url: '/api/articles/:articleSlug',
    method: 'GET',
    handler: async (req, reply) => {
    }
  })



  // --- CREATE AN ARTICLE ---
  // the route should receive the following fields on the request body: article.body, article.description, article.tagList, article.title.
  // with the previous mentioned fields plus the userId with the value from "req.userId" it should insert an article into the "article" table.
  // the request body should include the following fields: article.body, article.description, article.tagList, article.title
  fastify.route({
    url: '/api/articles',
    method: 'POST',
    preHandler: validateToken,
    handler: async (req, reply) => {
      // add the route implementation here
    }
  })

  // --- do not modify ---
  fastify.get('/api/articles/feed', async (req, reply) => ({ articles: [] }))
  // --- do not modify ---
  fastify.put('/api/articles/:articleSlug', async (req, reply) => ({}))
  // --- do not modify ---
  fastify.delete('/api/articles/:articleSlug', async (req, reply) => ({}))
}
