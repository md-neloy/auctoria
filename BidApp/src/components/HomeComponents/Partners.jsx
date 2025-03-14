

const Partners = () => {
    const brands = [
        "https://i.ibb.co.com/B5g6Rgw9/brand1.png",
        "https://i.ibb.co.com/hFDwmkYN/brand2.png",
        "https://i.ibb.co.com/jkMwDRMK/brand3.jpg",
        "https://i.ibb.co.com/B5g6Rgw9/brand1.png",
        "https://i.ibb.co.com/hFDwmkYN/brand2.png",
        "https://i.ibb.co.com/jkMwDRMK/brand3.jpg",
      ];
    return (
        <div>
            <h2 className='font-bold text-center text-black text-5xl pt-10 pb-5'> Our Trusted Partners</h2>
            <div className="py-10 px-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {brands.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-28 md:w-32 lg:w-40 rounded-2xl shadow-md hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Partners;