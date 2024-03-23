import styles from './List.module.scss'
import Column from '../column/column'
const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon</span></h1>
            </header>
            <div>
                <p className={styles.description}>Interesting things I want to check out!</p>
            </div>
            <section className={styles.columns}>
                <Column title="Books"/>
                <Column title="Movies"/>
                <Column title="Games"/>
            </section>
        </div>
    )
}

export default List