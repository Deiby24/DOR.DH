import React, { useState } from "react";
import {  Facebook, Instagram, Send, Check, AlertCircle } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success', 'error', ''

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (data) => {
    // Simulamos el envío de email - En producción usarías EmailJS o tu propio backend
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simular éxito o error aleatoriamente para demostración
        if (Math.random() > 0.2) {
          resolve({ success: true });
        } else {
          reject(new Error('Error al enviar email'));
        }
      }, 2000);
    });
  };

  const handleSubmit = async () => {
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setIsLoading(true);
    setStatus('');

    try {
      // Aquí puedes integrar con EmailJS, Formspree, o tu propio backend
      await sendEmail(formData);
      
      setStatus('success');
      setFormData({ name: '', email: '', number: '', message: '' });
      
      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setStatus(''), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      className="w-full min-h-screen flex justify-center items-center relative"

      style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontStyle: 'italic'
          }}
    >
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-16 max-w-8xl w-full px-8">
        
        <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-16 lg:w-[65rem] w-full px-2 py-8 rounded-2xl shadow-lg bg-[#e0f5da7d]/50">
        {/* Lado izquierdo: Título y descripción */}
        <div className="text-center lg:text-left max-w-md">
          <h2 
            className="text-5xl lg:text-6xl font-light italic mb-6 text-center"
            style={{ 
              color: '#325655',
              fontFamily: 'Georgia, serif'
            }}
          >
            We are here<br />
            for you
          </h2>
          <p 
            className="text-[1.3rem] md:text-2xl  mb-6 text-center"
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
            className="text-[1.3rem] md:text-2xl text-center"
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
          className="rounded-3xl p-8 w-full max-w-xl shadow-xl border-3"
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
                Name: *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg p-3 border-3 focus:outline-none transition-all duration-200"
                style={{ 
                  borderColor: '#6DA4A6',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  fontSize: '16px',
                  color: 'black'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-base font-medium mb-2"
                style={{ color: '#37474f' }}
              >
                Email: *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg p-3 border-3 focus:outline-none transition-all duration-200"
                style={{ 
                  borderColor: '#6DA4A6',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  fontSize: '16px',
                  color: 'black'
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
                name="number"
                type="tel"
                value={formData.number}
                onChange={handleInputChange}
                className="w-full rounded-lg p-3 border-3 focus:outline-none transition-all duration-200"
                style={{ 
                  borderColor: '#6DA4A6',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  fontSize: '16px',
                  color: 'black'
                }}
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-base font-medium mb-2"
                style={{ color: '#37474f' }}
              >
                Message: *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg p-3 border-3 focus:outline-none transition-all duration-200 resize-none"
                style={{ 
                  borderColor: '#6DA4A8',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  fontSize: '16px',
                  color: 'black'
                }}
              />
            </div>
            
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="text-white py-3 px-6 rounded-lg font-semibold text-base transition-all duration-200 hover:opacity-90 mt-4 flex items-center justify-center gap-2 disabled:opacity-50"
              style={{ 
                backgroundColor: '#263238',
                letterSpacing: '1px'
              }}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  SENDING...
                </>
              ) : (
                <>
                  <Send size={16} />
                  SEND MESSAGE
                </>
              )}
            </button>

            {/* Mensajes de estado */}
            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: '#d4edda', color: '#155724' }}>
                <Check size={16} />
                <span className="text-sm">Message sent successfully!</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
                <AlertCircle size={16} />
                <span className="text-sm">Please fill all required fields and try again.</span>
              </div>
            )}
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
                <FaWhatsapp size={20} />
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
      </div>
    </section>
  );
};

