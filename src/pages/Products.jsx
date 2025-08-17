import {useEffect, useState} from 'react'
import FilterSideBar from '../components/FilterSideBar'
import ProductCard from '../components/ProductCard'
import BreadCrumb from '../components/BreadCrumb'
import { getProducts } from '../api/productApi'

const Products = () => {

  const [showFilter, setShowFilter] = useState(false);
  const [products,setProducts] = useState([]);

  async function fetchProducts(){
    const res = await getProducts();
    setProducts(res?.data);
  }

  useEffect(()=>{
     fetchProducts();
  },[])

  return (
     <div>

      {/* BreadCrumbs */}
      <div className='flex justify-between items-center'>
            <div className="px-6 py-4 text-gray-600">
              <BreadCrumb items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
            </div>
            <button
              className="md:hidden py-1 px-4 bg-green-600 text-white rounded"
              onClick={() => setShowFilter(true)}
            >
              Filters
            </button>
      </div>
      

      {/* Main Content */}
      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Filter Sidebar */}

        {showFilter && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="bg-gray-100 w-1/2 h-full p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilter(false)}
                  className="text-gray-600 text-2xl font-bold"
                >
                x
                </button>
              </div>
              <FilterSideBar />
            </div>
          </div>
        )}

        <aside className="hidden md:block md:col-span-1">
          <FilterSideBar />
        </aside>

        {/* Products Area */}
        <main className="md:col-span-3">
          <h2 className="text-2xl font-semibold mb-1">All Plant Accessories</h2>
          <p className="text-gray-600 mb-6">Explore our collection of eco-friendly and decorative plant accessories curated just for you.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Products