import React from 'react'
import { categories } from '../data/categories'

const CategoryBar = () => {

  return (
     <div className="w-full overflow-x-auto bg-gray-100 py-4 shadow-sm">
      <div className="flex gap-4 px-4 sm:px-8">
        {categories.map((category) => (
          <button
            className="px-5 py-2 bg-white rounded-full font-semibold shadow hover:bg-green-600 hover:text-white hover:cursor-pointer transition whitespace-nowrap"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryBar