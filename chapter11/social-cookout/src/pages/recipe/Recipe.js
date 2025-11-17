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
        <div className='recipe-steps'>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            {recipe.ingredients.map( ingredient =>
                <ul>
                    <input type="checkbox" name={ingredient} value="list"/>
                    <label for={ingredient}> {ingredient}</label><br></br>
                </ul>
            )}
            <p>{recipe.method}</p>
        </div>
      )}
    </div>
  )
}
