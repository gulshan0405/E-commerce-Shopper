import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategories = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category flex flex-col items-center">
      {/* Banner Section */}
      <div className="w-full flex justify-center my-[30px]">
        <img
          className="w-[82%] max-w-[1200px] object-cover"
          src={props.banner}
          alt="Shop Banner"
        />
      </div>

      {/* Index and Sort Section */}
      <div className="shopcategory-indexSort flex justify-between items-center w-full max-w-[1200px] px-[20px] mb-[50px]">
        <p>
          <span className="font-semibold">Showing 1-12 </span> Out of 36 products
        </p>
        <div className="shopcategory-sort flex items-center gap-2 py-[10px] px-[20px] rounded-[40px] border border-[#888]">
          Sort By <img src={dropdown_icon} alt="Sort Dropdown" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="pt-[20px]"></div>
      <div className="shop-category-product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[60px] w-full max-w-[1200px] px-[20px]">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <div
                key={item.id}
                className="w-full h-full flex items-center justify-center"
              >
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      {/* Load More Button */}
      <div className="pt-[100px]">
      <div
        className="shopcategory-loadmore flex items-center justify-center mt-[100px] w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium shadow-md cursor-pointer hover:bg-[#d6d6d6] transition duration-300"
        style={{ marginBottom: "100px" }}
      >
        Explore More
      </div>
      </div>
      
    </div>
  );
};

export default ShopCategories;
