import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.siteNavigation}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
};

export default Navigation;