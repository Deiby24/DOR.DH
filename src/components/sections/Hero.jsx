import CELULAMADRE from '../../assets/celulamadre.svg';

export const Hero = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center relative text-center px-4 
                        pt-32 pb-24 
                        sm:pt-40 sm:pb-32 
                        md:pt-48 md:pb-36 
                        lg:pt-64 lg:pb-40 
                        xl:pt-80 xl:pb-40">
      
      {/* Main Headings */}
      <h1 className="font-extrabold text-[#1F3D3D]
                     text-4xl 
                     sm:text-5xl 
                     md:text-6xl 
                     lg:text-7xl 
                     xl:text-8xl 
                     2xl:text-9xl"          
          style={{   
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontWeight: 900, 
                fontStyle: 'normal',
                letterSpacing: '0.1em'
          }}>
        THE MEDICINE
      </h1>
      
      <h2 className="font-light text-[#5DA9A6] mt-1 sm:mt-2
                     text-4xl 
                     sm:text-5xl 
                     md:text-6xl 
                     lg:text-7xl 
                     xl:text-8xl 
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
      <p className="italic text-[#5DA9A6] mt-4 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
                    text-sm 
                    sm:text-base 
                    md:text-lg 
                    lg:text-xl 
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
      <div className="flex gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 py-6 sm:py-8 md:py-10 lg:py-12">
        {['#8CD8D4', '#5DA9A6', '#417F7C', '#2E6D6A', '#1F3D3D'].map(
          (color, i) => (
            <span
              key={i}
              className="rounded-full
                         w-6 h-6 
                         sm:w-8 sm:h-8 
                         md:w-10 md:h-10 
                         lg:w-12 lg:h-12"
              style={{ backgroundColor: color }}
            />
          )
        )}
      </div>

      {/* Background image */}
      <img
        src={CELULAMADRE}
        alt="background blur"
        className="absolute pointer-events-none opacity-50 z-10
                   w-[50%] -left-[15%] -bottom-[15%]
                   sm:w-[45%] sm:-left-[12%] sm:-bottom-[18%]
                   md:w-[42%] md:-left-[11%] md:-bottom-[19%]
                   lg:w-[40%] lg:-left-[10%] lg:-bottom-[20%]
                   xl:w-[39%] xl:-left-[10%] xl:-bottom-[20%]"
      />
    </section>
  );
};