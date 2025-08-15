import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dummyProducts } from '../data/dummyProducts';
import BreadCrumb from '../components/BreadCrumb';
import QuantityUpdateButton from '../components/QuantityUpdateButton';
import { getProductById } from '../api/productApi';

const ProductDetails = () => {
  const { id } = useParams();
  const [product,setProduct] = useState({});
  
  async function fetchProductById(){
    const res = await getProductById(id);
    setProduct(res?.data);
  }

  useEffect(()=>{
     fetchProductById();
  },[])

  const productImages = [product?.image];

  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);

  return (

      <div>

        {/* BreadCrumbs */}
        <div className="px-6 py-4 text-gray-600">
          <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: product.name }]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {/* Left Section */}
          <div className='md:col-span-2 px-8 py-4 rounded-2xl border border-gray-100 shadow-sm'>
            {/* Images */}

            <div className='flex flex-col md:flex-row gap-6 mb-6'>
                <div className="flex-1 rounded-lg shadow-sm">
                  <img src={selectedImage} alt={product?.name} className="w-full h-auto object-cover" />
                </div>

                <div className="flex md:flex-col gap-4">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`rounded-lg shadow-sm p-1 ${selectedImage === img ? 'ring-2 ring-green-500' : ''}`}
                    >
                      <img src={img} alt={`Product ${index + 1}`} className="h-16 w-16 object-cover" />
                    </button>
                  ))}
                </div>

            </div>

            {/* Description and Dimensions */}
            <div>
              <h3 className="text-xl font-bold mb-1">Description</h3>
              <p className="text-gray-700 text-lg mb-4">{product?.description}</p>

              <h3 className="text-xl font-bold mb-1">Dimensions</h3>
              <p className="text-gray-700 text-lg">Height: 12 inches • Pot Diameter: 4 inches</p>
            </div>
          </div>

          {/* Right Section */}
          <div className='md:col-span-1 px-8 py-4 rounded-2xl border border-gray-100 shadow-sm'>
            <h1 className="text-4xl font-bold mb-4">{product?.name}</h1>

            {/* Color Options (example) */}
            <div className="flex gap-1 items-baseline mb-4">
              <p className="text-md text-gray-500 font-medium">{"Category: "+product?.category+" , "+product?.subcategory}</p>
              <div className="flex gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500 border" title="Green"></span>
                <span className="w-6 h-6 rounded-full bg-yellow-500 border" title="Yellow"></span>
              </div>
            </div>

            {/* Price */}

            <div className='flex gap-1 items-baseline mb-6'>
                  <p>Price:</p>
                  <p className="text-4xl font-semibold"> {product?.price}</p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-1">Quantity</p>
                <QuantityUpdateButton quantity={quantity} setQuantity={setQuantity}/>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link to="/cart" className="w-1/2">
                  <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-green-700 hover:cursor-pointer">
                    Add to Cart
                  </button>
              </Link>
              <Link to="/checkout" className="w-1/2">
                  <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-red-500 hover:cursor-pointer">
                    Buy Now
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetails;


