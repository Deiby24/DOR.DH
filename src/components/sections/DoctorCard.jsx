import React from 'react';
import DocFoto from '../../assets/FOTOSITIO.svg';
import LogoUdea from '../../assets/LOGOUDEA.png';
import LogoFucs from '../../assets/LOGOFUCS.svg';

export const DoctorCard = () => {
  return (
    <div className="py-6 md:py-12 px-4 md:px-0">
      <div className="max-w-[34rem] md:max-w-3xl lg:max-w-5xl sm:max-w-[42rem] mx-auto bg-[#EAF3EC] border rounded-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* IZQUIERDA - Texto y estilos originales */}
        <div className="md:w-1/2 p-4 md:p-6 flex flex-col items-center text-center">
          <div>
            <p className="text-xl md:text-2xl text-[#1F3D3D] mb-2"
                style={{
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontStyle: 'italic'
              }}
            >
              Dr. Diego Hernández Z. M.D U.de.A.
            </p>
          </div>
          <img
            className="w-[100%] h-84 sm:h-115  md:h-84 object-cover rounded-xl object-top"
            
            src={DocFoto}
            alt="Dr. Diego Hernández"
          />
          <div className='text-lg md:text-xl pt-3 w-[100%] text-center lg:text-end'>
            <p className="italic text-[#5DA9A6]"
                      style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
              fontStyle: 'italic'
            }}>
              Doctor and Surgeon – University of Antioquia
            </p>
          </div>
          
            <div className="flex flex-col md:flex-row w-full">
      {/* COLUMNA IZQUIERDA - Logos */}
      <div className="md:w-1/3 p-3 md:p-6 flex flex-row md:flex-col items-center justify-center space-x-4 md:space-x-0 md:space-y-6">
        <img
          src={LogoUdea}
          alt="Universidad de Antioquia"
          className="h-25 md:h-22 w-auto object-contain"
        />
        <img
          src={LogoFucs}
          alt="FUCS"
          className="h-20 md:h-22 w-auto object-contain"
        />
      </div>

  
      <div className="md:w-2/3 p-0 text-center md:text-end">
                    
        <div className="text-sm text-gray-700 space-y-2">

          <p className="italic text-[#5DA9A6] text-2xl md:text-3xl"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontStyle: 'italic'
          }}
          >
            23 years of experience.
          </p>
          <p className="text-sm md:text-base"
             style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontStyle: 'italic'
          }}
          >
            CEO of Integral Wellness Center (a center for aesthetic and integrative medicine)
            for 15 years with extensive experience in hyperbaric medicine, aesthetic and
            anti-aging medicine, ozone therapy, orthomolecular medicine, hormone supplementation,
            stem cells and exosomes, colon therapy, and detoxification.
          </p>
        </div>
      </div>
      </div>
      </div>

        

        {/* DERECHA - Estilos como la imagen pero con TODO el texto original */}
        <div className="md:w-1/2 p-4 md:p-6 border-t md:border-t-0 md:border-l border-gray-200 ">
          <h4 className="text-xl md:text-2xl text-[#5DA9A6] mb-4 text-center sm:text-center md:text-left" 
              style={{
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontStyle: 'italic'
              }} 
          >
            Studies at:
          </h4>
          <ul className="text-gray-700 space-y-2 md:space-y-3 text-sm md:text-[15px]" 
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            <li className="flex items-baseline gap-2">
              <span className="text-green-800 text-xl md:text-2xl pt-[2px] leading-[1.2] flex-shrink-0">•</span>
              <span className='text-base md:text-xl text-800'>Integrated Center for Biological Medicine (CIMEBI)</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-green-800 text-xl md:text-2xl pt-[2px] leading-[1.2] flex-shrink-0">•</span>
              <span className='text-base md:text-xl text-800'>Colombian Scientific Association of Aesthetic (ACICME)<br />(Aesthetic Medicine)</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-green-800 text-xl md:text-2xl pt-[2px] leading-[1.2] flex-shrink-0">•</span>
              <span className='text-base md:text-xl text-800'>Regional Corporation of Higher Education (CRES)<br />(Ozone Therapy)</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-green-800 text-xl md:text-2xl pt-[2px] leading-[1.2] flex-shrink-0">•</span>
              <span className='text-base md:text-xl text-800'>University Foundation of Health Sciences (FUCS)<br />(Integrative and Functional Medicine)</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-green-800 text-xl md:text-2xl pt-[2px] leading-[1.2] flex-shrink-0">•</span>
              <span className='text-base md:text-xl text-800'>University Foundation of Health Sciences (FUCS)<br />(Seminar on regenerative medicine and use of biological medications)</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-green-800 text-xl md:text-2xl pt-[2px] leading-[1.2] flex-shrink-0">•</span>
              <span className='text-base md:text-xl text-800'>The Bosque University<br />(Homotoxicology)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};