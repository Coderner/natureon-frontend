import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyProducts } from '../data/dummyProducts';
import BreadCrumb from '../components/BreadCrumb';

const ProductDetails = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  const productImages = [product.image, product.image, product.image];

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
          <div className='md:col-span-2 px-8 py-4 rounded-2xl border border-gray-100'>
            {/* Images */}

            <div className='flex flex-col md:flex-row gap-6 mb-6'>
                <div className="flex-1 border rounded-lg">
                  <img src={selectedImage} alt={product.name} className="w-full h-auto object-cover" />
                </div>

                <div className="flex md:flex-col gap-4">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`border rounded p-1 ${selectedImage === img ? 'ring-2 ring-green-500' : ''}`}
                    >
                      <img src={img} alt={`Product ${index + 1}`} className="h-16 w-16 object-cover" />
                    </button>
                  ))}
                </div>

            </div>

            {/* Description and Dimensions */}
            <div>
              <h3 className="text-xl font-bold mb-1">Description</h3>
              <p className="text-gray-700 text-lg mb-4">A beautiful and healthy {product.name} to brighten your home.</p>

              <h3 className="text-xl font-bold mb-1">Dimensions</h3>
              <p className="text-gray-700 text-lg">Height: 12 inches • Pot Diameter: 4 inches</p>
            </div>
          </div>

          {/* Right Section */}
          <div className='md:col-span-1 px-8 py-4 rounded-2xl border border-gray-100'>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            {/* Color Options (example) */}
            <div className="flex gap-1 items-baseline mb-4">
              <p className="text-sm font-medium">Options:</p>
              <div className="flex gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500 border" title="Green"></span>
                <span className="w-6 h-6 rounded-full bg-yellow-500 border" title="Yellow"></span>
              </div>
            </div>

            {/* Price */}

            <div className='flex gap-1 items-baseline mb-6'>
                  <p>Price:</p>
                  <p className="text-4xl font-semibold"> {product.price}</p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-1">Quantity</p>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1 bg-gray-200 rounded-l-2xl hover:bg-gray-300 text-lg border border-gray-300"
                >
                  −
                </button>

                <div className="text-lg font-medium px-3 py-1 text-center border-y border-gray-300">{quantity}</div>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-1 bg-gray-200 rounded-r-2xl hover:bg-gray-300 text-lg border border-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-green-700 w-2xl">
                Add to Cart
              </button>
              <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-red-500 w-2xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetails;


