import styles from './cardForm.module.scss'
import { useState } from 'react';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const CardForm = props => {
    const dispatch = useDispatch();

    console.log(props)
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_CARD", payload: { columnId: props.columnId, title: title, id: shortid()}});
        setTitle('');
    };

	return (
        <form className={styles.cartForm}  onSubmit={handleSubmit}>
            <TextInput placeholder="Add element +" value={title} onChange={e => setTitle(e.target.value)}/>
        </form>
	);
};

export default CardForm;