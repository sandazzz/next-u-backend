'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const { getUserByToken } = require('./utils')

module.exports.options = {}
module.exports = async function (fastify, opts) {
  fastify.decorateRequest('userId', '')
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
