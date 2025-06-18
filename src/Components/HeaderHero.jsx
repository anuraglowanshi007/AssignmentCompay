const HeaderHero = () => {
  return (
    <div>
      {/* Navbar Container with gap, rounded effect, and shadow */}
      <div className="navbar-container mx-9 mt-7 mb-7 shadow-lg rounded-full">
        <header className="bg-gray-100 py-4 px-5 flex items-center justify-between rounded-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">DH</div>
            <span className="ml-2 text-sm uppercase text-gray-600">Dream Homes</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-gray-800">Floor Plan</a>
            <a href="#" className="hover:text-gray-800">Interior</a>
            <a href="#" className="hover:text-gray-800">Exterior</a>
            <a href="#" className="hover:text-gray-800">Design Ideas</a>
            <a href="#" className="hover:text-gray-800">More</a>
          </nav>

          {/* Search and Contact Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300">
              Contact us
            </button>
          </div>
        </header>
      </div>

      {/* Hero Container */}
      <div className="hero-container mt-6">
        <section
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}
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