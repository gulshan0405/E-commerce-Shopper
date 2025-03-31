import React from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <SideBar />
      <div className="flex-1 p-5">
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} /> {/* Fixed Typo */}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
