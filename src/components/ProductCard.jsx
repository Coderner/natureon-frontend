import { Link, useNavigate } from 'react-router-dom'
import placeholderImage from "../assets/placeholder.jpeg"
import { useCategories } from '../context/CategoriesContext';

const ProductCard = ({product}) => {

  const {_id, images, name, price, category} = product;
  const imageUrl = images[0] || placeholderImage;
  const {categories} = useCategories();
 
  const navigate = useNavigate();
  
  const categoryName = categories.find((cat)=>cat?._id===category)?.name;

  const onBuyNow = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    navigate("/checkout", { state: { buyNowProduct: { ...product, quantity: 1 } } });
  };

  return (
    <Link to={`/product/${_id}`} title="Click to view details">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
          <div
            className="w-full bg-center bg-cover rounded-t-lg aspect-[4/3]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className='flex-1 px-4 py-2 flex flex-col justify-between'>  

              <h3 className="text-base sm:text-lg font-semibold line-clamp-2 leading-tight">{name}</h3>
              { name.length <= 30 && categoryName && (
                <h5 className='text-sm text-gray-700 line-clamp-1 leading-tight'>
                  ({categoryName})
                </h5>
              )}

              <div className='flex justify-between items-center mt-2 sm:mt-3'> 
                <h4 className="text-base sm:text-lg font-semibold text-gray-700">
                    {
                        new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR"
                        }).format(price)
                      }  
                </h4>   
                <button onClick={onBuyNow} className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors text-sm sm:text-base cursor-pointer whitespace-nowrap max-w-[60%]">
                  Buy Now
                </button>    
              </div>  
          </div>
      </div>
    </Link>
  )
}

export default ProductCard