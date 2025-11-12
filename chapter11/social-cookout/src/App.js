import './App.css';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import RecipeDetails from './pages/recipe/RecipeDetails'
import SearchResults from './pages/search/SearchResults'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/create' element={<Create/>}/>
          <Route exact path='/search' element={<SearchResults/>}/>
          <Route exact path='/recipe' element={<RecipeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
