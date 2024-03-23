import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../button/button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button text="Create" />
        </form>
    );

};

export default SearchForm;