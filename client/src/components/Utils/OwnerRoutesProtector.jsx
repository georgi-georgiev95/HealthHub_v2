import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getOneRecipe } from "../../services/recipeService";
import { getOneWorkout } from "../../services/workoutService";

const UserRoutesProtector = () => {
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const pathSegments = path.split("/");
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    (async () => {
      if (pathSegments.includes("recipes")) {
        const recipeData = await getOneRecipe(id);
        setIsOwner(recipeData.ownerId === user?.userId);
      } else {
        const workoutData = await getOneWorkout(id);
        setIsOwner(workoutData.ownerId === user?.userId);
      }
      setLoading(false);
    })();
  }, []);
  

  if (!isOwner && !loading) {
    return <Navigate to="/400" />;
  }

  return <Outlet />;
};

export default UserRoutesProtector;
