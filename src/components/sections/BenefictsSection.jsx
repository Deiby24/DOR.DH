import React from "react";
import Fondo from "../../assets/CELULAS-03.svg";
import ICONOS1 from "../../assets/ICONOS-11.svg";
import ICONOS2 from "../../assets/ICONOS-12.svg";
import ICONOS3 from "../../assets/ICONOS-13.svg";
import ICONOS4 from "../../assets/ICONOS-14.svg";
import ICONOS5 from "../../assets/ICONOS-15.svg";
import ICONOS6 from "../../assets/ICONOS-16.svg";
import ICONOS7 from "../../assets/ICONOS-17.svg";
import ICONOS8 from "../../assets/ICONOS-18.svg";

export const BenefictsSection = () => {
  const items = [
    { label: "Sports injuries", icon: <img src={ICONOS1} alt="Sports injuries" className="w-full h-full object-contain" /> },
    { label: "Osteoarthritis", icon: <img src={ICONOS2} alt="Osteoarthritis" className="w-full h-full object-contain" /> },
    { label: "Chronic pain in the knees, hips, or back", icon: <img src={ICONOS3} alt="Back pain" className="w-full h-full object-contain" /> },
    { label: "Tendonitis or recurring muscle injuries", icon: <img src={ICONOS4} alt="Sports injuries" className="w-full h-full object-contain" /> },
    { label: "High-performance athletes and people with chronic fatigue or metabolic dysfunction", icon: <img src={ICONOS5} alt="Osteoarthritis" className="w-full h-full object-contain" /> },
    { label: "People interested in cellular rejuvenation and longevity", icon: <img src={ICONOS6} alt="Osteoarthritis" className="w-full h-full object-contain" /> },
    { label: "Degenerative diseases", icon: <img src={ICONOS7} alt="Osteoarthritis" className="w-full h-full object-contain" /> },
    { label: "Neurological diseases", icon: <img src={ICONOS8} alt="Osteoarthritis" className="w-full h-full object-contain" /> },
  ];

  const circleColors = ["#85CBC1", "#62B5AC", "#61A2A7", "#488586", "#38737A", "#32555F"];

  return (
    <section className="bg-white relative
                        py-8 px-10
                        sm:py-12 sm:px-6
                        md:py-16 md:px-8
                        lg:py-20
                        xl:py-24">
      
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Fondo})`,
        }}
      />
      
      <div className="max-w-7xl sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10
                      grid grid-cols-1 gap-6
                      lg:grid-cols-[1.5fr_0.9fr] lg:gap-10
                      xl:gap-12">
      
        {/* Columna Izquierda - Sticky Card */}
        <div className="lg:sticky 2xl:top-25 xl:top-30 lg:top-28 md:top-30 sm:top-20  lg:self-start">
          <div className="p-4 sm:p-6 md:p-8 rounded-xl shadow-md text-center relative" 
               style={{ backgroundColor: "rgba(224, 245, 218, 0.49)" }}>
            
            {/* Círculos superiores */}
            <div className="flex justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 flex-wrap">
              {circleColors.map((color, i) => (
                <div
                  key={i}
                  className="rounded-full
                             w-4 h-4
                             sm:w-5 sm:h-5
                             md:w-6 md:h-6
                             lg:w-7 lg:h-7"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            
            {/* Título principal */}
            <h2 className="text-[#34585C] italic 
                           text-xl
                           sm:text-xl
                           md:text-2xl
                           lg:text-4xl
                           xl:text-4xl
                           2xl:text-[3.3rem]"
                style={{
                  fontFamily: 'Georgia, Times, "Times New Roman", serif',
                  fontStyle: "italic",
                }}>
              Mesenchymal stem cells  
            </h2>
            <br className="hidden" />
             <h2 className="text-[#34585C] italic
                           text-xl
                           sm:text-xl
                           md:text-2xl
                           lg:text-4xl
                           xl:text-4xl
                           2xl:text-[3.3rem]"
                style={{
                  fontFamily: 'Georgia, Times, "Times New Roman", serif',
                  fontStyle: "italic",
                }}>
             (MSC) hold great
            </h2>
            <br className="hidden" />
             <h2 className="text-[#34585C] italic 
                           text-xl
                           sm:text-xl
                           md:text-2xl
                           lg:text-4xl
                           xl:text-4xl
                           2xl:text-[3.3rem]"
                style={{
                  fontFamily: 'Georgia, Times, "Times New Roman", serif',
                  fontStyle: "italic",
                }}>
             potential for regenerative medicine because of their ability for self-renewal and differentiation into tissue-specific cells.
            </h2>
            
            {/* Círculos inferiores */}
            <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-4 flex-wrap">
              {circleColors.map((color, i) => (
                <div
                  key={i}
                  className="rounded-full
                             w-4 h-4
                             sm:w-5 sm:h-5
                             md:w-6 md:h-6
                             lg:w-7 lg:h-7"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha - Lista de beneficios */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* Header */}
          <div className="bg-[#e0f5da7d] rounded-xl px-4 py-4 sm:px-6 sm:py-6 shadow-sm">
            <h3 className="font-medium italic text-gray-700 text-center
                           text-xl 
                           sm:text-2xl sm:text-center
                           md:text-3xl md:text-center
                           lg:text-2xl lg:text-right
                           xl:text-3xl xl:text-right
                           2xl:text-4xl 2xl:text-right"

                style={{
                  fontFamily: 'Georgia, Times, "Times New Roman", serif',
                  fontStyle: "italic",
                }}>
              Who is it indicated for?
            </h3>
          </div>

          {/* Lista de items */}
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-[#e0f5da7d]/80 rounded-xl shadow-sm hover:shadow-md transition-shadow
                         p-2 gap-2
                         sm:p-3 sm:gap-3
                         md:gap-4">
              
              {/* Icono */}
              <div className="text-teal-800 flex-shrink-0
                              w-12 h-12
                              sm:w-16 sm:h-16
                              md:w-20 md:h-20
                              lg:w-24 lg:h-24
                              xl:w-27 xl:h-27">
                {item.icon}
              </div>

              {/* Texto */}
              <div className="flex-1 text-right">
                <p className="text-teal-800 font-semibold italic
                              text-sm leading-tight
                              sm:text-base sm:leading-snug
                              md:text-lg
                              lg:text-xl
                              xl:text-2xl"
                   style={{
                     fontFamily: 'Georgia, Times, "Times New Roman", serif',
                     fontStyle: "italic",
                   }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};