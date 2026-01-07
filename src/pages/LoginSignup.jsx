import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login, signup} from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const LoginSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoginForm,setIsLoginForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { loginUser } = useAuth();

  const from = location.state?.from || "/";
  const infoMessage = location.state?.message;

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
      const res = isLoginForm ? await login(formData) : await signup(formData);
      if(res.success)
      {
        loginUser(res.data.token);
        navigate(from, { replace: true }); 
        setError(null);
      }else{
        setError("Either email or password is wrong");
      }
    }catch(err){
        setError("Either email or password is wrong");
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="p-6 w-full md:w-1/2 shadow-sm rounded-2xl mt-20 bg-white">
        {infoMessage && (
          <div className="mb-4 p-3 rounded-xl bg-yellow-100 text-yellow-800 text-sm">
            {infoMessage}
          </div>
        )}
        <div className="border-b border-green-700 mb-4 pb-2">
          <h1 className="text-2xl font-bold text-gray-600">
            {isLoginForm?"Login":"Signup"}
          </h1>
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
            {isLoginForm?"Login":"Signup"}
          </button>
          <div className="flex gap-1">
              <div>{isLoginForm? "New User? " : "Already have an account? "}</div>
              <button 
                onClick={()=>{
                   setIsLoginForm(prev => !prev)
                   setFormData({ email: "", password: "" });
                   setError(null);
                }} 
                className="text-blue-600 underline cursor-pointer"
                type="button"
              >
                {isLoginForm ? "Signup": "Login"}
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
