import { useState } from 'react';
import { Plus } from 'lucide-react';

export const FaqSection = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "What conditions can stem cell and exosome therapy treat?",
      answer: "Stem cell and exosome therapy can potentially treat a wide range of conditions including orthopedic injuries, arthritis, joint pain, sports injuries, chronic wounds, and various degenerative diseases. These treatments work by promoting natural healing and regeneration processes in the body. However, treatment suitability depends on individual factors and should be evaluated by a qualified medical professional."
    },
    {
      id: 2,
      question: "How do I know if I am a good candidate for treatment?",
      answer: "A good candidate for stem cell and exosome therapy typically has specific medical conditions that can benefit from regenerative medicine, is in overall good health, has realistic expectations about outcomes, and has tried conventional treatments without success. The best way to determine candidacy is through a comprehensive medical evaluation where our specialists will review your medical history, current symptoms, and treatment goals to create a personalized treatment plan."
    },
    {
      id: 3,
      question: "How do I know if I am a good candidate for treatment?",
      answer: "A good candidate for stem cell and exosome therapy typically has specific medical conditions that can benefit from regenerative medicine, is in overall good health, has realistic expectations about outcomes, and has tried conventional treatments without success. The best way to determine candidacy is through a comprehensive medical evaluation where our specialists will review your medical history, current symptoms, and treatment goals to create a personalized treatment plan."
    },
    {
      id: 4,
      question: "How do I know if I am a good candidate for treatment?",
      answer: "A good candidate for stem cell and exosome therapy typically has specific medical conditions that can benefit from regenerative medicine, is in overall good health, has realistic expectations about outcomes, and has tried conventional treatments without success. The best way to determine candidacy is through a comprehensive medical evaluation where our specialists will review your medical history, current symptoms, and treatment goals to create a personalized treatment plan."
    }
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="w-full">
      {/* Sección del título con fondo verdoso */}
      <div 
        className="w-full relative -mt-18 z-10"

      >
        <div className="container mx-auto items-center">
          <div className=" w-[100%]"
            style={{
              background: '#F5FBF7',
              paddingTop: '30px',
              paddingBottom: '30px',
              borderRadius: '10px',
            }}
          >
            <h1 
              className="italic leading-tight px-8"
              style={{
                fontSize: '4.5rem',
                fontWeight: '300',
                lineHeight: '1.1',
                fontFamily: 'Georgia, serif',
                color: '#4a5568'
              }}
            >
              We answer more questions
            </h1>
          </div>
        </div>
      </div>

      {/* Sección de FAQ sin fondo especial */}
      <div className="w-full bg-white p-5" >
        <div className="container mx-auto ">
          <div className="flex ">
            <div className="w-full">
              {faqData.map((item, index) => (
                <div key={item.id} className="w-full">
                  <div 
                    className="flex items-center justify-between py-4 cursor-pointer group"
                    onClick={() => toggleExpanded(item.id)}
                    // style={{
                    //   borderBottom: '3px solid #5f9ea0'
                    // }}
                  >
                    <div className='w-[40%]'>
                      <h2 
                        className="italic pr-8 leading-relaxed flex-1 px-8"
                        style={{
                          fontSize: '1.9rem',
                          fontWeight: '300',
                          fontFamily: 'Georgia, serif',
                          lineHeight: '1.3',
                          color: '#4C8479'
                        }}
                      >
                        {item.question}
                      </h2>
                    </div>
                    
                    <button
                      className={`flex-shrink-0 transition-all duration-300 ${
                        expandedItems[item.id] ? 'rotate-45' : ''
                      }`}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#83D3CA',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      aria-label={expandedItems[item.id] ? 'Collapse answer' : 'Expand answer'}
                    >
                      <Plus size={24} color="#154445" strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="w-full  pt-2">
                  <svg
                    width="100%"
                    height="6"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,6 C25,12 75,12 100,6 C75,0 25,0 0,6"
                      fill="#74A4A0"
                      opacity="1.0"
                    />
                  </svg>
                </div>
                 

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      expandedItems[item.id] 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="py-8 px-8 pr-20">
                      <p 
                        className="leading-relaxed"
                        style={{
                          fontSize: '1.1rem',
                          lineHeight: '1.6',
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          color: '#4b5563'
                        }}
                      >
                        {item.answer}
                      </p>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};