const database = require('./database')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

/**
 * Retrieves a user object based on a given authentication token.
 *
 * @param {string} token - The authentication token associated with the user.
 * @returns {Promise<object|null>} A promise that resolves to the user object if a user with the provided token exists, or null if not found.
 * @throws {Error} Throws an error if there is an issue with retrieving the user.
 */
const getUserByToken = async (token) => {
  const user = await database('user').where({ token }).first()
  if (!user) return null
  return user
}

/**
 * Creates a hash based on a string
 *
 * @param {string} string - The string provided.
 * @returns {Promise<string>} A promise that resolves to hashed string as result.
 * @throws {Error} Throws an error if there is an issue with hashing the string.
 */
const hashString = async (password) => {
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  return bcrypt.hash(password, salt)
}

/**
 * Compares a string with a hash to know if the hash was generated from the same string
 *
 * @param {string} str - The string provided.
 * @param {string} hash - The hash to be used for verification.
 * @returns {Promise<boolean>} A promise that resolves to result from comparing these two inputs
 * @throws {Error} Throws an error if there is an issue with hashing the string.
 */
const stringIsAMatch = (str, hash) => bcrypt.compare(str, hash)


/**
 * Generates a random token
 *
 * @returns {Promise<string>} A promise that resolves to a random token
 * @throws {Error} Throws an error if there is an issue with hashing the string.
 */
const generateToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(48, function (err, buffer) {
      if (err) {
        return reject(err)
      }
      const token = buffer.toString('hex')
      resolve(token)
    })
  })
}

const validateToken = async (req, reply) => {
  const token = req.headers.authorization.split(' ')[1]
  if (token) {
    const user = await getUserByToken(token)
    if (!user) {
      reply.status(401)
      return reply.send({
        message: 'invalid token'
      })
    }
    req.userId = user.id
  } else {
    reply.status(401)
    return reply.send({
      message: 'A token should be provided'
    })
  }
}

const getTableColumns = async (tableName) => {
  const info = await database(tableName).columnInfo()
  return Object.keys(info)
}

module.exports = {
  getUserByToken,
  hashString,
  stringIsAMatch,
  generateToken,
  validateToken,
  getTableColumns,
}