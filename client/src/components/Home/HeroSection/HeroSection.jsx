import styles from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <section className={styles.home}>
            <div className={styles.homeContent}>
                <h1>Welcome to HealthHub</h1>
                <p>Your gateway to delicious recipes and invigorating workouts.</p>
            </div>
        </section>
    )
};

export default HeroSection;