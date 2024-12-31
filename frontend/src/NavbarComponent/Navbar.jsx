// finall
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#86F289] py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold">

          <img
            src={
              "https://ik.imagekit.io/aw0yzgyse/logo.jpg?updatedAt=1734682192150"
            }
            alt="Logo"
            className="w-12 "
          />
        </div>

        {/* Menu Icon Section */}
        <div className="md:hidden text-2xl">
          {isOpen ? (
            <FiX onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <FiMenu onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 font-medium text-lg transition-all duration-300 ${
            isOpen ? "flex flex-col space-y-4 mt-4" : "hidden"
          } md:mt-0`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-white  hover:underline transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-white hover:underline transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-white hover:underline transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:text-white hover:underline transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-white hover:underline transition-colors"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-white hover:underline transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

