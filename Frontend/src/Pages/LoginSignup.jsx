import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import "../CSS/LoginSignup.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginSignup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData,{
        withCredentials: true,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error("Login failed. Please check credentials.");
      console.error(err);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="loginsignup-btn">Continue</button>
        </form>

        <p className='loginsignup-login'>
          Create account?{" "}
          <Link to={"/signup"}>
            <span>Signup here</span>
          </Link>
        </p>

        <div className='loginsignup-agree'>
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
