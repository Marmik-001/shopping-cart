import React, { useContext, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { GlobalContext } from '../../../Context/GlobalContext'


// const {id , setId } = useContext(GlobalContext)

function ProductCard({product}:any) {

const {total , setTotal , inCart , setInCart , increaseCurrentItemCount , decreaseCurrentItemCount} = useContext(GlobalContext)
// const [decreaseBtn , setDecreaseBtn] = useState(false)
const navigate = useNavigate()
function handleViewDetails(id:number){

  navigate(`/product-details/${id}`)
}


  return (
    <div className='group relative w-auto flex flex-col justify-center rounded-lg  border-2 border-primary p-4'>
        <img 
        src={product.thumbnail} 
        alt={product.title}
        className=' bg-gradient-to-b from-secondary from-50% to-primary h-3/5' />
        <div className=' text-txt flex  flex-row   '>
          <p className='text-txt text-left font-semibold z-50 pr-4'>{product.title}</p>
          <p className='z-50 font-bold'>${product.price}</p>

        </div>
        <button onClick={() => handleViewDetails(product.id)} className='text-center mt-4 border-2 border-primary font-semibold text-txt py-3 px-8 rounded-2xl'> View Details </button>
        {
          inCart ? <div className='flex flex-col'>
            <h1 className='bg-secondary text-txt w-full font-semibold p-2'>Quantity {product.quantity}</h1>
            <button  onClick={() => increaseCurrentItemCount(product.id)} className='p-2 m-2 bg-primary text-secondary border-2 font-bold'>Increase</button>
            <button  onClick={() => decreaseCurrentItemCount(product.id)} className='p-2 m-2 bg-primary text-secondary font-bold border-2 '>Decrease</button>
            </div>
          : null
        }
    </div>
  )
}

export default ProductCard