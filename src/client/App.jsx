import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import './style.css'
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from './components/Cart';
import ProductDetail from "./components/ProductDetail";
import SearchBar from "./components/SearchBar";


export default function App({ onSearch }) {

  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path ='/Login' element={<Login />} />
      <Route path ='/Register' element={<Register />} />
    </Routes>
    </>
  )
}
