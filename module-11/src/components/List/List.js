import styles from './List.module.scss'
import Column from '../column/column'
import ColumnForm from '../ColumnForm/ColumnForm';

//React hooks
import shortid from 'shortid';
import { useState } from 'react';

const List = () => {
  

    const [columns, setColumns] = useState([
        {
            id: 1,
            title: 'Books',
            icon: 'book',
            cards: [
                { id: 1, title: 'This is Going to Hurt' },
                { id: 2, title: 'Interpreter of Maladies' }
            ]
        },
        {
            id: 2,
            title: 'Movies',
            icon: 'film',
            cards: [
                { id: 1, title: 'Harry Potter' },
                { id: 2, title: 'Star Wars' }
            ]
        },
        {
            id: 3,
            title: 'Games',
            icon: 'gamepad',
            cards: [
                { id: 1, title: 'The Witcher' },
                { id: 2, title: 'Skyrim' }
            ]
        }
    ]);

    const addColumn = element => {
		setColumns([...columns, { id: shortid(), title: element.title, icon: element.icon, cards: [] }]);
        console.log(element);
    };

    const addCard = (newCard, columnId) => {
        const columnsUpdated = columns.map(column => {
            if(column.id === columnId)
                return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
            else
                return column
        })
    
        setColumns(columnsUpdated);
    
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
                {columns.map((c) => <Column action={addCard} key={c.id} id={c.id} title={c.title} icon={c.icon} cards={c.cards}/>)}
                <ColumnForm action={addColumn} />
            </section>
        </div>
    )
}

export default List