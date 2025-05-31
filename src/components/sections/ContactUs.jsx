import React from "react";
import { MessageCircle, Facebook, Instagram } from "lucide-react";


export const ContactUs = () => {
  return (
    <section 
      className="w-full min-h-screen flex justify-center items-center relative"
    >
      {/* Overlay con patrón sutil */}
    
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-16 max-w-6xl w-full px-8">
        
        {/* Lado izquierdo: Título y descripción */}
        <div className="text-center lg:text-left max-w-md">
          <h2 
            className="text-5xl lg:text-6xl font-light italic mb-6  text-center"
            style={{ 
              color: '#325655',
              fontFamily: 'Georgia, serif'
            }}
          >
            We are here<br />
            for you
          </h2>
          <p 
            className="text-2xl  mb-6  text-center"
            style={{ 
              color: '#3B5959',
              fontFamily: 'Georgia, serif'
            }}
          >
            If you have questions about<br />
            our stem cell treatments or<br />
            would like to schedule an<br />
            appointment.
          </p>
          <p 
            className="text-2xl  text-center"
            style={{ 
              color: '#3B5959',
              fontFamily: 'Georgia, serif'
            }}
          >
            Contact us and we will be<br />
            happy to assist you.
          </p>
        </div>

        {/* Lado derecho: Formulario */}
        <div 
          className="rounded-3xl p-8 w-full max-w-md shadow-xl border-3"
          style={{ 
            backgroundColor: 'rgba(224, 242, 241, 0)',
            borderColor: '#6DA4A6',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex flex-col gap-5">
            <div>
              <label 
                htmlFor="name" 
                className="block text-base font-medium mb-2"
                style={{ color: '#37474f' }}
              >
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-lg p-3 border-3 focus:outline-none transition-all duration-200"
                style={{ 
                  borderColor: '#6DA4A6',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  fontSize: '16px',color:'black'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-base font-medium mb-2"
                style={{ color: '#37474f' }}
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg p-3 border-3 focus:outline-none transition-all duration-200"
                style={{ 
                  borderColor: '#6DA4A6',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  fontSize: '16px',
                  color:'black'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="number" 
                className="block text-base font-medium mb-2"
                style={{ color: '#37474f' }}
              >
                Number:
              </label>
              <input
                id="number"
                type="tel"
                className="w-full rounded-lg p-3 border-3 focus:outline-none transition-all duration-200"
                style={{ 
                  borderColor: '#6DA4A6',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  fontSize: '16px',
                  color:'black'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-base font-medium mb-2"
                style={{ color: '#37474f' }}
              >
                Message:
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg p-3 border-3 focus:outline-none transition-all duration-200 resize-none"
                style={{ 
                  borderColor: '#6DA4A8',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  fontSize: '16px',
                  color:'black'
                }}
              />
            </div>
            
            <button
              type="button"
              className="text-white py-3 px-6 rounded-lg font-semibold text-base transition-all duration-200 hover:opacity-90 mt-4"
              style={{ 
                backgroundColor: '#263238',
                letterSpacing: '1px'
              }}
            >
              SEND MESSAGE
            </button>
          </div>

          {/* Contacto y redes sociales */}
          <div className="text-center mt-8">
            <p 
              className="text-base mb-2"
              style={{ color: '#37474f' }}
            >
              <a 
                href="mailto:info@drdiegohernandez.com.co" 
                className="hover:underline transition-all duration-200"
                style={{ color: '#37474f' }}
              >
                info@drdiegohernandez.com.co
              </a>
            </p>
            <p 
              className="text-base mb-6"
              style={{ color: '#546e7a' }}
            >
              Medellín, Colombia
            </p>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=3117970832&text=How+may+we+help+you%3F&type=phone_number&app_absent=0" 
                aria-label="WhatsApp"
                className="p-3 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#263238', color: 'white' }}
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/18Qe6fXF3b/?mibextid=wwXIfr" 
                aria-label="Facebook"
                className="p-3 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#263238', color: 'white' }}
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/drdiegohernandez?igsh=NDk5dHpwZWRqazhw" 
                aria-label="Instagram"
                className="p-3 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: '#263238', color: 'white' }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;