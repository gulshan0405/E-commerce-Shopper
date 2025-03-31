import { Link } from "react-router-dom"
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_List_icon.svg'
import './SideBar.css'
const SideBar = () => {
  return (
    
    <div className="md:flex-row  ">
       <div className="sidebar flex flex-col pt-[30px] gap-[20px] min-w-[250px] h-[100vh] mt-[2px] bg-white ">
      
      <Link to={'./addproduct'} style={{textDecoration:"none"}}>
         <div style={{margin:"0px 20px"}} className="sidebar-item flex items-center justify-center py-[5px] px-[10px] rounded-[6px] bg-[#f6f6f6] gap-[20px] cursor-pointer ">
             <img src={add_product_icon} alt="" />
             <p>Add Product</p>
         </div>
      </Link>
      <Link to={'./listproduct'} style={{textDecoration:"none"}}>
         <div style={{margin:"0px 20px"}} className="sidebar-item flex items-center justify-center py-[5px] px-[10px] rounded-[6px] bg-[#f6f6f6] gap-[20px] cursor-pointer ">
             <img src={list_product_icon} alt="" />
             <p>Product List</p>
         </div>
      </Link>
     </div>
    </div>
   
  )
}

export default SideBar