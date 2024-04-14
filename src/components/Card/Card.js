import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../redux/store';
import { useState } from 'react';
import clsx from 'clsx'
import { useSelector } from 'react-redux';
import { favCardFilter } from '../../redux/store';
import { useEffect } from 'react';

const Card = (p) => {
    
    const dispatch = useDispatch();

    const favCards = useSelector(state => favCardFilter(state.cards))
    
    const [, setStar] = useState(false);

    
    const clickHandler = () => {
        dispatch(addFavorites({cardId: p.cards.id}));
        setStar(true);
    }

    const isFavorite = favCards.some(card => card.id === p.cards.id); // Check if the card is a favorite
    console.log(isFavorite);
    return (
        <li className={styles.card} key={p.cards.id}>{p.cards.title}
        <button onClick={clickHandler} className={clsx('fa fa-star-o', isFavorite && styles.star)}>
        </button></li>
    )
}

export default Card