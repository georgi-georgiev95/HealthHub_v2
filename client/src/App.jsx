import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalogs/CatalogHomeView/Catalog";
import RecipeCatalog from "./components/Catalogs/RecipeCatalog/RecipeCatalog";
import WorkoutCatalog from "./components/Catalogs/WorkoutCatalog/WorkoutCatalog";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Loader from "./components/Shared/PrimaryLoader/Loader";
import { useUser } from "./contexts/UserContext";
import CreateRecipe from "./components/CreateForms/CreateRecipeForm/RecipeCreate";
import PreCreateFormView from "./components/CreateForms/PreCreateFormView";
import CreateWorkout from "./components/CreateForms/CreateWorkoutForm/WorkoutCreate";
import RecipeDetails from "./components/Details/RecipeDetails/RecipeDetails";
import EditRecipe from "./components/EditForms/EditRecipe";
import UserProfile from "./components/UserProfile/UserProfile";
import WorkoutDetails from "./components/Details/WorkoutDetails/WorkoutDetails";

function App() {
  const { loading } = useUser();

  if (loading) return <Loader />;

  return (
    <>
      <Navigation />
      <div className="site">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/recipes" element={<RecipeCatalog />} />
            <Route path="catalog/recipes/:id" element={<RecipeDetails />} />
            <Route path="catalog/recipes/:id/edit" element={<EditRecipe />} />
            <Route path="catalog/workouts" element={<WorkoutCatalog />} />
            <Route path="catalog/workouts/:id" element={<WorkoutDetails />} />
            <Route path="create" element={<PreCreateFormView />} />
            <Route path="create/recipe" element={<CreateRecipe />} />
            <Route path="create/workout" element={<CreateWorkout />} />
            <Route path="users/login" element={<Login />} />
            <Route path="users/register" element={<Register />} />
            <Route path="users/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
