import styles from './Container.module.scss'

const Container = (element) => <div className={styles.container}>{element.children}</div>

export default Container