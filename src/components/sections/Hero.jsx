import CELULAMADRE from '../../assets/CELULAMADRE.svg';

export const Hero = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center relative text-center px-4 
                        pt-32
                        sm:pt-40 
                        md:pt-48  
                        lg:pt-50 
                        xl:pt-55 ">
      
      {/* Main Headings */}
      <h1 className="font-extrabold text-[#1F3D3D]
                     text-[2.0rem] 
                     sm:text-5xl 
                     md:text-7xl 
                     lg:text-[6.0rem]
                     xl:text-[6.5rem]
                     2xl:text-9xl"          
          style={{   
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontWeight: 900, 
                fontStyle: 'normal',
                letterSpacing: '0.1em'
          }}>
        THE MEDICINE
      </h1>
      
      <h2 className="font-light text-[#5DA9A6] 
                     text-[2.4rem] 
                     sm:text-5xl 
                     md:text-[5.3rem]
                     lg:text-[7.0rem] 
                     xl:text-[7.5rem] 
                     2xl:text-[9.5rem]"
          style={{   
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontWeight: 500, 
                fontStyle: 'normal',
                letterSpacing: '0.2em'
          }}>
        of the future
      </h2>

      {/* Description */}
      <p className="italic text-[#5DA9A6] mt-4 max-w-[18rem] sm:max-w-[30rem] md:max-w-[33rem] lg:max-w-[45rem] xl:max-w-[45rem] 2xl:max-w-4xl
                    text-[0.6rem]
                    sm:text-base 
                    md:text-lg 
                    lg:text-2xl 
                    xl:text-2xl 
                    2xl:text-3xl
                    leading-relaxed"
         style={{   
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontWeight: 500, 
                fontStyle: 'italic'
         }}>
        Innovative treatments that promote natural tissue regeneration and relieve
        pain effectively and safely.
      </p>

      {/* Color Circles */}
      <div className="flex items-center justify-center  ">
      <div className="flex gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 py-6 sm:py-8 md:py-10 lg:py-12">
        {['#8ED2C8','#6EBFB9', '#6DA8B1', '#518E91', '#387979', '#33585E'].map(
          (color, i) => (
            <span
              key={i}
              className="rounded-full
                         w-6 h-6 
                         sm:w-8 sm:h-8 
                         md:w-10 md:h-10 
                         lg:w-12 lg:h-12
                         animate-bounce"
              style={{ 
                backgroundColor: color,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          )
        )}
      </div>
       <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
      </div>

      {/* Background image */}
      <img
        src={CELULAMADRE}
        alt="background blur"
        className="absolute pointer-events-none opacity-20 z-10
                   w-[40%] -left-[15%] -bottom-[18%]
                   sm:w-[40%] sm:-left-[12%] sm:-bottom-[15%]
                   md:w-[42%] md:-left-[11%] md:-bottom-[22%]
                   lg:w-[37%] lg:-left-[10%] lg:-bottom-[20%]
                   xl:w-[40%] xl:-left-[10%] xl:-bottom-[27%]
                   2xl:w-[35%] 2xl:-left-[10%] 2xl:-bottom-[29%]"
      />
    </section>
  );
};