import { languages } from '@monorepo/i18n'
import { useSelector } from 'react-redux'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default () => {
  const languageId = 'en_US'
  // const { portal: { languageId } } = useSelector(state => state.base)
  return {
    get: (word) => {
      return languages[languageId][word] || capitalize(word)
    }
  }
}
