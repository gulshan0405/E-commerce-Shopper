

import React,{createContext, useEffect, useState} from 'react'


export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < 300+1; index++) {
       cart[index]=0;
    }
    return cart;
 }
const ShopContextProvider =(props)=>{
    const [allProduct,setAllProduct] =useState([]);
    const [cartItems,setCartItems]=useState(getDefaultCart())

    useEffect (()=>{
       fetch('http://localhost:4000/allproducts')
        .then((responce)=>responce.json())
        .then((data)=>setAllProduct(data))
    },[])
 const addToCart= (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
    
 }
 const removeFromCart= (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }
 const getTotalcartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
        if(cartItems[item] > 0) {
            // Fix the find() method and add return
            let itemInfo = all_product.find((product) => product.id === Number(item));
            
            if(itemInfo) {
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
    }
    return totalAmount;  // Moved outside the loop
}
 const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item];
        }
    }
    return totalItem;
 }
 const contextValue={getTotalCartItems,getTotalcartAmount,cartItems,addToCart,removeFromCart};

 return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
 )
}
 export default ShopContextProvider;
 