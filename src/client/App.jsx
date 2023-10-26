import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import './style.css'
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from './components/Cart';
import ProductDetail from "./components/ProductDetail";
import SearchBar from "./components/SearchBar";
import Faker from "./components/Faker";


export default function App({ onSearch, product, cartItems}) {



  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path ='/Login' element={<Login />} />
      <Route path ='/Register' element={<Register />} />
    </Routes>
    </>
  )
}
