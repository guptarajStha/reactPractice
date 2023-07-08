import React from 'react'

const Card = ({id,title,price,category,image,description}) => {
  return (
      <div className=' flex card w-[400px] mb-4 bg-slate-100 p-4 rounded-lg '>
        <div className='img w-[60%] h-full '>
           <img src={image} alt={title}  className=' h-full'/>
        </div>
        <div className='ml-4 w-1/2'>
          <div className='font-bold mb-4'>
            {title}
          </div>
          <div>
            ${price}
          </div>
          <div className='mt-4'>
            {category.toUpperCase()}
          </div>
        </div>
      </div>
  )
}

export default Card