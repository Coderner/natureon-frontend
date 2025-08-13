import React from 'react'

const AdminNavbar = () => {
  return (
       <nav className="bg-white shadow px-4 py-3 flex items-center justify-between">
         {/* Logo */}
         <div className="text-2xl font-bold text-green-700">
           Nature<span className="text-gray-700">On</span>
         </div>
       </nav>
     );
};


export default AdminNavbar