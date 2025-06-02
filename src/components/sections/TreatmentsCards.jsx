const TreatmentCard = ({ title, description }) => {
  return (
    <div className="relative bg-[#EAF3EC]/30 rounded-xl p-6 shadow-md flex flex-col items-center justify-center text-center overflow-hidden min-h-[220px]">
      {/* Imagen de fondo translúcida */}

      {/* Contenido del card */}
      <div className="relative z-10">
        <h3
          className="
          text-2xl 
          sm:text-xl
          md:text-1xl
          lg:text-2xl
          xl:text-3xl
          2xl:text-4xl  
          
          
          text-[#1F3D3D] mb-2"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontStyle: 'italic'
          }}
        >
          {title}
        </h3>
        <p
          className="text-[#417F7C] text-base md:text-lg leading-relaxed"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontStyle: 'italic'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TreatmentCard;
