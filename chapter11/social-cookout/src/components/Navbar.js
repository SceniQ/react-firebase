import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'><h1>Social-Cookout</h1> </Link>
        <Link to='/create'>Create </Link>
      </nav>
    </div>
  )
}
