import React from 'react';
import HomePageBanner from '../components/HomePageBanner';
import ProductCard from '../components/ProductCard';
import { dummyProducts } from '../data/dummyProducts';

const Home = () => {

  return (
    <div className="px-4 py-6 space-y-10">
        <HomePageBanner/>

        {/* BestSellers */}
        <section>
            <h2 className="text-xl font-semibold mb-4">Bestsellers</h2>
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