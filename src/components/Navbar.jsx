import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { categories } from "../data/categories";

const Navbar = () => {

  const subCategories = categories.flatMap((category) =>{
     return(category.subcategories.map((subcategory)=>{
          return subcategory
     }))
  });


  console.log(subCategories);

  return (
    <nav className="bg-white shadow px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-700">
        Nature<span className="text-gray-700">On</span>
      </div>

      {/* Search with Sub-categories */}
      <select className="border px-2 py-1 rounded-l bg-white text-sm text-gray-700">
        {subCategories.map((subcategory) => (
          <option key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))}
      </select>

      {/* Cart Icon */}
      <div className="relative cursor-pointer">
        <FaShoppingCart className="text-xl text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          2
        </span>
      </div>
    </nav>
  );
};

export default Navbar;