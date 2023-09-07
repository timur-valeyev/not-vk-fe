import {News} from 'widgets'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <News/>
    </div>
  )
}

export default Home
