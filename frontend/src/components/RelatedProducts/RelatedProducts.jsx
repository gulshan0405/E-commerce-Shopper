import data_product from '../assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className="related-products flex flex-col items-center gap-[10px] h-[90vh] overflow-x-hidden">
      <h1 className="text-[#171717] text-[50px] font-semibold">Related Products</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="relatedproduct-item mt-[50px] flex flex-wrap gap-[20px] justify-center">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
