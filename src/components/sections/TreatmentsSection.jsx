import TreatmentCard from './TreatmentsCards';
import adng from '../../assets/adng.gif';

export const TreatmentsSection = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center z-10
                        py-12 px-4 
                        sm:py-16 sm:px-6 
                        md:py-20 md:px-8 
                        lg:py-24 
                        xl:py-28"
      style={{
        // backgroundImage: `url(${adng})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl w-full justify-center items-center flex flex-col">
        
        <h2 className="text-[#1F3D3D] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12
                       text-2xl 
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
                         w-4 h-4 
                         sm:w-5 sm:h-5 
                         md:w-6 md:h-6 
                         lg:w-7 lg:h-7"
              style={{ backgroundColor: '#86D2C9' }}
            />
            <span className="leading-tight">What is Regenerative Medicine?</span>
          </span>
        </h2>

        <p className="italic text-[#5DA9A6] text-center leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-16
                      text-sm max-w-sm
                      sm:text-base sm:max-w-md
                      md:text-lg md:max-w-2xl
                      lg:text-xl lg:max-w-4xl
                      xl:text-2xl xl:max-w-5xl"
           style={{
             fontFamily: 'Georgia, Times, "Times New Roman", serif',
             fontStyle: 'italic'
           }}>
          Regenerative medicine is an advanced medical approach that stimulates the body's ability to repair itself through the use of stem cells, growth factors, and other biological methods. It is designed to treat injuries, chronic diseases, and degenerative disorders, often avoiding the need for invasive surgery.
        </p>

        <div className="w-full
                        grid grid-cols-1 gap-4
                        sm:grid-cols-2 sm:gap-6
                        md:grid-cols-2 md:gap-6
                        lg:grid-cols-3 lg:gap-8
                        xl:gap-10">
          <TreatmentCard
            title="Exosomes"
            description="Exosome therapies for cell regeneration. Aesthetic, orthopedic, and neurological applications."
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