import { useEffect, useState } from "react";
import  cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      });
  };
  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product= async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{
          Accept:'application',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
    })
    await fetchInfo()
  }
  return (
    <div style={{margin:"30px"}} className="list-product flex flex-col items-center w-auto h-fit py-[10px] px-[0px] md:px-[50px] m-[30px] bg-white rounded-[6px] ">
      <h1 className="text-[20px] md:text-[30px] font-medium" >All Product List</h1>
      <div style={{gridTemplateColumns:"1fr 3fr 1fr 1fr 1fr 1fr"}} className="listproduct-format-main hidden md:grid gap-[10px] w-full py-[20px] px-[0px] text-[#454545] text-[15px] font-semibold ">
        <p>Product</p>
        <p>Title</p>
        <p>Old_Price</p>
        <p>New_Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts overflow-y-auto mt-3.5 h-[400px]">
        <hr className="mb-3.5 text-[#454545]" />
        {allProduct.map((product,index)=>{
           return <>
           <div style={{gridTemplateColumns:"1fr 3fr 1fr 1fr 1fr 1fr"}} key={index} className="listproduct-format-main grid listproduct-format gap-3 items-center font-medium  mb-3" >
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{remove_product(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="" />
           </div>
           <hr className="mb-2" />
           </> 
        })}
      </div>
    </div>
  );
};

export default ListProduct;
