import { useFetch } from '../../hooks/useFetch'
import { useEffect } from "react"
//params for request id
import { useParams, useNavigate } from "react-router-dom"
//styles
import '../recipe/Recipe.css'

export default function Recipe() {
    const { id } = useParams()
    const url = 'http://localhost:3000/recipes/'+id
    const {isPending, error, data:recipe} = useFetch(url)
    const navigateTo = useNavigate()

    useEffect(() => {
      if(error){
        //redirect to certain page
        setTimeout(() => {
          navigateTo('/')
        }, 2000)
      }
    }, [error, navigateTo])

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {recipe && (
        <div key={recipe.id} className='recipe'>
            <h3 className='page-title'>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <ul>
              {recipe.ingredients.map(ingredient =>
                <li key={ingredient}>{ingredient}</li>
              )}
            </ul>
          
            <p>{recipe.method}</p>
        </div>
      )}
    </div>
  )
}
