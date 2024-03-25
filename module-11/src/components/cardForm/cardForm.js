import styles from './cardForm.module.scss'
import { useState } from 'react';
import TextInput from './../TextInput/TextInput';


const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
        console.log(props.columnId)
        setTitle('');
    };

	return (
        <form className={styles.cartForm}  onSubmit={handleSubmit}>
            <TextInput placeholder="Add element +" value={title} onChange={e => setTitle(e.target.value)}/>
        </form>
	);
};

export default CardForm;