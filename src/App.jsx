import { useState } from 'react'
import './App.css'
import Fondo from "../src/assets/GALAXIA.svg";
import  Navbar  from './components/layout/Navbar';
import { Hero } from "./components/sections/Hero";
import { ButtonWhatsapp } from './components/common/ButtonWhatsapp';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { BenefictsSection } from './components/sections/BenefictsSection';
import { AutoScrollCarousel } from './components/sections/AutoScrollCarousel';
import { DoctorCard } from './components/sections/DoctorCard';
import { TestimonialSection } from './components/sections/TestimonialSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactUs } from './components/sections/ContactUs';
import { Footer } from './components/layout/Footer';
import { AdvantagesSection } from './components/sections/AdvantagesSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      {/* HOME SECTION */}
      <section id="home">
        <Hero />
      </section>
      
      <ButtonWhatsapp />
      
      {/* SERVICES SECTION */}
      <section id="services">
        <TreatmentsSection />
      </section>
      
      {/* MEDICAL APPLICATIONS SECTION */}
      <section id="medical-applications">
        <BenefictsSection />
        <AutoScrollCarousel />
      </section>
      
      {/* ABOUT US SECTION */}
      <section id="about-us">
        <DoctorCard />
        <AdvantagesSection />
      </section>
      
      {/* TESTIMONIES SECTION */}
      <section id="testimonies">
        <TestimonialSection/>
      </section>
      
      {/* FAQ SECTION */}
      <section id="faq">
        {/* <FaqSection /> */}
        {/* Puedes descomentar cuando esté listo */}
      </section>
      
      {/* CONTACT SECTION */}
      <section id="contact" className='relative'>
        <div 
          className="absolute inset-0 opacity-10 bg-cover"
          style={{
            backgroundImage: `url(${Fondo})`,
          }}
        />
        <ContactUs/>
        <Footer />
      </section>
    </>
  )
}

export default App