const HowWeWork = () => {
  return (
    <div>
      {/* How We Work Section with skin-like background */}
      <section className="py-16 bg-[#f7e9e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              It is a long established fact will be distracted Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 01 - Updated to match UI */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Person on phone"
                  className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0"
                />
                {/* Icon Overlay */}
                <div className="absolute top-0 right-1/2 lg:right-0 transform translate-x-1/2 lg:transform-none bg-white p-2 rounded-full shadow-md">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V6a2 2 0 00-2-2H7a2 2 0 00-2 2v2m4 8h6"></path>
                  </svg>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start items-center mb-4 gap-8">
                  <span className="text-6xl font-bold text-gray-300">01</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in touch with us</h3>
                <p className="text-gray-600">
                  Reach us through call, mail, whatsapp, or fill our query form along with your plot details and basic
                  requirements. One of our consultants will brief you our services and procedure.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="People working together"
                  className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-amber-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  <span className="text-6xl font-bold text-gray-300">02</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting to know your requirements</h3>
                <p className="text-gray-600">
                  Once we get your details and you have offered services a project manager will be assigned to you. We
                  will be having few rounds of chats with you to understand your requirements in detail.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Concept designing"
                  className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-amber-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  <span className="text-6xl font-bold text-gray-300">03</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Concept Designing</h3>
                <p className="text-gray-600">
                  The designer will come up with proposed concept design considering your requirements, plot and Vastu.
                  for now we will be providing you Vastu to spend some time away from our busy schedules for discussion.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Correction and modification"
                  className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-amber-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  <span className="text-6xl font-bold text-gray-300">04</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Correction & Modification</h3>
                <p className="text-gray-600">
                  After reviewing the concept design within your timeline. Now its time to discuss with your family
                  members for any corrections and modifications required. Considering the feedback given by you,
                  designer will come up with the revised design. This will be repeated as per your satisfaction.
                </p>
              </div>
            </div>

            {/* Step 05 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Design handover"
                  className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-amber-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span className="text-6xl font-bold text-gray-300">05</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Handover</h3>
                <p className="text-gray-600">
                  On the completion of your project we will mail all the drawings in PDF format or soft copies on
                  special request over the mail.
                </p>
              </div>
            </div>

            {/* Step 06 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Online support"
                  className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-amber-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-6xl font-bold text-gray-300">06</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Support</h3>
                <p className="text-gray-600">
                  Once we handover the final design, our relationship doesn't end there, we do provide online support
                  for any queries during execution drawings in PDF format or soft copies on special request over the
                  mail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need more Help?</h2>
            <p className="text-gray-600 mb-6">We are here to help you design your dream home</p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;