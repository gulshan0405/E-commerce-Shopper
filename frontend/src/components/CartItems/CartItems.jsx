import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { IoMdRemoveCircle } from "react-icons/io";

const CartItems = () => {
  const { getTotalcartAmount, all_product, cartItems, removeFromCart, addToCart } =
    useContext(ShopContext);

  return (
    <div className="cartItems mx-auto p-4 md:p-8 lg:p-16">
      {/* Cart Table Header */}
      <div
        style={{ gridTemplateColumns: "1fr 2fr 1fr 1fr 1fr 1fr" }}
        className="cart-header hidden md:grid grid-cols-6 gap-4 py-4 px-0 text-sm md:text-base text-gray-700 font-semibold"
      >
        <p>Products</p>
        <p className="pl-7">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[2px] bg-gray-200" />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div
              key={e.id}
              className="cart-item grid grid-cols-2 md:grid-cols-6 gap-4 py-4 px-0 text-sm md:text-base text-gray-700 items-center"
            >
              {/* Product Image */}
              <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                <img
                  className="w-[100px] md:w-[150px] object-contain"
                  src={e.image}
                  alt={e.name}
                />
              </div>

              {/* Product Title */}
              <p className="col-span-2 md:col-span-1 text-center">{e.name}</p>

              {/* Product Price */}
              <p className="hidden md:block col-span-1 text-center">
                ${e.new_price}
              </p>

              {/* Quantity Controls */}
              <div className="col-span-2 md:col-span-1 flex justify-center items-center gap-2">
                <button
                  onClick={() => addToCart(e.id)}
                  className="bg-green-300 text-white font-bold py-1 px-3 rounded hover:bg-green-600 transition"
                >
                  +
                </button>
                <span className="font-bold">{cartItems[e.id]}</span>
                <button
                  onClick={() => {
                    if (cartItems[e.id] > 1) {
                      removeFromCart(e.id);
                    }
                  }}
                  className="bg-red-300 text-white font-bold py-1 px-3 rounded hover:bg-red-600 transition"
                >
                  -
                </button>
              </div>

              {/* Product Total */}
              <p className="hidden md:block col-span-1 text-center">
                ${(e.new_price * cartItems[e.id]).toFixed(2)}
              </p>

              {/* Remove Icon */}
              <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                <IoMdRemoveCircle
                  onClick={() => removeFromCart(e.id)}
                  className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700 transition"
                />
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Cart Total Section */}
      <hr className="h-[2px] bg-gray-200 mt-4" />
      <div className="cart-total flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
        {/* Total Summary */}
        <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-lg font-semibold">Cart Total</h2>
          <div>
            <div className="flex justify-between py-2">
              <p>Subtotal</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <h3>Total</h3>
              <h3>${getTotalcartAmount()}</h3>
            </div>
          </div>
          <button className="w-full lg:w-auto bg-red-500 text-white text-sm font-semibold py-2 px-6 rounded hover:bg-red-600 transition">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="promo-code w-full lg:w-1/2 flex flex-col items-center">
          <p className="text-sm text-gray-600 text-center">
            If you have a promo code, enter it here:
          </p>
          <div className="flex items-center gap-2 mt-2">
            <input
              className="flex-1 border border-gray-300 rounded p-2 text-sm outline-none"
              type="text"
              placeholder="Promo Code"
            />
            <button className="bg-black text-white text-sm font-semibold py-2 px-4 rounded hover:bg-gray-800 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
