'use strict'
const database = require('../utils/database')
const { validateToken, getTableColumns } = require('../utils/index')

module.exports = async function (fastify, opts) {
  // "req" represents the incoming request and it's read-only
  // it will have the request body, querystring, headers, etc.
  // "reply" represents what the response request will be.
  // you can change its status code, body, headers, etc

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

  // --- GET AN ARTICLE ---
  // this route should receive the articleSlug (an article's field) as "req.params.articleSlug" and should use it to generate a SQL query to the "article" table filtering by the "slug" column
  // additionally, it should query the "user" table filtering by the userId present in the article previously retrieved
  // the response body should include all the fields from the table "article", plus should include an "author" field with:
  // username, bio and image
  // example response:
  // {
  //   article: {
  //     title: 'how to learn javascript',
  //     description: 'this is complicated',
  //     ...
  //     author: {
  //       username: 'admin',
  //       bio: 'an admin',
  //       image: 'image.jpg',
  //     }
  //   }
  // }
  fastify.route({
    url: '/api/articles/:articleSlug',
    method: 'GET',
    handler: async (req, reply) => {
      // add the route implementation here
    }
  })

  // --- GET ARTICLES ---
  // this route should receive on the querystring (req.query) "author"
  // if "author" field is present then it should be used to filter the results. "author" will be the user's username
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

  // --- do not modify ---
  fastify.get('/api/articles/feed', async (req, reply) => ({ articles: [] }))
  // --- do not modify ---
  fastify.put('/api/articles/:articleSlug', async (req, reply) => ({}))
  // --- do not modify ---
  fastify.delete('/api/articles/:articleSlug', async (req, reply) => ({}))
}
