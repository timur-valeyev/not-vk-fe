import { useTranslation } from 'react-i18next'
import { Button } from 'shared'

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation()

  const handleChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <Button onClick={handleChangeLang}>{t('lang')}</Button>
}
