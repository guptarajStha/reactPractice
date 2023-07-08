import React,{useState,useEffect} from 'react'
import {useParams } from 'react-router-dom'
import Card from '../Components/Card'

const Product = () => {
  let params =useParams()
  // console.log(params.type)
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${params.type}`)
    .then(res=>res.json())
    .then(data=>setProductList(data))
  }, [params.type])
  return (
    <div className='grid m-4 justify-center w-100vw md:grid-cols-[repeat(2,minmax(20rem,1fr))] grid-cols-[repeat(auto,minmax(20rem,1fr))] lg:grid-cols-[repeat(3,minmax(20rem,1fr))]  gap-[3rem] '>
      {productList.map(product=>{
        return (
          <Card key={product.id} {...product} />
        )
      })}
    </div>
  )
}

export default Product