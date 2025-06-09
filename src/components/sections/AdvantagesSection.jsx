import React from 'react';
import CELULA from '../../assets/CELULA-06.svg';

export const AdvantagesSection = () => {
  return (
    <section className="relative  pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-10 sm:px-10 lg:px-8 overflow-hidden ">
      {/* Background decorative elements - responsive positioning */}
<div className="absolute right-0 top-0 w-full h-full pointer-events-none">
  <img
    src={CELULA}
    className="absolute -right-10 sm:-right-56 md:-right-48 lg:-right-40 -top-30 sm:-top-34 md:-top-42 lg:-top-70 w-[48rem] sm:w-[52rem] md:w-[56rem] lg:w-[60rem] xl:w-[64rem] h-[53rem] sm:h-[57rem] md:h-[61rem] lg:h-[66rem] xl:h-[69rem] opacity-20"
    alt="Celula decorative element"
  />
</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title - Increased text sizing */}
        <h2 className="text-[#33585E] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif  text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 italic font-light px-4" 
                              style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontStyle: 'italic'
            }}
        >
          Our Advantages
        </h2>

        {/* Three cards - Responsive grid and spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8 max-w-10xl mx-auto">
          {/* Facilities Card */}
          <div className="bg-[#F5FCF6]/60 rounded-lg px-6 sm:px-6 md:px-6 lg:px-4 py-3 sm:py-3 md:py-3 lg:py-3 text-center md:col-span-2 lg:col-span-1">
            <h3 className="text-[#33585E] text-3xl sm:text-5xl md:text-3xl lg:text-5xl font-serif  mb-4 sm:mb-5 md:mb-6 italic font-light"
                                          style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontStyle: 'italic'
            }}
            >
              Facilities
            </h3>
            <div className="text-[#33585E]  italic text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl"
                                              style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontStyle: 'italic'
            }}
            >
              <p>We are located in the most </p>
              <p>exclusive area of Medellín.</p>
              <p className="pt-2">Modern and relaxing reception.</p>
              <p className="pt-2">Individual treatment rooms for privacy.</p>
              <p className="pt-2">Partnerships with certified external</p>
              <p>laboratories for PRP</p>
              <p>and stem cell preparation.</p>
            </div>
          </div>

          {/* Medical Team Card */}
          <div className="bg-[#F5FCF6]/60 rounded-lg  px-7 sm:px-8 md:px-8 lg:px-8 py-3 sm:py-3 md:py-3 lg:py-3 text-center">
            <h3 className="text-[#33585E] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif  mb-4 sm:mb-5 md:mb-6 italic font-light"
                                              style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontStyle: 'italic'
            }}
            >
              Medical Team
            </h3>
            <div className="text-[#33585E]  italic text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl"
                                              style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontStyle: 'italic'
            }}
            >
              <p>Physicians with experience in</p>
              <p>regenerative medicine</p>
              <p>and aesthetic medicine.</p>
              <p className="pt-2">Nursing staff trained in intravenous therapy, PRP management, and assistance with regenerative medicine procedures.</p>

            </div>
          </div>

          {/* Access to Advanced Therapies Card */}
          <div className="bg-[#F5FCF6]/60 rounded-lg  px-7 sm:px-8 md:px- lg:px-8 py-3 sm:py-3 md:py-3 lg:py-3 text-center">
            <h3 className="text-[#33585E] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif  mb-4 sm:mb-5 md:mb-6 italic font-light"
                                              style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontStyle: 'italic'
            }}
            >
              Access to<br />Advanced<br />Therapies
            </h3>
            <div className="text-[#33585E]  italic text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl"
                                              style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontStyle: 'italic'
            }}
            >
              <p>Experience innovative medical</p>
              <p>treatments at a substantially</p>
              <p>reduced cost compared to rates in</p>
              <p>the United States and other</p>
              <p>developed nations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};