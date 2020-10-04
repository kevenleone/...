const {languages} = require('@monorepo/i18n')

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const language = {
    get: (word, languageId = 'en_US') => {
        return languages[languageId][word] || capitalize(word)
      }
}

module.exports = {
    language
}
