import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import QuantityUpdateButton from '../components/QuantityUpdateButton';
import { getProductById } from '../api/productApi';
import Spinner from "../components/Spinner";
import placeholderImage from "../assets/placeholder.jpeg"

const ProductDetails = () => {
  const { id } = useParams();
  const [product,setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  async function fetchProductById(){
    try{
        setLoading(true);
        const res = await getProductById(id);
        setProduct(res?.data);
        setSelectedImage(res?.data?.images[0] || placeholderImage);
        setError(null);
    }catch(err){
        setProduct({});
        setError("There is error in fetching product details. Please try again later.");
    }finally{
        setLoading(false);
    }    
  }

  useEffect(()=>{
     fetchProductById();
  },[id])

  
  return (

      <div>
        <div className="px-6 py-4 text-gray-600">
          <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: product.name }]} />
        </div>

        {
          loading ? (
            <div className="w-full flex justify-center">
              <Spinner/>
            </div>
          ) : error ?
          (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 items-start">

              {/* Left Section */}

              <div className='md:col-span-2 flex flex-col md:flex-row gap-6 mb-6'>               
                  <img 
                      src={selectedImage} 
                      alt={product?.name} 
                      className=" h-72 md:h-96 rounded-lg shadow-sm object-contain" 
                  />
                  <div className="flex md:flex-col gap-4">
                    {product?.images?.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`rounded-lg shadow-sm p-1 ${selectedImage === img ? 'ring-2 ring-green-500' : ''}`}
                      >
                        <img 
                          src={img} 
                          alt={`Product ${index + 1}`} 
                          className="h-20 md:h-28 w-20 md:w-28 object-cover hover:cursor-pointer" 
                        />
                      </button>
                    ))}
                  </div>
              </div>

              {/* Right Section */}

              <div className='md:col-span-1 px-8 py-4 rounded-2xl bg-gray-100 shadow-sm flex flex-col gap-2.5'>

                <h1 className="text-4xl font-bold">{product?.name}</h1>
                <p className=" text-gray-500 font-medium">
                  {`${product?.category} | ${product?.subcategory} | ${product?.description}`}
                </p>
                <p className="text-4xl font-semibold"> 
                  {
                    new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR"
                    }).format(product?.price)
                  }
                </p>
                <QuantityUpdateButton quantity={quantity} setQuantity={setQuantity}/>
                <Link to="/cart">
                    <button className="w-2/3 bg-green-600 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-green-700 hover:cursor-pointer">
                      Add to Cart
                    </button>
                </Link>
              </div>

            </div>
          )
        }
      </div>
  );
};

export default ProductDetails;


