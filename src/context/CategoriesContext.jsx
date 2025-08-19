import { createContext, useContext, useEffect, useState } from "react";
import { getCategories } from "../api/categoryApi";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
       try{
            setLoading(true);
            const res = await getCategories(); 
            setCategories(res?.data);
            setError(null);
          }catch(err){
            setError("There is an error loading the categories. Please try again later.");
            setCategories([]);
          }finally{
            setLoading(false);
       }
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, loading, error }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);
