

import {Button} from '../../shared'
import {ButtonVariant} from '../../shared/ui/button/types'
import styles from './PageError.module.scss'


export const PageError = () => {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={styles.pageError}>
      <h1>Something wrong</h1>
      <h2>please reload this page</h2>
      <Button
        onClick={reloadPage}
        variant={ButtonVariant.PRIMARY}
      >Reload
      </Button>
    </div>
  )
}
