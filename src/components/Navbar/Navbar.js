
import styles from './Navbar.module.scss'

const Navbar = () => {
    console.log(styles.check);

    return (
        <nav className={styles.flexNav}>
            <div className={styles.flexNavElement1}>
                <a href="http://localhost:3000/"><span className="fa fa-tasks"></span></a>
            </div>
            <div className={styles.flexNavElement2}>
               <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/favorite"><li>Favorite</li></a>
                    <a href="/about"><li>About</li></a>
               </ul>
            </div>
        </nav>
    )
}

export default Navbar;