import { useState } from 'react';
import { Plus } from 'lucide-react';
import { div } from 'framer-motion/client';

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
    }
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div 
      className="min-h-screen relative"
    >
      <div className="container mx-auto px-8 py-20 justify-items-center">
        <div className="mb-16 w-full">
          <div className='flex justify-center w-[80%]'>
            <h1 
              className="italic text-slate-700 leading-tight mb-2"
              style={{
                fontSize: '4.5rem',
                fontWeight: '300',
                lineHeight: '1.1',
                fontFamily: 'Georgia, serif'
              }}
            >
              We answer more questions
            </h1>
          </div>
        </div>

        <div className="w-full mb-16">
          {faqData.map((item, index) => (
            
            <div key={item.id} className=''>
              <div 
                className="flex items-center justify-between py-8 cursor-pointer group border-b border-gray-400 justify-center w-[80%]"
                onClick={() => toggleExpanded(item.id)}
                style={{ borderBottomWidth: '1px' }}
              >
                <h2 
                  className="italic text-slate-700 pr-8 leading-relaxed flex-1"
                  style={{
                    fontSize: '2rem',
                    fontWeight: '300',
                    fontFamily: 'Georgia, serif',
                    lineHeight: '1.3'
                  }}
                >
                  {item.question}
                </h2>
                
                <button
                  className={`flex-shrink-0 transition-all duration-300 ${
                    expandedItems[item.id] ? 'rotate-45' : ''
                  }`}
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#5f9ea0',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none'
                  }}
                  aria-label={expandedItems[item.id] ? 'Collapse answer' : 'Expand answer'}
                >
                  <Plus size={24} color="white" strokeWidth={2.5} />
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedItems[item.id] 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-6 pr-16">
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
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
  );
};

