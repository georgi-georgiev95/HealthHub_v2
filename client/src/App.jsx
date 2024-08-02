import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Loader from "./components/Shared/PrimaryLoader/Loader";
import PageNotFound from "./components/BadRoutes/PageNotFound";
import UnauthorizedRequest from "./components/BadRoutes/UnauthorizedRequest";
import UserRoutesProtector from "./components/Utils/UserRoutesProtector";
import GuestRoutesProtector from "./components/Utils/GuestRoutesProtector";
import OwnerRoutesProtector from "./components/Utils/OwnerRoutesProtector";
import { selectLoading } from "./store/slices/authSlice";
import useVerifyUserSession from "./hooks/useVerifyUserSession";
import "./App.css";

const Catalog = lazy(() => import("./components/Catalogs/CatalogHomeView/Catalog"));
const RecipeCatalog = lazy(() => import("./components/Catalogs/RecipeCatalog/RecipeCatalog"));
const WorkoutCatalog = lazy(() => import("./components/Catalogs/WorkoutCatalog/WorkoutCatalog"));
const RecipeDetails = lazy(() => import("./components/Details/RecipeDetails/RecipeDetails"));
const WorkoutDetails = lazy(() => import("./components/Details/WorkoutDetails/WorkoutDetails"));
const EditRecipe = lazy(() => import("./components/EditForms/EditRecipe"));
const EditWorkout = lazy(() => import("./components/EditForms/EditWorkout"));
const PreCreateFormView = lazy(() => import("./components/CreateForms/PreCreateFormView"));
const CreateRecipe = lazy(() => import("./components/CreateForms/CreateRecipeForm/RecipeCreate"));
const CreateWorkout = lazy(() => import("./components/CreateForms/CreateWorkoutForm/WorkoutCreate"));
const UserProfile = lazy(() => import("./components/UserProfile/UserProfile"));
const Login = lazy(() => import("./components/Auth/Login"));
const Register = lazy(() => import("./components/Auth/Register"));

function App() {
  useVerifyUserSession();
  const loading = useSelector(selectLoading);

  if (loading) return <Loader />;

  return (
    <>
      <Navigation />
      <div className="site">
        <div className="content">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="catalog/recipes" element={<RecipeCatalog />} />
              <Route path="catalog/workouts" element={<WorkoutCatalog />} />

              <Route path="catalog/recipes/:id" element={<RecipeDetails />} />
              <Route path="catalog/workouts/:id" element={<WorkoutDetails />} />

              <Route element={<OwnerRoutesProtector />}>
                <Route
                  path="catalog/recipes/:id/edit"
                  element={<EditRecipe />}
                />
                <Route
                  path="catalog/workouts/:id/edit"
                  element={<EditWorkout />}
                />
              </Route>

              <Route element={<UserRoutesProtector />}>
                <Route path="create" element={<PreCreateFormView />} />
                <Route path="create/recipe" element={<CreateRecipe />} />
                <Route path="create/workout" element={<CreateWorkout />} />
                <Route path="users/profile" element={<UserProfile />} />
              </Route>

              <Route element={<GuestRoutesProtector />}>
                <Route path="users/login" element={<Login />} />
                <Route path="users/register" element={<Register />} />
              </Route>

              <Route path="400" element={<UnauthorizedRequest />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
