import { Link, useNavigate } from 'react-router-dom'
import placeholderImage from "../assets/placeholder.jpeg"
import { useCategories } from '../context/CategoriesContext';

const ProductCard = ({product}) => {

  const {_id, images, name, description, price, category} = product;
  console.log(images);
  const imageUrl = images[0];
  const {categories} = useCategories();
 
  const navigate = useNavigate();
  
  const categoryName = categories.find((cat)=>cat?._id===category)?.name;

  

  return (
    <Link to={`/product/${_id}`} title="Click to view details">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src={imageUrl}
            alt={name}
            className="w-full aspect-[4/3] object-cover rounded-t-lg"
            onError={(e) => {
              e.currentTarget.src = placeholderImage;
            }}
          />
          <div className='flex-1 px-4 py-2 flex flex-col justify-between'> 
              <div className="text-blue-600 hover:text-blue-800 underline">
                <h3 className="text-base sm:text-lg font-semibold line-clamp-2 leading-tight">{name}</h3>
                <h5 className='text-sm line-clamp-1 leading-tight'>
                  ({categoryName}) | {description}
                </h5>
              </div> 
              <h4 className="text-base sm:text-lg font-semibold text-gray-700">
                    {
                        new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR"
                        }).format(price)
                      }  
                </h4>    
          </div>
      </div>
    </Link>
  )
}

export default ProductCard