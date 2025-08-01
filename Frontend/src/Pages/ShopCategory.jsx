import React, { useContext } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import Item from "../Components/Item/item"
import dropdown_icon from "../assets/dropdown_icon.png"


export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt=""/>
      <div className='shopcategory-indexSort'>
        <p>
          <span> Showing 1-12</span> Out of 36 Products
        </p>
        <div className='shopcategory-Sort'>
          Sort by <img src={dropdown_icon} alt="" height="20px" />
        </div>


      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}
export default ShopCategory