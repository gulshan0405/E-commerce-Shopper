import React, { createContext, useEffect, useState, useCallback } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [allProduct, setAllProduct] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
          .then((response) => response.json())
          .then((data) => {
            console.log("Fetched Products:", data); 
            setAllProduct(data);
          })
          .catch((error) => console.error("Error fetching products:", error)); 
      }, []);
      

    const addToCart = useCallback((itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }, []);

    const removeFromCart = useCallback((itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }, []);

    const getTotalcartAmount = useCallback(() => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }, [cartItems, allProduct]);

    const getTotalCartItems = useCallback(() => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }, [cartItems]);

    const contextValue = {
        allProduct,
        getTotalCartItems,
        getTotalcartAmount,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
