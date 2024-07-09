import styles from './BadRoutes.module.css';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/404');
    }, [navigate]);

    return (
        <div className={styles.pageNotFound}>
            <h2>Ooops!</h2>
            <p>The page you are looking for could not be found.</p>
            <p>Please check the URL and try again! :)</p>
        </div>
    )
};

export default PageNotFound;