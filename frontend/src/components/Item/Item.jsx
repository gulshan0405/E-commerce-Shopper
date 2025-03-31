import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item w-full sm:w-[200px] md:w-[250px] lg:w-[300px] p-4 hover:scale-[1.02] transition-transform duration-300 ease-in-out shadow-md rounded-lg bg-white">
      {/* Link to Product Page */}
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className="block">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain object-center transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 space-y-2 text-center">
        {/* Product Name */}
        <p className="text-sm sm:text-base font-medium text-gray-900 truncate" title={name}>
          {name}
        </p>

        {/* Product Prices */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-lg font-semibold text-gray-900">${new_price}</span>
          {old_price && (
            <span className="text-sm text-gray-500 line-through">${old_price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
