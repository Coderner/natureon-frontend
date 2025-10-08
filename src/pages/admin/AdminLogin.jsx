import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../api/adminApi";
import { useAdmin } from "../../context/AdminContext";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { loginAdmin } = useAdmin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await adminLogin(formData);
      if(res.success)
      {
        loginAdmin();
        navigate("/"); 
        setError(null);
      }else{
        setError("Login Error: Either email or password is wrong");
      }
    }catch(err){
        setError("Login Error: Either email or password is wrong");
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="p-6 w-full md:w-1/2 shadow-sm rounded-2xl mt-20 bg-white">
        <div className="border-b border-green-700 mb-4 pb-2">
          <h1 className="text-2xl font-bold text-gray-600">Login as Seller</h1>
        </div>
        <form className="w-full py-2 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition w-full ${loading ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer hover:bg-green-600"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
