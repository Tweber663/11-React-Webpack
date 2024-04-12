
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    console.log(styles.check);

    return (
        <nav className={styles.flexNav}>
            <div className={styles.flexNavElement1}>
                <a href="http://localhost:3000/"><span className="fa fa-tasks"></span></a>
            </div>
            <div className={styles.flexNavElement2}>
                <ul>
                    <li><NavLink className={({isActive}) => isActive? styles.linkActive : undefined} to="/">Home</NavLink></li>
                    <li><NavLink to="favorite" className={({isActive}) => isActive? styles.linkActive: undefined}>Favorite</NavLink></li>

                    <li><NavLink to="/about" className={({isActive}) => isActive? styles.linkActive: undefined}>About</NavLink></li>


                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;