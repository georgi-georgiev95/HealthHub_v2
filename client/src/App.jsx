import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Auth/Login'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="users/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App
