import { Link } from "./Header.styled";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <Link to='/goit-react-hw-05-movies/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </nav>
        </header>
    );
}

export default Header;