import styles from './button.module.scss'
const Button = (element) => {
    return (
        <button className={styles.button}>{element.text}</button>
    )
}

export default Button;