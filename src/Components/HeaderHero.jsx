import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const HeaderHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Navbar Container with responsive design */}
      <div className="navbar-container mx-4 sm:mx-6 lg:mx-9 mt-4 sm:mt-7 mb-4 sm:mb-7 shadow-lg rounded-full">
        <header className="bg-gray-100 py-3 sm:py-4 px-4 sm:px-5 flex items-center justify-between rounded-full relative">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-gray-800">DH</div>
            <span className="ml-2 text-xs sm:text-sm uppercase text-gray-600 hidden xs:inline">Dream Homes</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-gray-800 transition-colors">Floor Plan</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Interior</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Exterior</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Design Ideas</a>
            <a href="#" className="hover:text-gray-800 transition-colors">More</a>
          </nav>

          {/* Desktop Search and Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3 sm:space-x-4">
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 rounded-full hover:bg-gray-300 transition-colors text-sm sm:text-base">
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Search Button */}
            <button className="text-gray-600 hover:text-gray-800 transition-colors md:hidden">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Mobile Contact Button (tablet only) */}
            <button className="hidden md:lg:flex bg-gray-200 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-300 transition-colors text-sm">
              Contact us
            </button>
            
            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border lg:hidden z-50">
              <nav className="flex flex-col py-4">
                <a href="#" className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                  Floor Plan
                </a>
                <a href="#" className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                  Interior
                </a>
                <a href="#" className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                  Exterior
                </a>
                <a href="#" className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                  Design Ideas
                </a>
                <a href="#" className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                  More
                </a>
                <div className="border-t mt-2 pt-4 px-6 md:hidden">
                  <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors">
                    Contact us
                  </button>
                </div>
              </nav>
            </div>
          )}
        </header>
      </div>

      {/* Hero Container */}
      <div className="hero-container mt-4 sm:mt-6 mx-4 sm:mx-0">
        <section
          className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-lg sm:rounded-none overflow-hidden"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" 
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-end justify-center  ">
  <div className=" bg-[#f7e9e0] bg-opacity-90 p-6 rounded-lg text-center max-w-2xl  mx-4">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Customized Design</h1>
    <p className="text-md md:text-lg text-gray-600 mt-2">
      Home / Design Ideas / Customized Designs
    </p>
  </div>
</div>
        </section>
      </div>
    </div>
  );
};

export default HeaderHero;