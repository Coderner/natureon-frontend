import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";

const Navbar = () => {

  const subCategories = categories.flatMap((category) =>{
     return(category.subcategories.map((subcategory)=>{
          return subcategory
     }))
  });


  console.log(subCategories);

  return (
    <nav className="bg-white shadow px-4 py-6 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <div className="text-3xl font-bold text-green-700">
          Nature<span className="text-gray-700">On</span>
        </div>
      </Link>

      {/* Search with Sub-categories */}
      <select className="border p-2 rounded-lg bg-white text-gray-700 md:w-1/2">
        {subCategories.map((subcategory) => (
          <option key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))}
      </select>

      {/* Cart Icon */}
      <Link to="/cart">
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
      </Link> 
    </nav>
  );
};

export default Navbar;