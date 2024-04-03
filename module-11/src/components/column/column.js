import Card from '../Card/Card';
import styles from './column.module.scss'
import CardForm from '../cardForm/cardForm';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Column = (element) => {

    const cards = useSelector(state => state.cards.filter(card => card.columnId === element.id));


    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                {element.title}
                <span className={`${styles.icon} fa fa-${element.icon}`}></span>
            </h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card cards={card}/>)}
                <CardForm columnId={element.id} action={element.action}/>
            </ul>

        </article>
    );
}

export default Column;