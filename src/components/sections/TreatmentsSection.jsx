import TreatmentCard from './TreatmentsCards';
import adng from '../../assets/Dise.gif';

export const TreatmentsSection = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center z-10
                        py-12 px-10 
                        sm:py-16 sm:px-6 
                        md:py-20 md:px-8 
                        lg:py-24 
                        xl:py-28"
      
    >

      {/* <div 
        className="relative top-0 left-0 w-full h-full z-12"
        style={{
          backgroundImage: `url(${adng})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}>

      </div> */}
      <div className="lg:max-w-7xl xl:max-w-7xl  md:max-w-3xl w-full justify-center items-center flex flex-col">
        
        <h2 className="text-[#1F3D3D] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12
                       text-[1.2rem] 
                       sm:text-3xl 
                       md:text-4xl 
                       lg:text-5xl 
                       xl:text-6xl 
                       2xl:text-7xl"
            style={{
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
              fontStyle: 'italic',
              fontWeight: 500,
            }}>
          
          <span className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
            <div
              className="rounded-full z-20 flex-shrink-0
                         w-2 h-2 
                         sm:w-3 sm:h-3 
                         md:w-4 md:h-4 
                         lg:w-5 lg:h-5"
              style={{ backgroundColor: '#86D2C9' }}
            />
            <span className="leading-tight text-[#1F3D3D]" >What is Regenerative Medicine?</span>
            <div
              className="rounded-full z-20 flex-shrink-0
                        w-2 h-2 
                         sm:w-3 sm:h-3 
                         md:w-4 md:h-4 
                         lg:w-5 lg:h-5"
              style={{ backgroundColor: '#86D2C9' }}
            />
          </span>
        </h2>

        <p className="italic text-[#5DA9A6] text-center leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-16
                      
                      sm:text-md sm:max-w-md
                      md:text-lg md:max-w-[53rem]
                      lg:text-xl lg:max-w-[58rem]
                      xl:text-2xl xl:max-w-[69rem]"
           style={{
             fontFamily: 'Georgia, Times, "Times New Roman", serif',
             fontStyle: 'italic'
           }}>
          Regenerative medicine is an advanced medical approach that stimulates the body's ability to repair itself through the use of stem cells, growth factors, and other biological methods. It is designed to treat injuries, chronic diseases, and degenerative disorders, often avoiding the need for invasive surgery.
        </p>

        <div className="w-full
                        grid grid-cols-1 gap-4
                        sm:grid-cols-1 sm:gap-4
                        md:grid-cols-2 md:gap-6
                        lg:grid-cols-3 lg:gap-8
                        xl:gap-10
                        ">
          <TreatmentCard
            title="Exosomes"
            description="Exosome therapies for cell regeneration. Aesthetic, orthopedic, and neurological applications.
            text-sm
            "
          />
          <TreatmentCard
            title="Stem Cell Therapy"
            description="Treatment of joints, sports injuries, neurodegenerative diseases, and rejuvenation."
          />
          <TreatmentCard
            title="Platelet-Rich Plasma (PRP)"
            description="Aesthetic PRP (facial, hair). Orthopedic PRP for muscle and joint injuries."
          />
          <TreatmentCard
            title="Ozone Therapy"
            description="Serum Therapy • Hyperbaric Medicine"
          />
          <TreatmentCard
            title="Hyperbaric Medicine"
            description="Advanced oxygen therapy for enhanced healing and recovery treatments."
          />
          <TreatmentCard
            title="Growth Factor Therapy"
            description="Targeted biological treatments for tissue repair and regeneration processes."
          />
        </div>
      </div>
    </section>
  );
};