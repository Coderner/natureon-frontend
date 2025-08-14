import React from 'react'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
       <nav className="bg-white shadow px-4 py-3 flex items-center justify-between">
         {/* Logo */}
         <Link to="/">
            <div className="text-2xl font-bold text-green-700">
            Nature<span className="text-gray-700">On</span>
          </div>
         </Link>
       </nav>
     );
};


export default AdminNavbar