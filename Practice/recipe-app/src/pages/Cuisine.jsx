import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import {Link,useParams} from 'react-router-dom'


function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    let params =useParams()

    
    const getCuisine = async (name) =>{
        const check =localStorage.getItem(name);
        if(check){
            setCuisine(JSON.parse(check))
        }
        else{

            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            const recipes = await data.json()
            // console.log(recipes)
            localStorage.setItem(name, JSON.stringify(recipes.results))
            setCuisine(recipes.results)
        }
        
    }
    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type])
   
  return (
    <motion.div 
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    className='grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[2rem] '>
        {cuisine.map(item=>{
            return (
                <div key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt={item.title} className='w-full rounded-[2rem]'/>
                        <p className='text-center font-bold text-[1rem]'>{item.title}</p>
                    </Link>
                </div>
            )
        })}

    </motion.div>
  )
}

export default Cuisine