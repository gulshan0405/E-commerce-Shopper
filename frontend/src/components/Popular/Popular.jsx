import data_product from '../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className="popular w-full min-h-[500px] flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-[#171717] text-[50px] font-semibold sm:text-3xl lg:text-4xl  text-center mb-2">
          POPULAR IN WOMEN
        </h1>
        <div className='h-5'></div>
        <hr style={{marginBottom:"10px"}} className="w-28 h-1 bg-gray-800 rounded-full" />
      </div>
  
      {/* Centered Grid Container */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl ">
          {data_product.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Popular;