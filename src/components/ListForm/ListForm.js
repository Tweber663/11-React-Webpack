import TextInput from "../TextInput/TextInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsRedux";
import shortid from "shortid";
import styles from "./ListForm.module.scss"
import Button from "../button/button";

const ListForm = () => {

    const [titleTarget, setTitleTarget] = useState('');
    const [descriTarget, setDescriTarget] = useState('');
    const dispatch = useDispatch();


    const subHandler = (e) => {
        e.preventDefault();
        dispatch(addList({title: titleTarget, description: descriTarget, id: shortid()}))
        setTitleTarget('');
        setDescriTarget('');
    }




    return (
        <form className={styles.titleForm} onSubmit={subHandler}>
           <label>Tile</label>
           <TextInput onChange={(e) => setTitleTarget(e.target.value)}/>
           <label> Description </label>
           <TextInput onChange={(e) => setDescriTarget(e.target.value)}/>
           <Button> ADD LIST </Button>
        </form>
    )
}

export default ListForm;