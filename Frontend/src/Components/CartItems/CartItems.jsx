import React, { useContext } from 'react'
import "./CartItems.css"
import remove_icon from "../../assets/remove.webp"
import { ShopContext } from '../../Context/ShopContext'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CartItems = () => {
  const {  clearCart } = useContext(ShopContext);
   const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  const isCartEmpty = Object.values(cartItems).every((qty) => qty === 0); 
  const navigate=useNavigate();


 const handlePlaceOrder = async () => {
  try {
    const isCartEmpty = Object.values(cartItems).every((qty) => qty === 0);
    if (isCartEmpty) {
      toast.error(" Please fill your cart before checkout.");
      return;
    }

    const userData = localStorage.getItem("user");
    if (!userData) {
      toast.error("User not logged in.");
      return;
    }

    const user = JSON.parse(userData);
    const orderData = {
      userId: user._id,
      items: cartItems,
      totalAmount: getTotalCartAmount(),
    };

    const res = await axios.post("http://localhost:5000/api/orders/place", orderData);
    toast.success(" Order placed successfully!");
    clearCart();
    navigate("/")
  } catch (err) {
    console.error(" Order Error:", err);
    toast.error("Failed to place order.");
  }
};



   
    return (
        <div className='cartItems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className='cartItems-format cartitems-format-main'>
                            <img src={e.image} alt="" height="100px" />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='cartitems-quantity'>
                                {cartItems[e.id]}
                            </button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} alt="" onClick={()=> removeFromCart(e.id)} height="20px"/>
                        </div>
                        <hr/>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button onClick={handlePlaceOrder}>ORDER</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type='text' placeholder='promo code'/>
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems