const { languages } = require('@monorepo/i18n')
const { compareSync, hashSync } = require('bcrypt')

const JWT_SECRET = 'JWT_SECRET'
const encrypt = (data) => hashSync(data, 10)

const compareHash = (data = '', hash) =>
  compareSync(data, hash)

const translate = (
  word,
  language = 'en_US'
) => {
  word = word.toUpperCase()

  return languages[language](word) || word
}

const sub = (word, words) => {
  if (!Array.isArray(words)) {
    words = [words]
  }

  let translatedWord = translate(word)
  words.forEach((value, index) => {
    const translatedKey = translate(value)
    const key = `{${index}}`
    translatedWord = translatedWord.replace(key, translatedKey)
  })

  return translatedWord
}

module.exports = {
  JWT_SECRET,
  compareHash,
  encrypt,
  sub,
  translate
}
