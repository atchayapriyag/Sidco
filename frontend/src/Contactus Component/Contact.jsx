const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      {/* Hero Banner */}
      <div className="relative w-full h-48 mb-12  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/aw0yzgyse/contactfin.jpg?updatedAt=1734677696016')",
          }}
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Contact</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#FFFF99] p-6 rounded-xl flex flex-col items-center text-center">
            <div className="aspect-square w-full max-w-[240px] rounded-xl  mt-2 mb-2">
              <img
                src="https://ik.imagekit.io/aw0yzgyse/Frame%2045%20(1).jpg?updatedAt=1735407389626"
                alt="logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <h3 className="text-xl font-bold  mt-2 mb-1">S.Thiagarajan</h3>
            <p className="text-lg font-semibold text-gray-700">Managing Director</p>
          
          </div>

          {/* Contact Information */}
          <div className="md:col-span-2 space-y-8">
            {/* Address */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#fdfd96] to-[#979759]" />
              <div className="pl-6">
                <h2 className="text-2xl font-bold mb-4">Address</h2>
                <div className="space-y-1 text-lg">
                  <p className="font-bold">S.T.Industries</p>
                  <p>No-34, SIDCO Industries Estate</p>
                  <p>Kappalur</p>
                  <p>Madurai -625 008</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 ">
              <div className="bg-[#86F289] p-3  inline-block py-3">
                <p className="text-lg sm:hidden">📞 6385511440</p>
                <p className="text-lg sm:hidden"> 9362077151</p>
                <p className="text-lg hidden sm:block">
                  📞 6385511440 / 9362077151
                </p>
              </div>

              <div className="bg-[#86F289] p-3 py-3 lg:ml-4  inline-block">
                <span className="  text-base sm:text-lg text-center whitespace-nowrap">
                  ✉ stindustriesmadurai@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59781.61470996919!2d77.9454708486328!3d9.863293100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d12379562203%3A0xea2feaa580f099f9!2sSIDCO%20Industrial%20Estate%2C%20Kappalur%2C%20Thirumangalam%2C%20Madurai%20-625%20008!5e1!3m2!1sen!2sin!4v1735409290361!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
