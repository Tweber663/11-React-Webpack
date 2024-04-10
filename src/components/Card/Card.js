import styles from './Card.module.scss'

const Card = (p) => {

    return (
        <li className={styles.card} key={p.cards.id}>{p.cards.title}</li>
    )
}

export default Card