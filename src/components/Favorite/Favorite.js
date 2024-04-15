
import styles from './Favorite.module.scss'
import { useSelector } from 'react-redux';
import { favCardFilter } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import { Navigate } from 'react-router-dom';

const Favorite = () => {

    
    const favCards = useSelector(state => favCardFilter(state.cards));

    if(favCards.length < 1) return <Navigate to="/favoriteEmpty"/>
    return (
        <article className={styles.column}>
        <h2 className={styles.title}>
            {favCards.map((card) => card.title)}
        </h2>
        <ul className={styles.cards}>
            {favCards.map(card =>
            <Card cards={card}/>)}
        </ul>
       </article>   
    )
}

export default Favorite;