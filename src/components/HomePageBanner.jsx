import React from 'react'
import Image from "../assets/plant.jpeg";
import PlantAccessories from "../assets/plantaccessories.webp";
import GreenifySpace from "../assets/greenifyspace.jpeg";
import Nurture from "../assets/nurture.jpeg";
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const HomePageBanner = () => {
    const bannerData = [
      {
        id: 1,
        image: PlantAccessories,
        tagline: 'Bring Nature Home',
        cta: 'Shop Now',
      },
      {
        id: 2,
        image: Image,
        tagline: 'Fresh Plants Delivered',
        cta: 'Browse Products',
      },
      {
        id: 3,
        image: GreenifySpace,
        tagline: 'Greenify Your Space',
        cta: 'Explore Collection',
      },
      {
        id: 4,
        image: Nurture,
        tagline: 'Nurture With Nature',
        cta: 'Start Planting',
      },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
       setCurrent((prev)=> (prev+1)% bannerData.length);
    }, 2000);
    return () => clearInterval(interval);
  },[]);

  const{image, tagline, cta} = bannerData[current];

  return (
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <img
             src={image}
             alt={tagline}
             className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">{tagline}</h2>
            <Link to="/products">
              <button className="bg-green-600 px-6 py-2 rounded shadow-md hover:bg-green-700 transition">
                {cta}
              </button>
            </Link>
          </div>
      </div>
  )
}

export default HomePageBanner;