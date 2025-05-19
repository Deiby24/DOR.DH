import React from "react";
import { Menu } from "lucide-react"; 
import LOGOSITIO from "../../assets/LOGOSITIO.svg"; 

const Navbar = () => {
  return (
    <nav className="w-full flex  items-center py-12  z-50 fixed top-0 left-0 justify-around">
      {/* Logo */}
      <div className="flex items-center gap-4 pl-25">
        <img src={LOGOSITIO} alt="Logo" className="h-35" />
      </div>

      {/* Menu Items */}
    <div 
        className="flex gap-3 flex-wrap justify-center bg-white/85 shadow-lg px-9 py-7 rounded-3xl "
            style={{   
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontWeight: 500, 
                fontStyle: 'normal',
                letterSpacing: '0.1em'
        }}
    >
        {[
          'Home',
          'Services',
          'Medical applications',
          'About us',
          'Testimonies',
          'FAQ',
          'Request an appointment'
        ].map((item, i) => (
          <button
            key={i}
            className={`px-4 py-1 rounded-md text-white text-base ${
              item === 'Home'
                ? 'bg-[#1F3D3D] font-bold'
                : 'bg-[#5DA9A6] hover:bg-[#417F7C]'
            } transition duration-300`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
