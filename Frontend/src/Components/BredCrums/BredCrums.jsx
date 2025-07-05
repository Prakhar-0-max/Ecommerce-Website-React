import React from 'react'
import arrow_icon from "../../assets/arrow_icon.png"
import "./BredCrums.css"

const BredCrums = ({ product }) => {
  return (
    <div className='breadcrums'>
      Home <img src={arrow_icon} alt="" height="10px" /> 
      Shop <img src={arrow_icon} alt="" height="10px" /> 
      {product?.category || "Category"} <img src={arrow_icon} alt="" height="10px" /> 
      {product?.name || "Product"} <img src={arrow_icon} alt="" height="10px" />
    </div>
  )
}

export default BredCrums
