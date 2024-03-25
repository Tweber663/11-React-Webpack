import Card from '../Card/Card';
import styles from './column.module.scss'
import CardForm from '../cardForm/cardForm';

const Column = (element) => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                {element.title}
                <span className={`${styles.icon} fa fa-${element.icon}`}></span>
            </h2>
            <ul className={styles.cards}>
                {element.cards.map(card => <Card cards={card}/>)}
                <CardForm columnId={element.id} action={element.action}/>
            </ul>

        </article>
    );
}

export default Column;