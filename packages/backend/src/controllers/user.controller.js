const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const request = require('request-promise')

const { compareHash, encrypt, JWT_SECRET } = require('../utils/helpers')
const UserModel = require('../models/user.model')
const Controller = require('./controller')

const assignToken = promisify(jwt.sign)

class User extends Controller {
  constructor () {
    super(UserModel, 'user')
  }

  async getUserOrFail (email) {
    if (!email) {
      throw new Error(this.i18n.get('EMAIL_REQUIRED'))
    }

    const user = await UserModel.findOne({ email }).lean()

    if (!user) {
      throw new Error('User not exists')
    }

    return user
  }

  async assignToken (data) {
    return assignToken({
      ...data,
      sessionId: new Date().getTime()
    }, JWT_SECRET)
  }

  async auth (req, res) {
    const { email, password } = req.body
    const user = await this.getUserOrFail(email)
    const passwordMatch = compareHash(password, user.password)

    if (!passwordMatch) {
      return res.status(400).send({ message: 'Invalid Credentials' })
    }

    const loggedUser = {
      ...user
    }

    delete loggedUser.password
    const token = this.assignToken(loggedUser)

    this.sendSuccessResponse(res, { data: { token, user: loggedUser } })
  }

  async authGithub (req, res) {
    const baseURL = 'https://github.com/login/oauth/access_token'
    const { code } = req.body
    const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env
    const url = `${baseURL}?code=${code}&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`
    const response = await request.post(url)

    if (response.includes('access_token=')) {
      const token = response.split('=')[1].split('&').shift()
      const user = await request.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${token}`,
          'User-Agent': 'Planner App - DEV'
        },
        json: true
      })

      const jwtToken = await this.assignToken(user)
      return this.sendSuccessResponse(res, { data: { token: jwtToken, user: user } })
    }

    return this.sendErrorResponse(res, { message: 'error' })
  }

  async store (req, res) {
    const { email, password } = req.body

    try {
      await this.getUserOrFail(email)
      this.sendErrorResponse(res, { message: this.i18n.get('email-already-exists') })
    } catch (e) {
      if (e.message === 'User not exists') {
        const hashedPassword = encrypt(password)
        req.body.password = hashedPassword

        return super.store(req, res)
      }
    }
  }

  async recovery (req, res) {
    const { email } = req.body
    await this.getUserOrFail(email)

    res.json({
      message: 'An email was sent with password recovery'
    })
  }
}

module.exports = new User()
