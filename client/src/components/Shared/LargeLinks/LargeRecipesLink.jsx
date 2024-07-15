import styles from '../../Catalogs/CatalogHomeView/Catalog.module.css';
import {Link} from 'react-router-dom';

export const LargeRecipesLink = (props) => {
    return (
      <Link className={styles.groupLink} to={props.destination}>
        <div className={styles.groupLink}>
          <div className={styles.upperSide}>
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
              alt=""
            />
          </div>
          <div className={styles.bottomSide}>
            <h3>Recipes</h3>
          </div>
        </div>
      </Link>
    );
};
