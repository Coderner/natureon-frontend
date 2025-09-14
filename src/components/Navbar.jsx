import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCategories } from "../context/CategoriesContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAdmin } from "../context/AdminContext";

const Navbar = () => {
  const {cartItems} = useCart();
  const { categories} = useCategories();
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleSubCategoryClick = (subcategory) => {
    navigate(`/products?subcategory=${subcategory}`);
  };

  const subCategories = categories?.flatMap((category) =>{
     return(category?.subcategories?.map((subcategory)=>{
          return subcategory;
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
      <select 
        className="border p-2 rounded-lg bg-white text-gray-700 md:w-1/2"
        onChange={(e) => handleSubCategoryClick(e.target.value)}
      >
        {subCategories?.map((subcategory) => (
          <option 
            key={subcategory} 
            value={subcategory} 
          >
            {subcategory}
          </option>
        ))}
      </select>

      {/* Cart Icon */}
      <div className="flex items-end gap-4">
        {!isAdmin ? (
          <button
            className="px-2 py-1 bg-green-600 text-white rounded-lg"
            onClick={() => navigate("/admin/login")}
          >
            Admin Login
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => navigate("/admin/upload-product")}
          >
            Upload Products
          </button>
        )}

        <Link to="/cart">
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;