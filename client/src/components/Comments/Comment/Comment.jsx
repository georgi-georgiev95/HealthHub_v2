import styles from './Comment.module.css'

const Comment = () => {
    return (
        <div className={styles.comment}>
            <img src={"/images/profile.jpg"} className={styles.image} alt="profile-photo" />
            <div>
                <span>by John Doe</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi quam error, delectus eaque explicabo voluptates illo quis illum dolorem, sunt quaerat odit ipsam voluptatum laudantium. Repellat minima dolorem natus?</p>
            </div>

            <div className={styles.buttons}>
                <button>Edit</button>
                <button>Delete</button>
                <button>Like</button>
            </div>
        </div>
    )
};

export default Comment;