import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params= useParams()

    useEffect(()=>{
        getSearched(params.search)
    },[params.search])

    const getSearched = async (name) =>{
        const check =localStorage.getItem(name);
        if(check){
            setSearchedRecipes(JSON.parse(check))
        }
        else{

            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
            const recipes = await data.json()
            // console.log(recipes)
            localStorage.setItem(name, JSON.stringify(recipes.results))
            setSearchedRecipes(recipes.results)
        }
        
    }

  return (
    <div 
    className='grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[2rem] '>
        {searchedRecipes.map(item=>{
            return (
                <div key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt={item.title} className='w-full rounded-[2rem]'/>
                        <p className='text-center font-bold text-[1rem]'>{item.title}</p>
                    </Link>
                </div>
            )
        })}

    </div>
  )
}

export default Searched