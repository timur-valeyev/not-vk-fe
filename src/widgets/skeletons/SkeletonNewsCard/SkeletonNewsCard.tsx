import Skeleton from 'react-loading-skeleton'
import styles from './SkeletonNewsCard.module.scss'


export const SkeletonNewsCard = () => (
  <div className={styles.skeletonNewsCard}>
    <Skeleton className={styles.skeleton} style={{ marginBottom: '10px', width: '50%' }}/>
    <Skeleton className={styles.skeleton}  style={{ marginBottom: '5px' }}/>
    <Skeleton className={styles.skeleton}  style={{ marginBottom: '5px', width: '70%' }}/>
    <Skeleton className={styles.skeleton}  style={{ marginBottom: '5px', width: '30%' }}/>
  </div>
)
