import { useState } from 'react'
import './App.css'
import HeaderHero from './Components/HeaderHero';
import HowWeWork from './Components/HowWeWork';
import Footer from './Components/Footer';


function App() {
  return (
        <div className=" bg-gray-50">
          {/* Navbar Container with gap and rounded effect */}
          <div className="">
            <HeaderHero/>
            <HowWeWork/>
            <Footer/>
          </div>

        </div>
      );
}

export default App
