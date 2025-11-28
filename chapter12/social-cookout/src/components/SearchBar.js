import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [term, setTerm] = useState('')
  const navigateTo = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    navigateTo(`/search?q=${term}`)
  }

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search</label>
        <input 
        type="text" 
        id='search'
        onChange={(e) => setTerm(e.target.value)}
        required
        />
      </form>
    </div>
  )
}
