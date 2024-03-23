import styles from './column.module.scss'

const Column = (element) => {
    console.log(element);
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                {element.title}
                <span className={`${styles.icon} fa fa-${element.icon}`}></span>
                </h2>
        </article>
    );
}

export default Column;