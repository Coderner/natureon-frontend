import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className="py-4 rounded-lg shadow-xl">
        <img src={product?.image} alt={product?.name} className="w-full max-h-5/6 rounded-lg object-cover mb-2"/>
        <div className='px-4 sm:flex justify-between items-end'>     
            <div>    
              <h3 className="font-semibold text-lg">{product?.name}</h3>
              <h4 className="text-lg font-semibold text-gray-500">{product?.price}</h4>    
              <Link to={`/product/${product?._id}`}>
                  <p className='text-sm underline text-sky-600 font-semibold'>View More Details</p>
              </Link>
            </div> 
            <Link to="/checkout">
                <button className="px-3 py-1 bg-green-600 text-white rounded-lg mt-2 sm:mt-0">Buy Now</button>      
            </Link>  
        </div>
    </div>
  )
}

export default ProductCard