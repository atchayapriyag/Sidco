

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 mb-10">
      {/* Hero Banner */}

      <div className="relative w-full h-48 mb-3   overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/aw0yzgyse/servicebg.jpg?updatedAt=1734677814403')",
          }}
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Services</h1>
        </div>
      </div>

      <div className="w-full max-w-[1322px] mx-auto">
        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9 mb-9">
          {/* Left Image Section */}
          <div className="relative h-[205px]">
            <img
              className="w-full h-full object-cover"
              alt="Design & Engineering"
              src="https://ik.imagekit.io/aw0yzgyse/service%20design&%20eng.jpg?updatedAt=1735028652433"
            />
            <h2 className="absolute top-[30%] left-4 sm:left-7 font-bold text-white text-3xl sm:text-[44px] leading-normal underline">
              Design & Engineering
            </h2>
          </div>

          {/* Right Content Section */}

          <div className="relative bg-white shadow-[0px_1px_8px_#00000040] flex items-center justify-center px-4 py-4">
            <p className=" ml-3 nfont-semibold text-black text-lg sm:text-2xl leading-normal">
              ST Industries has diversified into Design and Development for
              Providing Product design, Mold design, NPD (New Products
              Developments)
            </p>
          </div>
        </div>
      </div>

      {/* 3D Services List */}

      <div className="w-full max-w-[1245px] mx-auto mt-6 mb-9">
        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {/* Left Gradient Bar and Text */}
          <div className="relative flex items-start">
            {/* Gradient Bar */}
            {/* <div className="w-[22px] h-48 bg-gradient-to-b from-[#fdfd96] to-[#979759]"></div> */}
            <div className="w-[25px] h-[190px] bg-gradient-to-b from-[#fdfd96] to-[#979759]"></div>
            {/* Text */}
            <p className="ml-4 font-semibold text-black text-lg sm:text-2xl leading-[30px] sm:leading-[39px]">
              * 3D molding of automotive components consumer goods and material
              handling systems
              <br />* Product Design
              <br />* Surface Modelling
            </p>
          </div>

          {/* Right Gradient Bar and Text */}
          <div className="relative flex items-start">
            {/* Gradient Bar */}
            <div className="w-[15px] h-[190px] bg-gradient-to-b from-[#fdfd96] to-[#979759]"></div>
            {/* Text */}
            <p className="ml-4 font-semibold text-black text-lg sm:text-2xl leading-[30px] sm:leading-[39px]">
              * Assembly Modelling
              <br />* Generation of 2D drawings to 3D models
              <br />* Reverse engineering
            </p>
          </div>
        </div>
      </div>

      {/* Software Used Section */}

      <div className="w-full max-w-[1245px] mx-auto mt-9 mb-9">
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center relative">
          {/* Left Section: Image and Title */}
          <div className="relative">
            <img
              className="w-full h-[205px] object-cover"
              alt="Software Used"
              src="https://ik.imagekit.io/aw0yzgyse/service%20software.jpg?updatedAt=1735028706244"
            />
            <h2 className="absolute top-[50%] left-4 transform -translate-y-1/2 font-bold text-white text-3xl sm:text-[44px] leading-normal underline">
              Software Used
            </h2>
          </div>

          {/* Right Section: Content and Icons */}

          <div className="relative bg-white shadow-[0px_1px_8px_#00000040] flex flex-col gap-4 p-6">
            {/* Text */}
            <p className="font-semibold text-black text-lg sm:text-2xl leading-[30px] sm:leading-[39px]">
              * Autocad
              <br />* Solid Works
            </p>

            {/* Icons Section */}
            <div className="flex justify-start gap-4 mt-2">
              <img
                className="w-[78px] h-[78px] object-cover"
                alt="Software Icon 1"
                src="https://ik.imagekit.io/aw0yzgyse/pngwing.com%20(8).png?updatedAt=1735028722295"
              />
              <img
                className="w-[78px] h-[78px] object-cover"
                alt="Software Icon 2"
                src="https://ik.imagekit.io/aw0yzgyse/pngwing.com%20(7).png?updatedAt=1735028736785"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Injection Molding Section */}

      <div className="w-full max-w-[1245px] mx-auto mt-9 mb-9">
        {/* Responsive Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center relative h-auto">
          {/* Left Section: Image */}
          <div className="relative w-full h-[205px]">
            <img
              className="w-full h-[205px] object-cover"
              alt="Injection Molding"
              src="https://ik.imagekit.io/aw0yzgyse/injection.jpg?updatedAt=1735029639949"
            />
            <h2 className="absolute top-[50%] left-6 transform -translate-y-1/2 font-bold text-white text-3xl sm:text-[44px] leading-normal underline">
              Injection Molding
            </h2>
          </div>
        </div>
      </div>

      {/* Recycling Materials Section */}

      <div className="w-full max-w-[1218px] mx-auto mt-2 mb-9">
        {/* Grid Layout for Text Section */}
        <div className="grid grid-cols-1 sm:grid-cols-[22px_1fr] gap-4 h-auto">
          {/* Left Gradient Line */}
          <div className="w-[16px] h-69 bg-gradient-to-b from-[#fdfd96] to-[#979759]" />

          {/* Text Content */}
          <div className="space-y-4">
            <p className="font-semibold text-black text-lg sm:text-2xl leading-normal">
              At S.T.Industries, we believe that only state of the art equipment
              can manufacture high quality products. 
            </p>
            <p className="font-semibold text-black text-lg sm:text-2xl leading-normal">
               we have Six Automatic Injection Molding Machines, Six
              Manual Injection Molding Machines, and also us we recycling the
              wastage runner with two Grinding Machines, and for sample purpose
              & we have one Manual Hand Injection Mold Machine.
            </p>
            <p className="font-semibold text-black text-lg sm:text-2xl leading-normal">
              Our wide range of Injection Molding Machines ranges from a
              capacity of 220 tonnages. These machines are
              purchased well-known companies like SSPT, Ferromatic Milacron,
              L.H.Technologies, PASL, and Hindu Enterprisers.
            </p>
          </div>
        </div>
      </div>

      {/* Recycling Materials Section */}
      <div className="w-full max-w-[1218px] mx-auto mt-9 mb-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Left: Image */}
          <div className="relative w-full h-[205px]">
            <img
              className="w-full h-[205px] object-cover"
              alt="Recycling Materials"
              src="https://ik.imagekit.io/aw0yzgyse/service%20recycling.jpg?updatedAt=1735028689256"
            />
            <h2 className="absolute top-[50%] left-6 transform -translate-y-1/2 font-bold text-white text-3xl sm:text-[44px] leading-normal underline">
              Recycling Materials
            </h2>
          </div>

          {/* Right: Text Box */}
          <div className="relative w-full h-32z bg-white shadow-[0px_1px_8px_#00000040] flex items-center px-6 py-6">
            {/* <div className="w-[36px] h-[160px] bg-gradient-to-b from-[#fdfd96] to-[#979759] "></div> */}
            <p className=" ml-2 font-semibold text-black text-lg sm:text-2xl leading-normal">
              We have two Extruder machines for the production of recycling raw
              materials using any waste plastic.
            </p>
          </div>
        </div>

        {/* Raw Material Section */}

        <div className="w-full max-w-[1218px] mx-auto mt-9 mb-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center relative">
            {/* Left: Image Section */}
            <div className="relative w-full h-[205px]">
              <img
                className="w-full h-[205px] object-cover"
                alt="Raw Material"
                src="https://ik.imagekit.io/aw0yzgyse/service%20raw%20material.jpg?updatedAt=1735028671957"
              />
              <h2 className="absolute top-[50%] left-6 transform -translate-y-1/2 font-bold text-white text-3xl sm:text-[44px] leading-normal underline">
                Raw Material Available
              </h2>
            </div>

            {/* Right: Text Section */}
            <div className="relative bg-white shadow-[0px_1px_8px_#00000040] flex items-center px-6 py-5">
              {/* <div className="w-[17px] h-[120px] bg-gradient-to-b from-[#fdfd96] to-[#979759] "></div> */}

              <p className=" ml-2 font-semibold text-black text-lg sm:text-2xl leading-relaxed ">
                * HD - High Density Poly ethylene.
                <br />* PP – Poly propylene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
