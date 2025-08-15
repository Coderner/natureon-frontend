import React, { useEffect, useState } from 'react';
import HomePageBanner from '../components/HomePageBanner';
import ProductCard from '../components/ProductCard';
import { dummyProducts } from '../data/dummyProducts';
import { getProducts } from '../api/productApi';

const Home = () => {

  const [products, setProducts] = useState([]);

  async function fetchAllProducts(){
     const res = await getProducts();
     setProducts(res.data);
  }

  useEffect(()=>{
    fetchAllProducts();
  },[]);

  return (
    <div className="space-y-10">
        <HomePageBanner/>

        {/* BestSellers */}
        <section className='px-4'>
            <h2 className="text-2xl font-semibold mb-4">Check Out Latest Collection</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {products?.map((product)=>(
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Home;