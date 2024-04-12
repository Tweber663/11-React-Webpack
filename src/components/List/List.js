import styles from './List.module.scss'
import Column from '../column/column'
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';
//React hooks

const List = () => {
    const columns = useSelector(state => getAllColumns(state));

    const list = useSelector(state => getListById(state, 2));
    
    const {description, title, id} = list;

    const columnsByListID = useSelector(state => getColumnsByList(state, id));
    console.log(columnsByListID)
    return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
          </header>
          <p className={styles.description}>{description}</p>
          <section className={styles.columns}>
            {columnsByListID.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
          </section>
          <ColumnForm />
        </div>
      );
}

export default List