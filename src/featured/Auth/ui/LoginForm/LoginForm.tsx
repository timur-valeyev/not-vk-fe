import { useTranslation } from 'react-i18next'
import { Button, Input } from 'shared'

import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  const { t } = useTranslation('loginForm')

  return (
    <form className={styles.loginForm}>
      <h2>{t('login')}</h2>
      <Input placeholder={t('username')} />
      <Input placeholder={t('password')} />
      <Button>{t('enter')}</Button>
    </form>
  )
}
