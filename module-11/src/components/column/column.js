import styles from './column.module.scss'

const Column = (element) => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>{element.title}</h2>
        </article>
    );
}

export default Column;