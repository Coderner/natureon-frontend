import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

  const categories = [
    { label: "All", value: "" },
    { label: "Bird House", value: "bird-house" },
    { label: "Fertilizer", value: "fertilizer" },
    { label: "Gardening Accessories", value: "gardening-accessories" },
    { label: "Gardening Tools", value: "gardening-tools" },
    { label: "Hanging Decor", value: "hanging-decor" },
    { label: "Hanging Planter", value: "hanging-planter" },
    { label: "Metal Planter", value: "metal-planter" },
    { label: "Metal Stand", value: "metal-stand" },
    { label: "Plant", value: "plant" },
    { label: "Plant Care", value: "plant-care" },
    { label: "Plant Diet", value: "plant-diet" },
    { label: "Plant Stand", value: "plant-stand" },
    { label: "Planter Stand", value: "planter-stand" },
    { label: "Plastic Pot", value: "plastic-pot" },
    { label: "Potting Mix", value: "potting-mix" },
    { label: "Pressure Sprayer", value: "pressure-sprayer" },
    { label: "Seeds", value: "seeds" },
    { label: "Compost", value: "compost" },
    { label: "Wooden Stand", value: "wooden-stand" },
  ];

  return (
    <nav className="bg-white shadow px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-700">
        Nature<span className="text-gray-700">On</span>
      </div>

      {/* Search with Categories */}
      <select className="border px-2 py-1 rounded-l bg-white text-sm text-gray-700">
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
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