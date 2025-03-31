import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <div className="my-8 flex flex-wrap items-center gap-2 text-gray-600 text-sm md:text-base font-semibold capitalize">
      <span className="truncate">HOME</span> <img src={arrow_icon} alt="arrow" /> 
      <span className="truncate">SHOP</span> <img src={arrow_icon} alt="arrow" />
      <span className="truncate">{product.category}</span> <img src={arrow_icon} alt="arrow" /> 
      <span className="truncate">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
