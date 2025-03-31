const NewsLetter = () => {
  return (
    <div style={{marginTop:"20px"}} className="flex justify-center px-4 sm:px-6 lg:px-12">
      <div className="news-letter w-full max-w-[1200px] h-auto flex flex-col items-center justify-center py-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#fde1ff] to-[#e1ffea] gap-8 rounded-lg shadow-md">
        {/* Heading */}
        <h1 className="text-[#454545] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">
          Get Exclusive Offers On Your Email
        </h1>

        {/* Subheading */}
        <p className="text-[#454545] text-base sm:text-lg lg:text-xl text-center">
          Subscribe to our newsletter and stay updated
        </p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-[800px] gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-[50px] sm:h-[60px] px-4 sm:px-6 text-gray-700 font-[poppins] text-sm sm:text-base border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full sm:w-[210px] h-[50px] sm:h-[60px] bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
