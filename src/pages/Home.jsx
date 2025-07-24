import React from 'react';
import HomePageBanner from '../components/HomePageBanner';
import ProductCard from '../components/ProductCard';
import plantImage from '../assets/plant.jpeg';

const Home = () => {

  const dummyProducts = [
    {
        id: 1,
        name: 'Aloe Vera',
        price: '₹150',
        image: plantImage
    },
    {
        id: 2,
        name: 'Snake Plant',
        price: '₹200',
        image: plantImage
    },
    {
        id: 3,
        name: 'Peace Lily',
        price: '₹250',
        image: plantImage
    },
    {
        id: 4,
        name: 'Money Plant',
        price: '₹180',
        image: plantImage
    }
 ];

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