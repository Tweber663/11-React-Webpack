import styles from './button.module.scss'
const Button = (element) => {
    return (
        <button className={styles.button}>{element.children}</button>
    )
}

export default Button;