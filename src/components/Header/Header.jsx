import { Link } from "./Header.styled";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </nav>
        </header>
    );
}

export default Header;