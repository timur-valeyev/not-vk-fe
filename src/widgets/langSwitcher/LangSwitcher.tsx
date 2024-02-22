import { Button } from 'shared'
import { useTranslation } from 'react-i18next'

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation()

  const handleChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <Button onClick={handleChangeLang}>{t('lang')}</Button>
}
