import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../redux/cardsRedux';
import { useState } from 'react';
import clsx from 'clsx'
import { useSelector } from 'react-redux';
import { favCardFilter } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = (p) => {
    
    const dispatch = useDispatch();

    const favCards = useSelector(state => favCardFilter(state.cards))
    
    const [, setStar] = useState(false);

    
    const clickHandlerFav = () => {
        dispatch(addFavorites({cardId: p.cards.id}));
        setStar(true);
    }



    const clickHandlerRemove = () => {
        dispatch(removeCard(p))
    }










    const isFavorite = favCards.some(card => card.id === p.cards.id); // Check if the card is a favorite
    console.log(favCards);
    return (
        <li className={styles.card} key={p.cards.id}>{p.cards.title}
        <div>
        <button onClick={clickHandlerFav} className={clsx('fa fa-star-o', isFavorite && styles.star)}> </button>
        <button onClick={clickHandlerRemove} className="fa fa-trash"></button>
        </div>
        </li>
    )
}

export default Card