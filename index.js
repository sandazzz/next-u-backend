require('dotenv').config()

const fastify = require('fastify')({
  logger: true
})
const cors = require('@fastify/cors')
const app = require('./app')
fastify.register(cors, {})
fastify.register(app)
fastify.listen({ host: '0.0.0.0', port: process.env.PORT }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})