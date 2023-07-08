import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
  const params= useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instruction');

  const fetchDetails = async (name)=>{
    
      const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      const detailData = await data.json()

      setDetails(detailData)
    }

  useEffect(()=>{
    fetchDetails(params.name)
  },[params.name])


  return (
    <div className='mt-[2rem] mb-[5rem] flex w-full'>
      <div className='w-[50%]'>
          <h2 className='mb-[2rem] font-bold'>{details.title}</h2>
          <img src={details.image} alt={details.title} />
      </div>
      <div className='ml-10 w-[50%]'>
        <button className={`py-1 rounded-md px-6 border-2 border-black hover:bg-red-400 hover:border-white hover:text-white ${activeTab==='instruction'?"bg-red-400 border-white text-white":"border-2 border-black"}`}onClick={()=>{setActiveTab('instruction')}}>Instruction</button>
        <button className={`py-1 rounded-md ml-10 px-6 border-2 border-black hover:bg-red-400 hover:border-white hover:text-white ${activeTab==='ingredients'?"bg-red-400 border-white text-white":"border-2 border-black"}`}onClick={()=>{setActiveTab('ingredients')}}>Ingredients</button>

        {
          activeTab ==="instruction" ?
        <div className='mt-8'>
         <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
         <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
        </div>
        :

      <ul className='mt-8'>
        {details.extendedIngredients.map(ingredient=>{
          return(
            <li className='text-[1.2rem]'>
              {ingredient.original}
          </li>
          )
        })}
     </ul>
        }
       </div>
    </div>
  )
}

export default Recipe