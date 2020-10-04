const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const { JWT_SECRET } = require('../utils/helpers')
const verify = promisify(jwt.verify)

const publicRoutes = ['/api/auth']

module.exports = async function (req, res, next) {
  const { headers: { authorization }, originalUrl } = req
  if (!publicRoutes.includes(originalUrl)) {
    if (!authorization) {
      return res.status(401).send({
        message: 'Not Authenticated'
      })
    }

    const [, token] = authorization.split(' ')
    try {
      await verify(token, JWT_SECRET)
      const decodedToken = jwt.decode(token, { json: true })
      req.loggedUser = decodedToken
    } catch (e) {
      throw new Error(e)
    }
  }
  next()
}
