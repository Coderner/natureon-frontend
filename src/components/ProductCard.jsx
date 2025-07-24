import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="p-4 border rounded shadow-sm text-center">
        <img src={product?.image} alt={product?.name} className="w-full h-32 object-cover mb-2"/>
        <h3 className="font-semibold">{product?.name}</h3>
        <h4 className="text-sm text-gray-500">{product.price}</h4>
        <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded">Buy Now</button>
    </div>
  )
}

export default ProductCard