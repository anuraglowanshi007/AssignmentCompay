const Hero = () => {
      return (
        <section
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-100 bg-opacity-80 p-6 rounded-lg text-center">
              <h1 className="text-4xl font-bold text-gray-800">Customized Design</h1>
              <p className="text-lg text-gray-600 mt-2">
                Home / Design Ideas / Customized Designs
              </p>
            </div>
          </div>
        </section>
      );
    };