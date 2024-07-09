import { Outlet, Navigate, useLocation, useParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useEffect, useState } from "react";
import { getOneRecipe } from "../services/recipeService";
import { getOneWorkout } from "../services/workoutService";

const UserRoutesProtector = () => {
  const [recipe, setRecipe] = useState({});
    const [workout, setWorkout] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    
    const { id } = useParams();
    const location = useLocation();
    const path = location.pathname;
    const pathSegments = path.split("/");

    useEffect(() => {
      (async () => {
          if(pathSegments.includes("recipes")){
              await getOneRecipe(id, setRecipe);
              if(recipe.ownerId === user.userId) {
                  setIsOwner(true);
              } else {
                  setIsOwner(false);
              }
          } else {
              await getOneWorkout(id, setWorkout);
              if(workout.ownerId === user.userId) {
                  setIsOwner(true);
              } else {
                  setIsOwner(false);
              }
          }
      })();
    }, [])
  const { user } = useUser();
    
  if (!isOwner) {
    return <Navigate to="/400" />;
  }

  return <Outlet />;
};

export default UserRoutesProtector;
