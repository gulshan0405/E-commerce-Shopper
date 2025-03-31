import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers w-full flex flex-col lg:flex-row items-center lg:items-stretch py-12 px-6 sm:px-12 lg:px-24 mb-[140px] bg-gradient-to-r from-[#fde1ff] to-[#e1ffea]">
      {/* Left Section */}
      <div className="offers-left flex-1 flex flex-col justify-center items-center lg:items-start space-y-6 lg:space-y-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] leading-tight">
          Exclusive Offers
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700">
          Only on best sellers products
        </p>
        <button className="px-6 py-3 bg-[#ff4141] text-white text-lg rounded-lg shadow-md hover:bg-[#e63b3b] active:scale-95 transition-all">
          Check Now
        </button>
      </div>

      {/* Right Section */}
      <div className="offers-right flex-1 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={exclusive_image}
          alt="Exclusive Offers"
          className="w-[80%] sm:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[400px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Offers;
