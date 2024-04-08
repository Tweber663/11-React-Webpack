import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../button/button';
import { useDispatch } from 'react-redux';
import { searchForm } from '../../redux/store';

const SearchForm = () => {

    const disptach = useDispatch();

    const searchFormHandler = (e) => {
        e.preventDefault()
        disptach(searchForm({payload: e.target[0].value}))
    } 

    return (
        <form onSubmit={searchFormHandler} className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button>
                <span className="fa fa-search"/>
            </Button>
        </form>
    );

};

export default SearchForm;