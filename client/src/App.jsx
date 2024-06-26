import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Loader from './components/Shared/PrimaryLoader/Loader'
import { useUser } from './contexts/UserContext'
import CreateRecipe from './components/CreateForms/CreateRecipeForm/RecipeCreate'
import PreCreateFormView from "./components/CreateForms/PreCreateFormView";
import CreateWorkout from './components/CreateForms/CreateWorkoutForm/WorkoutCreate'
import RecipeCatalog from './components/RecipeCatalog/RecipeCatalog'
import WorkoutCatalog from './components/WorkoutCatalog/WorkoutCatalog'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import EditRecipe from './components/EditForms/EditRecipe'

function App() {
  const { loading } = useUser();
  
  if(loading) return <Loader />

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
            <Route path="create" element={<PreCreateFormView />} />
            <Route path="create/recipe" element={<CreateRecipe />} />
            <Route path="create/workout" element={<CreateWorkout />} />
            <Route path="users/login" element={<Login />} />
            <Route path="users/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
