const en_US = require('./en_US');
const pt_BR = require('./pt_BR');

const defaultLanguage = 'pt_BR';

const languages = {
  en_US,
  pt_BR
};

module.exports = {
  availableLanguages: ['en_US', 'pt_BR'],
  defaultLanguage,
  languages
}
