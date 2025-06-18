
const Footer = () => {
  return (
    <div className="relative bg-[#f7e9e0]">
      <section className="relative z-10 mb-[-80px] sm:mb-[-100px] md:mb-[-120px]">
        <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="bg-white shadow-xl sm:shadow-2xl rounded-lg md:rounded-xl h-40 sm:h-44 md:h-48 flex flex-col sm:flex-row">
            {/* Left Text Section */}
            <div className="w-full sm:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-gray-100">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Need more Help?</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                We are here to help you design your dream home
              </p>
            </div>
            
            {/* Right Button Section */}
            <div className="w-full sm:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg 
                               transition-all transform hover:scale-105 text-sm sm:text-base md:text-lg font-medium w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white w-full overflow-x-hidden pt-16 sm:pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left pt-8 sm:pt-12 md:pt-16">
            {/* Logo and Description */}
            <div className="space-y-3 sm:space-y-4 max-w-xs">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-gray-900 flex items-center justify-center rounded font-bold text-lg sm:text-xl">
                D
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Company</h3>
              <ul className="space-y-1 sm:space-y-2">
                {['About', 'Blog', 'Careers', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Services</h3>
              <ul className="space-y-1 sm:space-y-2">
                {['Interior Design', 'Exterior Design', 'Customized Design', '3D Floor Elevations'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Customer Care</h3>
              <ul className="space-y-1 sm:space-y-2">
                {['Help', 'Privacy', 'FAQ', 'Terms & Conditions'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-5 md:pt-6">
            <p className="text-gray-500 text-xs sm:text-sm">
              Copyright © {new Date().getFullYear()} Dream Homes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;