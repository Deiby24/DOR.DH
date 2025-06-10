import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import LOGOSITIO from "../../assets/LOGOSITIO.svg"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para detectar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'medical-applications', 'about-us', 'testimonies', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset para navbar fijo

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para navegar a las secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Actualizar sección activa inmediatamente
    setActiveSection(sectionId);
    // Cerrar menú móvil después de hacer clic
    setIsMenuOpen(false);
  };

  // Mapeo de nombres de menú a IDs de sección
  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Medical applications', id: 'medical-applications' },
    { name: 'About us', id: 'about-us' },
    { name: 'Testimonies', id: 'testimonies' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Request an appointment', id: 'contact' }
  ];

  return (
    <>
      {/* Desktop Navbar - Versión ligeramente más compacta */}
      <nav className="hidden lg:flex w-full items-center py-2.5 z-50 fixed top-0 left-0 justify-around">
        {/* Logo */}
        <div className="flex items-center gap-3 pl-12 md:pl-0 lg:pl 12 xl:pl-12">
          <img src={LOGOSITIO} alt="Logo" className="h-38 relative" />
        </div>

        {/* Menu Items - Ligeramente más compacto */}
        <div 
          className="flex gap-1.5 flex-wrap justify-center bg-white/85 shadow-lg xl:px-2 xl:py-5 lg:px-2 lg:py-5 rounded-xl"
          style={{   
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontWeight: 500, 
            fontStyle: 'normal',
            letterSpacing: '0.08em'
          }}
        >
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className={`ml-3 lg:px-5 lg:py-[.08] rounded-sm text-white 2xl:text-base xl:text-sm lg:text-[0.5rem] cursor-pointer ${
                activeSection === item.id
                  ? 'bg-[#1F3D3D] font-bold'
                  : 'bg-[#5AA8A2] hover:bg-[#417F7C]'
              } transition duration-300`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar - Estilo simple como en la imagen */}
      <nav className="lg:hidden w-full flex items-center justify-between px-4 py-6 z-50 fixed top-0 left-0 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LOGOSITIO} alt="Logo" className="h-30 w-30 absolute" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col lg:hidden">
          {/* Header con logo y botón cerrar */}
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <img src={LOGOSITIO} alt="Logo" className="h-8" />
            <button onClick={toggleMenu} className="p-2">
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          {/* Menú móvil */}
          <div
            className="flex flex-col items-center justify-start px-6 pt-6 gap-4 text-[#1F3D3D] text-lg font-medium"
            style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontWeight: 500,
              fontStyle: 'normal',
              letterSpacing: '0.05em',
            }}
          >
            {menuItems.slice(0, 6).map((item, i) => (
              <button 
                key={i} 
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer transition duration-300 ${
                  activeSection === item.id
                    ? 'text-[#1F3D3D] font-bold'
                    : 'hover:text-[#5AA8A2]'
                }`}
              >
                {item.name}
              </button>
            ))}

            <button 
              onClick={() => scrollToSection('contact')}
              className={`mt-6 w-full py-3 rounded-lg font-semibold text-sm cursor-pointer transition duration-300 ${
                activeSection === 'contact'
                  ? 'bg-[#1F3D3D] text-white'
                  : 'bg-[#5AA8A2] hover:bg-[#1F3D3D] text-white'
              }`}
            >
              Request an appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;