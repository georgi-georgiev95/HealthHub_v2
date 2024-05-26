import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Loader from './components/Shared/Loader'
import { useUser } from './contexts/UserContext'
import CreateRecipe from './components/CreateForms/RecipeCreate'
import CreateHomeView from './components/CreateForms/CreateHomeView'
import CreateWorkout from './components/CreateForms/WorkoutCreate'

function App() {
  const { loading } = useUser();
  
  if(loading) return <Loader />

  return (
    <div className="site">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="create" element={<CreateHomeView />} />
          <Route path="create/recipe" element={<CreateRecipe />} />
          <Route path="create/workout" element={<CreateWorkout />} />
          <Route path="users/login" element={<Login />} />
          <Route path="users/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
