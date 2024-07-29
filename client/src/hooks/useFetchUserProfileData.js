import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    getUserRecipes,
    getUserWorkouts,
    getUserLikedRecipes,
    getUserLikedWorkouts,
} from "../services/userService";

const useFetchUserProfileData = () => {
    const [recipes, setRecipes] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [likedRecipes, setLikedRecipes] = useState([]);
    const [likedWorkouts, setLikedWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [recipes, workouts, likedRecipes, likedWorkouts] = await Promise.all([
                    getUserRecipes(user.userId),
                    getUserWorkouts(user.userId),
                    getUserLikedRecipes(user.userId),
                    getUserLikedWorkouts(user.userId),
                ]);
                setRecipes(recipes);
                setWorkouts(workouts);
                setLikedRecipes(likedRecipes);
                setLikedWorkouts(likedWorkouts);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user.userId]);

    return { recipes, workouts, likedRecipes, likedWorkouts, loading, user };
};

export default useFetchUserProfileData;
