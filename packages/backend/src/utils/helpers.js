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

  return languages[language][word] || word
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

function string_to_slug (str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

module.exports = {
  JWT_SECRET,
  compareHash,
  encrypt,
  string_to_slug,
  sub,
  translate
}
