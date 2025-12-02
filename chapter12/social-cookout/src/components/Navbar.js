import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useContext } from 'react'
import {ThemeContext} from '../context/ThemeContext'

export default function Navbar() {
  const {color} = useContext(ThemeContext)
  return (
    <div className='navbar' style={{background: color}}>
      <nav>
        <Link to='/' className='brand'><h1>Social-Cookout</h1> </Link>
        <SearchBar/>
        <Link to='/create'>Create </Link>
      </nav>
    </div>
  )
}
