import { FaWhatsapp } from 'react-icons/fa';

export const ButtonWhatsapp = () => {
  const phoneNumber = '3117970832'; // Número de WhatsApp sin el prefijo internacional
  const message = 'How may we help you?';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div 
        className='flex-col flex bg-[#3b7c78] hover:bg-[#326b67] shadow-lg rounded-l-lg items-center justify-center transition-all duration-300 cursor-pointer
                   h-80 w-8
                   lg:h-80 lg:w-12
                   xl:h-80 lg:w-12
                   md:h-72 md:w-11
                   sm:h-48 sm:w-8
                   xs:h-40 xs:w-7'
        onClick={handleClick}
      >  
        <button
          className="text-white font-medium h-55 w-12 flex items-center justify-center mt-3"
          aria-label="Contact via WhatsApp"
        >
          <span 
            className="transform rotate-270 font-semibold whitespace-nowrap
                       text-xl
                       lg:text-xl
                       md:text-lg
                       sm:text-sm
                       xs:text-xs"
            style={{
              fontFamily: 'Georgia, serif',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            How may we help you?
          </span>
        </button>
        <FaWhatsapp 
          color="white" 
          className="transform rotate-270 mt-6
                     w-8 h-8
                     lg:w-8 lg:h-8
                     md:w-7 md:h-7
                     sm:w-5 sm:h-5
                     xs:w-4 xs:h-4" 
        />
      </div> 
    </div>
  );
};