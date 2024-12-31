import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full max-w-[1442px] mx-auto mt-2 mb-8 px-2 lg:px-0">
      <div className="relative w-full min-h-[300px] lg:w-[1440px] lg:h-[641px] lg:left-0.5">
        <div className="w-full h-[300px] lg:w-full lg:h-[502px] lg:absolute lg:top-[65px] lg:left-0 relative">
          <img
            src="https://ik.imagekit.io/aw0yzgyse/aboutfin.jpg?updatedAt=1734677639698"
            alt="Two colleagues"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-[618px] lg:h-[641px] p-3 lg:px-[37px] lg:py-[0px] bg-white rounded-[10px] shadow-[0px_1px_8px_#00000040] flex flex-col items-center lg:absolute lg:top-0 lg:left-[122px]">
          <h1 className="text-2xl mt-8 mb-5 lg:text-2xl font-bold text-black text-center tracking-[0] leading-normal underline  lg:mb-[15px] lg:font-['Inter-Bold',Helvetica]">
            About us
          </h1>

          <div className="flex flex-col items-center gap-2 lg:gap-[15px] lg:ml-[-4.50px] lg:mr-[-4.50px]">
            <p className="text-base lg:text-xl font-medium text-black text-justify tracking-[0] leading-normal lg:w-[544px] lg:h-[453px] lg:mt-[-1.00px] lg:font-['Inter-Medium',Helvetica]">
              <br />
              • S.T.Industries was established in the year of 1995
              <br />
              <br />
              • we have six Automatic Injection Mold Machine, Two Grinding
              Machine and also we have RECYCLING plant running successful
              manner.
              <br />
              <br />
              • At S.T.Industires our purpose is to manufacture plastic
              components injection mold and recycled raw material as far
              customer recruitment.
              <br />
              <br />
              • We are providing very best customer service and follow quality
              culture Aim to inspire the customer expectations.
              <br />
              <br />
              • We have submitted employee supplier we have group of employees
              suppliers and vendors.
              <br />
            </p>
            <br />

            <Link to="/about">
              <button className="w-full   lg:w-auto px-2 py-2.5 bg-[#fdfd96] rounded-lg overflow-hidden hover:bg-[#fcfc83] transition-colors duration-300 lg:px-[213px]">
                <span className="font-semibold text-black text-lg lg:text-xl tracking-[0] leading-normal whitespace-nowrap lg:font-['Inter-SemiBold',Helvetica]">
                  Know more
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
