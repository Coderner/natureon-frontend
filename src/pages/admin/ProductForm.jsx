import React, {useState} from 'react'
import FormInput from '../../components/FormInput';
import { categories } from "../../data/categories";

const ProductForm = () => {

  const [formData, setFormData] = useState({
        name: "",
        description: "",
        images: "",
        price: "",
        quantity: "",
        category: "",
        subcategory: "",
        inStock: true,
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData({
      ...formData,
      category,
      subcategory: "",
    });
  };

  const selectedCategory = categories.find(
    (cat) => cat.name === formData.category
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    alert("Form submitted! (UI only)");
  };

  return (
      <div className='flex justify-center'>
        <div className='p-4 w-full md:w-1/2 shadow-sm rounded-2xl mt-10'>
            <div className='border-b-1 border-b-green-700 mb-2 p-0.5'>
                <h1 className='text-2xl font-bold text-gray-500'>Add a new Product</h1>
            </div>

            <form className='w-full  py-2' onSubmit={handleSubmit}>
                <FormInput
                    label="Product Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tulsi"
                />
                <div className="mb-4">
                    <label className="block font-semibold mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description of the product"
                        className="border rounded px-3 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                        rows={4}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-1">Product Images</label>
                    <div
                        className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer hover:border-green-400 transition"
                        onClick={() => document.getElementById("imageUpload").click()}
                    >
                        <p className="text-gray-500">Click or drag images here to upload</p>
                        <input
                            type="file"
                            id="imageUpload"
                            multiple
                            accept="image/*"
                            onChange={(e) => setImages([...e.target.files])}
                            className="hidden"
                        />
                        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                            {images.map((file, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`preview ${index}`}
                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                            ))}
                        </div>
                    </div>
                </div>

                <FormInput
                    label="Price"
                    name="price"
                    type="text"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="20"
                />

                <div className="mb-4">
                    <label className="block font-semibold mb-1">Category</label>
                    <select
                    name="category"
                    value={formData.category}
                    onChange={handleCategoryChange}
                    className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat.name} value={cat.name}>
                        {cat.name}
                        </option>
                    ))}
                    </select>
                </div>

                {selectedCategory && (
                    <div className="mb-4">
                    <label className="block font-semibold mb-1">Subcategory</label>
                    <select
                        name="subcategory"
                        value={formData.subcategory}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <option value="">Select Subcategory</option>
                        {selectedCategory.subcategories.map((sub) => (
                        <option key={sub} value={sub}>
                            {sub}
                        </option>
                        ))}
                    </select>
                    </div>
                )}


                <FormInput
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="4"
                    min={0} 
                />

                <div className="mb-4 flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="inStock"
                        checked={formData.inStock}
                        onChange={handleChange}
                        id="inStock"
                        className="h-4 w-4"
                    />
                    <label htmlFor="inStock" className="font-semibold">
                        In Stock
                    </label>
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition hover:cursor-pointer"
                >
                    Create Product
                </button>
            </form>

        </div>
      </div>
  )
}

export default ProductForm