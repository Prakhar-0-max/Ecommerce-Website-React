import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { Toaster } from 'react-hot-toast';
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/men_banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import Signup from "./Pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner}category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner}category="kid" />} />
         <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
       <Toaster position="top-center" reverseOrder={false} />
      <Footer/>
    </BrowserRouter>  
  );
}

export default App;
