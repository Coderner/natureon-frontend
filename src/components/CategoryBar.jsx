import React from 'react'

const CategoryBar = () => {

  const categories = [
    { id: 1, name: 'Stands' },
    { id: 2, name: 'Pots' },
    { id: 3, name: 'Seeds' },
    { id: 4, name: 'Plant Care' },
    { id: 5, name: 'Tools & Accessories' },
  ];

  return (
     <div className="w-full overflow-x-auto bg-gray-100 py-2 shadow-sm">
      <div className="flex gap-4 px-4 sm:px-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-1 bg-white rounded-full text-sm shadow hover:bg-green-100 transition whitespace-nowrap"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryBar