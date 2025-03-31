const DescriptionBox = () => {
  return (
    <div className="descriptionbox mt-[60px] lg:mt-[120px] px-4 md:px-12 lg:px-[170px]">
      <div className="descriptionbox-navigator">
        {/* Navigation Tabs */}
        <div className="flex gap-2">
          <div
            className="descriptionbox-nav-box flex items-center justify-center text-[14px] md:text-[16px] font-semibold w-[120px] md:w-[150px] lg:w-[171px] h-[50px] md:h-[60px] lg:h-[70px] border border-[#d0d0d0]"
          >
            Description
          </div>
          <div
            className="descriptionbox-nav-box-fade bg-[#fbfbfb] text-[#555] flex items-center justify-center text-[14px] md:text-[16px] font-semibold w-[120px] md:w-[150px] lg:w-[171px] h-[50px] md:h-[60px] lg:h-[70px] border border-[#d0d0d0]"
          >
            Review(122)
          </div>
        </div>

        {/* Description Content */}
        <div
          className="descriptionbox-description flex flex-col gap-6 md:gap-8 p-4 md:p-8 lg:p-[48px] lg:pb-[70px] mt-4 border border-[#d0d0d0]"
        >
          <p className="text-[14px] md:text-[16px] text-[#555] leading-[1.6]">
            Shopper is your ultimate online shopping destination, offering a
            diverse range of products, from trendy fashion and cutting-edge
            electronics to home essentials and unique handmade items. With
            exclusive deals, fast delivery, secure payments, and 24/7 customer
            support, we ensure a seamless shopping experience. Discover premium
            quality, unbeatable prices, and convenience all in one place. Shop
            now and redefine the way you shop online!
          </p>
          <p className="text-[14px] md:text-[16px] text-[#555] leading-[1.6]">
            Explore new arrivals, grab seasonal discounts, and enjoy a
            hassle-free return policy. Join thousands of happy customers and
            make Shopper your go-to shopping hub today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
