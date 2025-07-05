import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link, Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData,{
        withCredentials: true,
      });
       toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      
      toast.error("Failed to signup. Please try again later.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder='Your name'
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder='Your Email'
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder='Password'
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button type="submit" className="loginsignup-btn">Continue</button>
        </form>

        <p className='loginsignup-login'>
          Already have an account? <Link to="/login"><span>Login here</span></Link>
        </p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;