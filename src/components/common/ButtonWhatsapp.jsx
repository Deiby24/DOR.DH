import { FaWhatsapp } from 'react-icons/fa';

export const ButtonWhatsapp = () => {
  const phoneNumber = '1234567890';
  const message = 'How may we help you?';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 ">
        <div 
            className=' flex-col flex bg-[#3b7c78] hover:bg-[#326b67] shadow-lg rounded-l-lg items-center justify-center transition-all duration-300 h-80'
            onClick={handleClick}
        >  
            <button
                className=" text-white font-medium h-55 w-12 flex  items-center justify-center mt-3 "
                aria-label="Contact via WhatsApp"
            >
                {/* Texto rotado (de abajo hacia arriba) */}
                
                <span 
                    className="transform rotate-270 text-xl font-semibold whitespace-nowrap"
                    style={{
                        fontFamily: 'Georgia, serif',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                    }}
                >
                How may we help you?
                </span>
                
                
            </button>
            <FaWhatsapp color="white" size={32} className="transform rotate-270 text-xl font-semibold whitespace-nowrap mt-6 " />
        </div> 
    </div>
  );
};
