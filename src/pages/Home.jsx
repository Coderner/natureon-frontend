import { useEffect, useState } from 'react';
import HomePageBanner from '../components/HomePageBanner';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api/productApi';
import Spinner from '../components/Spinner';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAllProducts(){
     try{
        setLoading(true);
        const res = await getProducts();
        setProducts(res?.data || []);
        setError(null);
     }catch(err){
        setError("Failed to fetch products. Please try again later.");
        setProducts([]);
     }finally{
        setLoading(false)
     }   
  }

  useEffect(()=>{
    fetchAllProducts();
  },[]);

  return (
    <div className="space-y-10">
        <HomePageBanner/>
        <section className='px-4'>
             <h2 className="text-2xl font-semibold mb-4">Check Out Latest Collection</h2>
             {  
                loading ? (
                  <div className="w-full flex justify-center">
                    <Spinner/>
                  </div>
                ) : error ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : products.length === 0 ? (
                  <p className="text-center text-gray-500">No products to display</p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
             )}
        </section>
    </div>
  )
}

export default Home;