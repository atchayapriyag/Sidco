import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleContactNow = () => {
    navigate("/contact"); // Redirect to the Contact Us page
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          {/* Left Column */}
          <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex gap-1 mt-5 mb-3 justify-center md:justify-start">
              <div className="w-12 h-12 bg-[#FFFF99] transform rotate-45"></div>
              <div className="w-12 h-12 bg-[#FFFF99] transform rotate-45"></div>
              <div className="w-12 h-12 bg-[#FFFF99] transform rotate-45"></div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              "Precision in Every Mold,
              <br />
              <span className="text-[#86F289]">Excellence</span> in Every
              <br />
              Machine"
            </h1>

            {/* CTA Button */}
            <button
              className="bg-[#FFFF99]  hover:bg-[#f0f080] px-12 py-5 text-lg md:text-xl font-medium rounded-md hover:opacity-90 transition-opacity"
              onClick={handleContactNow} // Call the navigation function
            >
              Contact Now
            </button>
          </div>

          {/* Right Column - Single Image */}
          <div className="relative flex justify-center items-center">
            <img
              src="https://ik.imagekit.io/aw0yzgyse/herofin.jpg?updatedAt=1734677622961"
              alt="Industrial machinery"
              className="w-full h-auto max-w-lg rounded-xl object-cover "
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:items-center sm:gap-4 md:flex-row justify-between items-center gap-8 mt-5">

          <div className="bg-[#86F289] px-8 sm:px-16 py-2 flex items-center justify-center">
            <span className="text-base sm:text-lg text-center whitespace-nowrap">
              ✉stindustriesmadurai@gmail.com
            </span>
          </div>

          <div className="bg-[#86F289] px-8 sm:px-16 py-2 flex items-center justify-center">
            <span className="text-base sm:text-lg text-center flex flex-col sm:flex-row">
              <span>📞6385511440 /</span>
              <span className="sm:ml-2">9362077151</span>
            </span>
          </div>
        </div>

        {/* Company Info */}
        <div className="w-full relative h-[259px] mt-8 mb-1">
          <div className="relative h-[259px]">
            <img
              src="https://ik.imagekit.io/aw0yzgyse/stfin.jpg?updatedAt=1734933249435"
              alt="Industrial machinery background"
              className="sm:h-[195px] absolute top-0 left-0 w-full h-[195px] object-cover"
            />
            <div className="absolute top-59 left-0 w-full h-full sm:top-[51px] sm:left-1/2 sm:-translate-x-1/2 sm:w-[804px] sm:h-auto">
              <div className="flex flex-col items-center gap-4 sm:gap-[17px] p-6 sm:px-[180px] sm:py-10 bg-white rounded-[20px] sm:rounded-[40px]">
                <h1 className="font-inter font-bold text-2xl sm:text-[32px] text-black text-center leading-normal sm:mt-[-1px]">
                  S.T.Industries
                </h1>

                <p className="relative w-fit sm:ml-[-132.50px] sm:mr-[-132.50px] font-medium text-black text-lg sm:text-2xl text-center tracking-[0] leading-normal">
                  Manufacture of all Plastic Nylon, PTFE and Brass Components
                  <br className="hidden sm:block" />
                  We are certified as an ISO 9001-2015.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

