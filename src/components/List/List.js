import styles from './List.module.scss'
import Column from '../column/column'
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/listsRedux';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom'
//React hooks

const List = () => {

    const { listId } = useParams();
    
    const list = useSelector(state => getListById(state, listId));

    const columnsByListID = useSelector(state => getColumnsByList(state, listId));
    
    if(!list) return <Navigate to="/" />
    return (
        <div className={styles.list}>
          <SearchForm/>
          <header className={styles.header}>
            <h2 className={styles.title}>{list.title}</h2>
          </header>
          <p className={styles.description}>{list.description}</p>
          <section className={styles.columns}>
            {columnsByListID.map(column =>
              <Column key={column.id} {...column}  />
            )}
          </section>
          <ColumnForm listId={list.id}/>
        </div>
      );
}

export default List