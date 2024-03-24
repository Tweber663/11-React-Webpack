import styles from './List.module.scss'
import Column from '../column/column'
import ColumnForm from '../ColumnForm/ColumnForm';


//React hooks
import shortid from 'shortid';
import { useState } from 'react';

const List = () => {
  

    const [columns, setColumns] = useState([
        { id: 1, titles: 'Books', icon: 'book' },
        { id: 2, titles: 'Movies', icon: 'film' },
        { id: 3, titles: 'Games', icon: 'gamepad' }
    ]);

    const addColumn = element => {
		setColumns([...columns, { id: shortid(), titles: element.title }]);
    };

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon</span></h1>
            </header>
            <div>
                <p className={styles.description}>Interesting things I want to check out!</p>
            </div>
            <section className={styles.columns}>
                {columns.map((c) => <Column key={c.id} title={c.titles} icon={c.icon}/>)}
                
                <ColumnForm action={addColumn} />

            </section>
        </div>
    )
}

export default List