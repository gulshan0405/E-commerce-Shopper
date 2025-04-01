import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrum from "../components/Breadcrum/Breadcrum"
import ProductDisplay from "../components/ProductDisplay/ProductDisplay"
import DescriptionBox from "../components/DescriptionBox/DescriptionBox"
import RelatedProducts from "../components/RelatedProducts/RelatedProducts"

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();

  if (allProduct.length === 0) {
    return <div>Loading...</div>;
  }

  const product = allProduct.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};


export default Product