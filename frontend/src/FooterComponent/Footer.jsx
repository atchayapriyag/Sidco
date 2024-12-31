

import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FFFF99] py-12 mt-3 mb-3">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Address Section */}
        <div className="space-y-2">
          <img
            src="https://ik.imagekit.io/aw0yzgyse/Frame%2045%20(1).jpg?updatedAt=1735407389626"
            alt="LOGO"
            className="w-16 h-16 object-contain"
          />

          <p className="font-medium">S.Thiagarajan</p>
          <p className="font-medium">S.T. Industries</p>
          <div className="space-y-1">
            <p>No- 34 , SIDCO Industrial Estate ,</p>
            <p>Kappalur,</p>
            <p>Madurai-625 008</p>
          </div>
        </div>

        {/* Navigation Section  */}
        <div>
          <h2 className="text-xl font-medium mb-4">Pages</h2>
          <nav className="space-y-2">
            <Link to="/" className="block hover:underline">
              Home
            </Link>

            <Link to="/product" className="block hover:underline">
              Product
            </Link>

            <Link to="/services" className="block hover:underline">
              Services
            </Link>

            <Link to="/gallery" className="block hover:underline">
              Gallery
            </Link>

            <Link to="/about us" className="block hover:underline">
              About us
            </Link>

            <Link to="/contact" className="block hover:underline">
              Contact
            </Link>
          </nav>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-medium mb-4">Contact</h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              6385511440
            </p>



            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              9362077151
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              stindustriesmadurai@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex items-center gap-4">
          <span className="font-medium">Follow us on:</span>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 text-blue-600">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:opacity-80 text-red-600">
              <FaYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="hover:opacity-80 text-blue-400">
              <FaXTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:opacity-80 text-pink-600">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
