import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import supabase from "./supabase";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/userslices";

const App = () => {
  const dispatch = useDispatch();
  
  const getUser = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
      } else if (data?.session?.user) {
        dispatch(setUser(data.session.user));
      } else {
        console.error("Session data is missing or incomplete");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
