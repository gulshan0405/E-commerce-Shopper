import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-16 mt-8">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
        {/* Main Image */}
        <div className="w-full">
          <img
            className="w-full h-auto max-h-[300px] md:max-h-[500px] lg:max-h-[625px]"
            src={product.image}
            alt="Product"
          />
        </div>

        {/* Image List (Stacks below the main image on smaller screens) */}
        <div className="flex flex-row md:flex-row lg:flex-col gap-4 overflow-x-auto md:justify-between lg:overflow-visible mt-4 md:mt-0">
          <img
            className="h-[80px] md:h-[120px] lg:h-[144px] w-[20%] md:w-[23%] lg:w-full object-cover"
            src={product.image}
            alt="Thumbnail"
          />
          <img
            className="h-[80px] md:h-[120px] lg:h-[144px] w-[20%] md:w-[23%] lg:w-full object-cover"
            src={product.image}
            alt="Thumbnail"
          />
          <img
            className="h-[80px] md:h-[120px] lg:h-[144px] w-[20%] md:w-[23%] lg:w-full object-cover"
            src={product.image}
            alt="Thumbnail"
          />
          <img
            className="h-[80px] md:h-[120px] lg:h-[144px] w-[20%] md:w-[23%] lg:w-full object-cover"
            src={product.image}
            alt="Thumbnail"
          />
        </div>
      </div>

      {/* Right Section (Stacks below on smaller screens) */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 mt-8 lg:mt-0">
        {/* Product Name */}
        <h1 className="text-[#3d3d3d] text-[20px] md:text-[28px] lg:text-[40px] font-bold">
          {product.name}
        </h1>

        {/* Rating Section */}
        <div className="flex items-center gap-2 text-[#1c1c1c] text-[14px] md:text-[16px]">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>(122)</p>
        </div>

        {/* Price Section */}
        <div className="flex gap-4 text-[18px] md:text-[22px] lg:text-[24px] font-bold mt-2">
          <div className="text-[#818181] line-through">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>

        {/* Description */}
        <p className="text-[#555] text-[14px] md:text-[16px]">
          A whisper of midnight blue silk, this dress drapes like liquid
          moonlight, catching the light with a subtle, ethereal sheen. Delicate,
          hand-stitched silver threads trace floral patterns along the neckline
          and hem, adding a touch of ancient elegance.
        </p>

        {/* Size Selection */}
        <div className="mt-6">
          <h2 className="text-[#656565] text-[16px] md:text-[18px] font-semibold">
            Select Size
          </h2>
          <div className="flex gap-4 mt-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="py-2 md:py-3 px-4 md:px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-md cursor-pointer text-center"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product.id)}
          className="py-3 md:py-4 px-6 w-full max-w-[200px] text-[14px] md:text-[16px] font-semibold text-white bg-[#ff4141] rounded-md mt-6"
        >
          ADD TO CART
        </button>

        {/* Additional Info */}
        <p className="mt-4 text-[14px] md:text-[16px]">
          <span className="font-medium">Category:</span> Women, T-shirt, Crop-Top
        </p>
        <p className="text-[14px] md:text-[16px]">
          <span className="font-medium">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
