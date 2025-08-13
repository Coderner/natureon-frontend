import React from "react";
import AdminNavbar from "../components/AdminNavbar"; 
import AdminSidebar from "../components/AdminSidebar"; 
import Footer from "../components/Footer"; 
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <AdminNavbar />
        <main className="flex-grow">
          <Outlet /> 
        </main>
        <Footer />
      </div>
  );
};

export default AdminLayout;
