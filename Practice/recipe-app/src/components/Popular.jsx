import React,{useEffect,useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

const Popular = () => {
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        getPopular()
    },[])

    const getPopular= async () =>{
        const check =localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check))
        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json()

            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data.recipes)
        }

    }
    
  return (
     <div className='mt-[4rem] p-2'>
        <h3 className='text-[20px] font-bold mb-5'>Popular Picks</h3>
        <Splide
            options={{
                perPage:4,
                arrows:false,
                pagination:false,
                drag:'free',
                gap:"5rem"
            }}
        >
        {popular.map(recipe=>{
            return(
                    <SplideSlide  key={recipe.id}>
                        <div className='card p-1  min-h-[15rem] rounded-[2rem] overflow-hidden relative'>
                            <Link to={"/recipe/"+recipe.id}>
                                <p className='left-0 absolute z-10 p-4 flex w-full h-[40%]  translate-y-[150%] bg-black/30 text-white justify-center items-center text-center font-bold'>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} className='left-0 top-0 w-full h-full rounded-[2rem] absolute object-cover'/>
                            </Link>
                        </div>
                    </SplideSlide>
            )
        })}
        </Splide>
    </div>
  );
}

export default Popular;
