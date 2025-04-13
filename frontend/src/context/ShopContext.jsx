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
      
      useEffect(() => {
        const fetchCartItems = async () => {
            const token = localStorage.getItem('auth-token');
            if (!token) return;
    
            try {
                const res = await fetch('http://localhost:4000/getcart', {
                    method: 'GET',
                    headers: {
                        'auth-token': token,
                    },
                });
    
                if (!res.ok) {
                    throw new Error('Failed to fetch cart items');
                }
    
                const data = await res.json();
                console.log("Fetched Cart Items:", data);
    
                // Set cartItems from backend (example assumes shape is { 1: 2, 4: 1, ... })
                setCartItems(data.cartData || {});
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };
    
        fetchCartItems();
    }, []);
    

      const addToCart = useCallback((itemId) => {
        console.log("entered in add to cart");
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    
        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                },
                body: JSON.stringify({ itemId }),
            })
            .then((res) => res.json())
            .then((data) => console.log("Server response:", data))
            .catch((err) => console.error("Fetch error:", err));
        }
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
