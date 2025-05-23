import { useState } from 'react'
import './App.css'
import  Navbar  from './components/layout/Navbar';
import { Hero } from "./components/sections/Hero";
import { ButtonWhatsapp } from './components/common/ButtonWhatsapp';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { BenefictsSection } from './components/sections/BenefictsSection';
import { AutoScrollCarousel } from './components/sections/AutoScrollCarousel';
import { DoctorCard } from './components/sections/DoctorCard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
      <Hero />
      <ButtonWhatsapp />
      <TreatmentsSection />
      <BenefictsSection />
      <AutoScrollCarousel />
      <DoctorCard />
    </>
  )
}

export default App
