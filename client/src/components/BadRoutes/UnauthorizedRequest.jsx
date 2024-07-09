import styles from './BadRoutes.module.css';

const UnauthorizedRequest = () => {
    return (
        <div className={styles.pageNotFound}>
            <h2>Unauthorized Request!</h2>
            <p>Available only for the owner of the resource.</p>
        </div>
    )
};

export default UnauthorizedRequest;