import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import BredCrums from '../Components/BredCrums/BredCrums';
import Description from "../Components/Description/Description";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { productId } = useParams(); 
  const { all_product } = useContext(ShopContext);


const product = all_product.find((p) => String(p.id) === String(productId));

console.log(" first product id type:", typeof all_product[0].id);

  

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
    </div>
  );
};

export default Product;
