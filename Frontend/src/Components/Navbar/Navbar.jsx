import React, { useContext, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import toast from 'react-hot-toast';

export const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.clear(); 
      toast.success("Logout successful!");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="40px" />
        <p>Shopify</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu('home')}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        {!user ? (
          <>
            <Link to="/login"><button className='login-btn'>Login</button></Link>
            <Link to="/signup"><button>Signup</button></Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}

        <div className='cart'>
          <Link to="/cart"><img src={cart_icon} alt="" height="40px" /></Link>
        </div>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
