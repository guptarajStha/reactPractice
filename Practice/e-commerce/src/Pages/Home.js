import React,{useEffect, useState} from 'react'
import Card from '../Components/Card'

const Home = () => {
  const [allProduct, setAllProduct] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setAllProduct(data))
  },[allProduct])
  return (
    <div className='grid m-4 justify-center w-100vw md:grid-cols-[repeat(2,minmax(20rem,1fr))] grid-cols-[repeat(auto,minmax(20rem,1fr))] lg:grid-cols-[repeat(3,minmax(20rem,1fr))]  gap-[3rem] '>
      {
        allProduct.map(product=>{
          return(

            <Card key={product.id} {...product} />
          )
        })
      }
    </div>
  )
}

export default Home