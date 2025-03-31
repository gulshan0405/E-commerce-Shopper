import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero min-h-[100vh] bg-gradient-to-r from-[#fde1ff] to-[#e1ffea] flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      {/* Left Section */}
      <div className="hero-left flex-1 flex flex-col gap-5 lg:pl-[180px] px-6 text-center lg:text-left pt-10 lg:pt-0">
        <h2 className="text-black text-2xl font-semibold">NEW ARRIVALS ONLY</h2>
        <div className="leading-[1.1]">
          <div className="hero-hand-icon flex items-center gap-5 justify-center lg:justify-start">
            <p className="text-[#171717] text-[60px] md:text-[80px] lg:text-[100px] font-semibold">new</p>
            <img src={hand_icon} alt="Hand Icon" className="w-[60px] md:w-[80px] lg:w-[105px]" />
          </div>
          <p className="text-[#171717] text-[60px] md:text-[80px] lg:text-[100px] font-semibold">collections</p>
          <p className="text-[#171717] text-[60px] md:text-[80px] lg:text-[100px] font-semibold">for everyone</p>
        </div>
        <button className="hero-latest-btn flex items-center justify-center gap-4 w-full lg:w-[310px] h-[70px] rounded-full mt-5 bg-[#ff4141] text-white text-lg font-medium hover:bg-[#e63b3b] transition mx-auto lg:mx-0">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="Arrow Icon" className="w-5" />
        </button>
      </div>

      {/* Right Section */}
      <div className="hero-right flex-1 flex items-center justify-center w-full lg:w-auto mt-5 lg:mt-0 px-6 lg:px-0">
        <img 
          src={hero_image} 
          alt="Hero Collection" 
          className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain" 
        />
      </div>
    </div>
  );
};

export default Hero;