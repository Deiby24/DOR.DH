import CELULAMADRE from '../../assets/celulamadre.svg';

export const Hero = () => {
  return (
<section className="bg-white w-full flex flex-col items-center justify-center pt-80 relative text-center px-4 pb-40">
      {/* Main Headings */}
      <h1 className="text-9xl md:text-9xl font-extrabold text-[#1F3D3D]"          
      style={{   
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontWeight: 900, 
                fontStyle: 'normal',
                letterSpacing: '0.1em'
        }}
        >
        THE MEDICINE
      </h1>
      <h2 className="text-9xl md:text-[9.5rem] font-light text-[#5DA9A6] mt-2"
        style={{   
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontWeight: 500, 
                fontStyle: 'normal',
                letterSpacing: '0.2em'
        }}
      >
        of the future
      </h2>

      {/* Description */}
      <p className="italic text-[#5DA9A6] mt-6 max-w-3xl text-lg md:text-3xl"
        style={{   
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
                fontWeight: 500, 
                fontStyle: 'italic'
        }}
      >
        Innovative treatments that promote natural tissue regeneration and relieve
        pain effectively and safely.
      </p>

      {/* Color Circles */}
      <div className="flex gap-4 mt-6 py-12">
        {['#8CD8D4', '#5DA9A6', '#417F7C', '#2E6D6A', '#1F3D3D'].map(
          (color, i) => (
            <span
              key={i}
              className="w-12 h-12 rounded-full"
              style={{ backgroundColor: color }}
            />
          )
        )}
      </div>

      {/* Background image */}
    <img
        src={CELULAMADRE}
        alt="background blur"
        className="absolute w-[39%] -left-[10%] -bottom-[30%] opacity-50 pointer-events-none "
      />


    </section>
  );
};