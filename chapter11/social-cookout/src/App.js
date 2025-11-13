import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import RecipeDetails from './pages/recipe/RecipeDetails'
import SearchResults from './pages/search/SearchResults'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/create' element={<Create/>}/>
          <Route exact path='/search' element={<SearchResults/>}/>
          <Route exact path='/recipes/:id' element={<RecipeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
