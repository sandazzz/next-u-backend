'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => ({ ok: true }))
  fastify.get('/api/tags', async () => ({ tags: [] }))
  fastify.get('/api/articles/:articleTitle/comments', async () => ({ comments: [] }))
}
