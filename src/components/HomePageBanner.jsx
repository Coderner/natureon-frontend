import React from 'react'
import Image from "../assets/plant.jpeg";
import PlantAccessories from "../assets/plantaccessories.webp";
import GreenifySpace from "../assets/greenifyspace.jpg";
import Nurture from "../assets/nurture.jpg";
import Garden from "../assets/garden.jpg";
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
        image: Garden,
        tagline: 'Your Dream Garden',
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
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden flex items-center justify-center bg-black/10">
          <img
             src={image}
             alt={tagline}
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">{tagline}</h2>
            <Link to="/products">
              <button className="bg-green-700 px-6 py-2 text-lg font-semibold rounded-lg shadow-xl hover:bg-green-900 hover:cursor-pointer transition">
                {cta}
              </button>
            </Link>
          </div>
      </div>
  )
}

export default HomePageBanner;