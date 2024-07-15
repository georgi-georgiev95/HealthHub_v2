import styles from './EmptyList.module.css'

const EmptyList = ({
    entries,
    type,
    entity
}) => {
    return (
        <>
            {entries.length === 0 && (
                <p className={styles.noRecipes}>
                    {type === "created" &&
                        (entity === 'recipes' ?
                            "You haven't created any recipes yet."
                            :
                            "You haven't created any workouts yet."
                        )
                    }
                    {type === "liked" &&
                        (entity === 'recipes' ?
                            "You haven't liked any recipes yet."
                            :
                            "You haven't liked any workouts yet."
                        )
                    }
                </p>
            )}
        </>
    )
};

export default EmptyList;