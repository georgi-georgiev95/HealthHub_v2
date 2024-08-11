import styles from "./FeaturesSection.module.css"
import HomeFeatureCard from "./HomeFeature/HomeFeatureCard";
import Advice from "../AdviceSection/Advice";

const FeaturesSection = () => {
  const recipesFeatureURL = 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505';
  const workoutsFeatureURL = 'https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE=';

  return (
    <section className={styles.features}>
      <HomeFeatureCard
        imageUrl={recipesFeatureURL}
        destination={'/create/recipe'}
        title={'Create a Recipe'}
        message={'Share your taste for fine and healthy food.'}
      />
      <Advice />
      <HomeFeatureCard
        imageUrl={workoutsFeatureURL}
        destination={'/create/workout'}
        title={'Create a Workout'}
        message={'Design and share workout routines tailored to your needs.'}
      />
    </section>
  )
};

export default FeaturesSection;