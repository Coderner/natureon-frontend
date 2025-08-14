import React from 'react';
import HomePageBanner from '../components/HomePageBanner';
import ProductCard from '../components/ProductCard';
import { dummyProducts } from '../data/dummyProducts';

const Home = () => {

  return (
    <div className="space-y-10">
        <HomePageBanner/>

        {/* BestSellers */}
        <section className='px-4'>
            <h2 className="text-2xl font-semibold mb-4">Check Out Latest Collection</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {dummyProducts.map((product)=>(
                    <ProductCard product={product}/>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Home;