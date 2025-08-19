import {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import BreadCrumb from '../components/BreadCrumb'
import { getProducts } from '../api/productApi'
import Spinner from '../components/Spinner'

const Products = () => {

  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchProducts(){
    try{
      setLoading(true);
      const res = await getProducts();
      setProducts(res?.data);
      setError(null);
    }catch(err){
      setError("There is an error loading the collection. Please try again later.");
      setProducts([]);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
     fetchProducts();
  },[])

  return (
     <div>

      <div className="px-6 py-4 text-gray-600">
          <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
      </div>

      <div className="px-6">
          <div className='flex justify-between items-center py-1 border-b-2 border-gray-200 mb-8'>
                <h2 className="text-3xl font-bold mb-1">Explore Our Latest Collection</h2>
                <input 
                  type="range"
                  min={0}
                  max={1000}
                  step={100}
                />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              loading ? (
                <div className="w-full flex justify-center">
                  <Spinner/>
                </div>
              ) : 
              error ? (
                <p className="text-center text-red-500">{error}</p>
              ) :
              (
                 products?.map(product => (
                    <ProductCard key={product._id} product={product} />
                  ))
              )
            }  
          </div>
      </div>
    </div>
  )
}

export default Products