import React from 'react';

export const DoctorCard = () => {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
      <div className="flex gap-8">
        {/* Left Section */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-teal-800 italic mb-1">
              Dr. Diego Hernández Z. M.D. U.de.A.
            </h1>
          </div>

          {/* Photo Section */}
          <div className="bg-gradient-to-br from-teal-400 to-teal-600 p-6 rounded-lg mb-6">
            <div className="w-full h-64 bg-white rounded-lg overflow-hidden">
              <img 
                src="../../assets/FOTOFINAL.svg" 
                alt="Dr. Diego Hernández"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Experience Section */}
          <div className="text-center">
            <div className="mb-4">
              <h2 className="text-teal-700 italic text-lg mb-3">
                Doctor and Surgeon - University of Antioquia
              </h2>
              <div className="text-5xl font-bold text-teal-800 mb-1">23</div>
              <div className="text-lg italic text-teal-700 mb-4">years of experience.</div>
            </div>
            
            <div className="text-sm text-gray-700 leading-relaxed mb-6">
              <p className="italic">
                CEO of Integral Wellness Center (a center for aesthetic and integrative medicine) for 15 years with extensive experience in hyperbaric medicine, aesthetic and anti-aging medicine, ozone therapy, orthomolecular medicine, hormone supplementation, stem cells and exosomes, colon therapy, and detoxification.
              </p>
            </div>

            {/* University Logos */}
            <div className="flex justify-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-teal-800">UdeA</span>
                </div>
              </div>
              <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-800">CERT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl italic text-teal-700 mb-6">Studies at:</h2>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 italic">Integrated Center for Biological Medicine</p>
                <p className="text-gray-600 italic">(CIMBI)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 italic">Colombian Scientific Association of Aesthetic Medicine</p>
                <p className="text-gray-600 italic">(ACOCME)</p>
                <p className="text-gray-600 italic">(Aesthetic Medicine)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 italic">Regional Corporation of Higher Education</p>
                <p className="text-gray-600 italic">(CRES)</p>
                <p className="text-gray-600 italic">(Ozone Therapy)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 italic">University Foundation of Health Sciences (FUCS)</p>
                <p className="text-gray-600 italic">(Integrative and Functional Medicine)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 italic">University Foundation of Health Sciences (FUCS)</p>
                <p className="text-gray-600 italic">(Seminar on regenerative medicine and use of biological medications)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800 italic">The Bosque University</p>
                <p className="text-gray-600 italic">(Homotoxicology)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}