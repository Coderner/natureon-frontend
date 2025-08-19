import { Link } from 'react-router-dom'
import placeholderImage from "../assets/placeholder.jpeg"
import { useCategories } from '../context/CategoriesContext';

const ProductCard = ({product}) => {

  const {_id, images, name, price, category} = product;
  const imageUrl = images[0] || placeholderImage;
  const {categories} = useCategories();
  
  const categoryName = categories.find((cat)=>cat?._id===category)?.name;

  return (
    <Link to={`/product/${_id}`}>
      <div className="py-2 rounded-lg shadow-xl h-80 sm:h-72 transition-transform duration-300 hover:scale-105 overflow-hidden">
          <img src={imageUrl} alt={name} className="w-full h-44 object-contain mb-2"/>
          <div className='flex-1 px-4 flex flex-col sm:flex-row justify-between sm:items-end'>   
              <div> 
                <div className='flex gap-1 items-end'>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <h5 className='hidden xl:block text-gray-700'>({categoryName})</h5>
                </div>
                <h4 className="text-2xl font-bold text-gray-700 mt-1">
                   {
                      new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR"
                      }).format(price)
                    }  
                </h4> 
              </div>    
              <Link to="/checkout">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-xl mt-2 sm:mt-0">
                    Buy Now
                  </button>      
              </Link>  
          </div>
      </div>
    </Link>
  )
}

export default ProductCard