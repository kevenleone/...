const jwt = require('jsonwebtoken')
const { promisify } = require('util')

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

  async auth (req, res) {
    const { email, password } = req.body
    const user = await this.getUserOrFail(email)
    const passwordMatch = compareHash(password, user.password)

    if (!passwordMatch) {
      return res.status(400).send({ message: 'Invalid Credentials' })
    }

    const token = await assignToken(user, JWT_SECRET)

    const loggedUser = {
      ...user
    }

    delete loggedUser.password

    this.sendSuccessResponse(res, { data: { token, user: loggedUser } })
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
