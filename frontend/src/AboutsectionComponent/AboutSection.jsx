const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      {/* Hero Banner */}
      <div className="relative w-full h-48 mb-12  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/aw0yzgyse/aboutbg.jpg?updatedAt=1734677676654')",
          }}
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About us</h1>
        </div>
      </div>

      {/* Company Description */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#fdfd96] to-[#979759]" />
          <div className="text-center space-y-6 pl-6">
            <h2 className="text-2xl font-bold text-gray-900">
              S.T.INDUSTRIES (AN ISO 9001:2015 COMPANY) MANUFACTURING PLASTIC
              INJECTION MOULDED COMPONENTS
            </h2>
            <p className="text-xl font-semibold text-gray-800">
              FOR THE PLASTIC COMPONENTS REQUIREMENTS OF VARIOUS INDUSTRIES
              LIKE
            </p>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tyre Industries Card */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/aw0yzgyse/about%20automobile.jpg?updatedAt=1735028569817)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-4xl font-bold">
                <span className="border-b-4 border-white pb-1">
                  Tyre
                  <br />
                  Industries
                </span>
              </h3>
            </div>
          </div>

          {/* Automobile Industries Card */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/aw0yzgyse/about%20automobile.jpg?updatedAt=1735028569817)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-4xl font-bold">
                <span className="border-b-4 border-white pb-1">
                  Automobile
                  <br />
                  Industries
                </span>
              </h3>
            </div>
          </div>

          {/* Textile Industries Card */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/aw0yzgyse/about%20textile.jpg?updatedAt=1735028589713)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-4xl font-bold">
                <span className="border-b-4 border-white pb-1">
                  Textile
                  <br />
                  Industries
                </span>
              </h3>
            </div>
          </div>

          {/* Agricultural Industries Card */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/aw0yzgyse/about%20agricultural.jpg?updatedAt=1735028547455)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-4xl font-bold">
                <span className="border-b-4 border-white pb-1">
                  Agricultural
                  <br />
                  Industries
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Additional Agricultural Industries Card */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/aw0yzgyse/about%20packing%20and%20packaging%20industries.jpg?updatedAt=1735028632262)",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white  ml-4 text-4xl font-bold">
                <span className=" border-b-4 border-white pb-1">
                  packing and packaging
                  <br />
                  Industries
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="relative mt-16 mb-12">
          <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#fdfd96] to-[#979759]" />
          <p className="text-xl font-bold text-center text-gray-900 pb-6">
            AND ALL TYPE OF PLASTIC, PACKING AND MOULDED COMPONENTS, CONTAINERS,
            CAPS AND CLOSURES.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

