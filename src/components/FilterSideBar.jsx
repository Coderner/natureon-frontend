import { useState } from "react";

const FilterSideBar = () => {
  const [sort, setSort] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Filter by Color</h3>
        <div className="space-y-1 text-sm">
          {['Green', 'Brown', 'White'].map(color => (
            <label key={color} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-green-500" />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Filter by Price</h3>
        <div className="space-y-1 text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Under ₹200</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>₹200 - ₹300</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Above ₹300</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Sort by Price</h3>
        <select
          className="w-full p-1 border rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSideBar;