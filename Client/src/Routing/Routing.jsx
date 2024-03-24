import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Cart from "../Pages/Cart.jsx";
import Login from "../Pages/Login.jsx";
import Orders from "../Pages/Orders.jsx";
import Profile from "../Pages/Profile.jsx";
import Register from "../Pages/Register.jsx";
import Error from "../Pages/Error.jsx";
import Forgotpassword from "../Pages/Forgotpassword.jsx";




function Routing() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/forgotpassword" element={<Forgotpassword/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>

    </>
    
  );
}

export default Routing;
