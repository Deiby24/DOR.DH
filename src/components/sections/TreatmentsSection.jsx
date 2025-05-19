import TreatmentCard from './TreatmentsCards';

export const TreatmentsSection = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center py-20 px-4 md:px-8">
      <div className="max-w-7xl w-full justify-center items-center flex flex-col">
        <h2 className="text-5xl md:text-7xl lg:text-7xl  text-[#1F3D3D] mb-8 text-center"
          style={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            fontStyle: 'italic',
            fontWeight: 500,
          }}
        >
          What is Regenerative Medicine?
        </h2>

        <p className="italic text-[#5DA9A6] text-lg md:text-xl lg:text-2xl mb-12 text-center leading-relaxed max-w-5xl "
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontStyle: 'italic'
          }}
        >
          Regenerative medicine is an advanced medical approach that stimulates the body's ability to repair itself through the use of stem cells, growth factors, and other biological methods. It is designed to treat injuries, chronic diseases, and degenerative disorders, often avoiding the need for invasive surgery.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
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
            title="Ozone Therapy"
            description="Serum Therapy • Hyperbaric Medicine"
          />
             <TreatmentCard
            title="Ozone Therapy"
            description="Serum Therapy • Hyperbaric Medicine"
          />
             <TreatmentCard
            title="Ozone Therapy"
            description="Serum Therapy • Hyperbaric Medicine"
          />
             <TreatmentCard
            title="Ozone Therapy"
            description="Serum Therapy • Hyperbaric Medicine"
          />
             <TreatmentCard
            title="Ozone Therapy"
            description="Serum Therapy • Hyperbaric Medicine"
          />
        </div>
      </div>
    </section>
  );
};
