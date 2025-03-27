import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <nav className="px-6 py-4 sticky top-0 bg-black/50  backdrop-blur-lg border border-gray-700 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-xl font-bold text-white cursor-pointer"
          onClick={navigateHome}
        >
          StudySync
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-blue-400">
            Home
          </Link>
          <Link to="/features" className="text-gray-300 hover:text-blue-400">
            Features
          </Link>
          <Link to="/contact">
            <button className="bg-white-500 px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white rounded-lg text-lg font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-full w-full bg-black/80 transform transition-transform ease-in-out z-40 rounded-br-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start space-y-4 p-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-gray-300 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-white-500 px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white rounded-lg text-lg font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

