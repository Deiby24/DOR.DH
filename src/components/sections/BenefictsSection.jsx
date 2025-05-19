// // src/components/StickySection.tsx
// export const BenefictsSection = () => {
//   const items = [
//     { text: "Sports injuries", icon: "🏃" },
//     { text: "Osteoarthritis", icon: "🦴" },
//     { text: "Chronic pain in knees, hips, or back", icon: "💥" },
//     { text: "Tendon damage", icon: "🧬" },
//     { text: "Degenerative disc disease", icon: "🌀" },
//     { text: "Cartilage repair", icon: "🛠️" },
//     { text: "Ligament issues", icon: "🔗" },
//     { text: "Post-surgical healing", icon: "🩺" },
//     { text: "Immune modulation", icon: "🛡️" },
//   ];

//   return (
//     <section className="bg-[#f3fdfc] py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        
//         {/* Columna Izquierda Fija */}
//         <div className="sticky top-20 h-fit self-start">
//           <div className="bg-white border border-[#b9dfdb] p-8 rounded-xl shadow-md">
//             <h2
//               className="text-3xl font-bold mb-4 text-[#2f4f4f]"
//               style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
//             >
//               Mesenchymal stem cells (MSC)
//             </h2>
//             <p
//               className="text-[#2f4f4f] text-lg leading-relaxed"
//               style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
//             >
//               Hold great potential for regenerative medicine due to their ability to self-renew and differentiate into tissue-specific cells.
//             </p>
//           </div>
//         </div>

//         {/* Columna Derecha Scrolleable */}
//         <div className="space-y-4">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white border border-[#b9dfdb] rounded-xl shadow-md p-6 flex items-center space-x-4"
//             >
//               <span className="text-3xl">{item.icon}</span>
//               <div>
//                 <h3
//                   className="text-lg font-semibold text-[#2f4f4f]"
//                   style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
//                 >
//                   {item.text}
//                 </h3>
//                 <p className="text-gray-500 mt-1">
//                   Description about how MSCs help with {item.text.toLowerCase()}.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


// src/components/StickySection.tsx
export const BenefictsSection = () => {
  const items = [
    { label: "Sports injuries", icon: "/icons/sports.svg" },
    { label: "Osteoarthritis", icon: "/icons/knee.svg" },
    { label: "Chronic pain in the knees, hips, or back", icon: "/icons/back.svg" },
    { label: "Sports injuries", icon: "/icons/sports.svg" },
    { label: "Osteoarthritis", icon: "/icons/knee.svg" },
    { label: "Chronic pain in the knees, hips, or back", icon: "/icons/back.svg" },
    { label: "Sports injuries", icon: "/icons/sports.svg" },
    { label: "Osteoarthritis", icon: "/icons/knee.svg" },
    { label: "Chronic pain in the knees, hips, or back", icon: "/icons/back.svg" },
    { label: "Sports injuries", icon: "/icons/sports.svg" },
    { label: "Osteoarthritis", icon: "/icons/knee.svg" },
    { label: "Chronic pain in the knees, hips, or back", icon: "/icons/back.svg" },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Columna Izquierda Fija */}
        <div className="sticky top-20 self-start">
          <div className="bg-[#f2f9f6] p-8 rounded-xl shadow-md text-center relative">
            {/* Puntos de navegación */}
            <div className="flex justify-center gap-2 mb-4">
              {[0,1,2,3,4,5].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === 5 ? 'bg-teal-800' : 'bg-teal-300'}`}
                ></div>
              ))}
            </div>
            {/* Texto principal */}
            <h2
              className="text-[1.5rem] leading-relaxed text-gray-800 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mesenchymal stem cells (MSC) hold great potential for regenerative medicine because of their ability for self-renewal and differentiation into tissue-specific cells.
            </h2>
          </div>
        </div>

        {/* Columna Derecha Scrolleable */}
        <div className="space-y-6">
          <div className="bg-[#f2f9f6] rounded-xl px-6 py-4 shadow-sm">
            <h3
              className="text-xl font-medium italic text-gray-700 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who is it indicated for?
            </h3>
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-[#f9fdfc] p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 mr-4 object-contain"
              />
              <p
                className="text-teal-800 font-semibold italic text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
