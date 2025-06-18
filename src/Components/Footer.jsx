import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Brand Column */}
          <div className="space-y-4 max-w-xs">
            <div className="w-10 h-10 bg-white text-gray-900 flex items-center justify-center rounded font-bold text-xl">
              D
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {['Interior Design', 'Exterior Design', 'Customized Design', '3D Floor Elevations'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Customer Care</h3>
            <ul className="space-y-2">
              {['Help', 'Privacy', 'FAQ', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Dream Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;