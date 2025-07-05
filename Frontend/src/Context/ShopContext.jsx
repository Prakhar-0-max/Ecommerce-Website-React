import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDeafultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {


  const [cartItems, setCartItems] = useState(getDeafultCart());
    const clearCart = () => {
  setCartItems(getDeafultCart());
};

  const addtocart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = all_product.find((p) => p.id === Number(item));
        if (product) {
          totalAmount += product.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

   const getTotalCartItems = () => {
  let totalItem = 0;
  for (const item in cartItems) {
    totalItem += cartItems[item];
  }
  return totalItem

}

  const contextValue = {
    all_product,
    cartItems,
    addtocart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
     clearCart
  };
 



  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
