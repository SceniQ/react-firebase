import { useRef, useState } from 'react'
import './Create.css'

export default function Create() {
  const [time, setTime] = useState('')
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(ingredients)
  }
  const handleAdd = (e) =>{
    e.preventDefault()
    const addedIngredient = newIngredient.trim()
    if(addedIngredient && !ingredients.includes(addedIngredient)){
      setIngredients(prevIngredients => [...prevIngredients, addedIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className='page-title'></h2>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <label>
          <span>Dish title:</span>
          <input type="text" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          />
        </label>

        {/* ingredients */}
        <label>
            <span>Ingredients:</span>
            <div className='ingredients'>
              <input type="text"
                onChange={(e) => setNewIngredient(e.target.value)} 
                value={newIngredient}
                ref={ingredientInput}
              />
              <button onClick={handleAdd} className='btn'>add</button>
            </div>
        </label>
        <p>Listed inhredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
        <label>
          <span>Method:</span>
          <input type="text" 
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
          />
        </label>
        <label>
          <span>Time to make (in minutes):</span>
          <input type="number" 
          onChange={(e) => setTime(e.target.value)}
          value={time}
          required
          />
        </label>
        <button className='button'>submit</button>
      </form>
    </div>
  )
}
