import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../button/button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const ColumnForm = () => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

   
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_COLUMN', newColumn: { id:shortid(), title, icon, } });
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label>Title</label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label>Icon</label>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button> Add column </Button>
        </form>
	);
};

export default ColumnForm;
