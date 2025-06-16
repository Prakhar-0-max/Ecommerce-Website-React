import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import {useParams} from "react-router-dom"
import BredCrums from '../Components/BredCrums/BredCrums'
import Description from "../Components/Description/Description"
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'
const Product = () => {
  const{all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id===parseInt(productId)) 

  return (
    <div>
      <BredCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description />
      <RelatedProduct/>
    </div>
  )
}
export default Product