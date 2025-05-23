import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  '/src/assets/CELULAS-05.svg',
  '/src/assets/CELULAS-04.svg',
  '/src/assets/CELULAS-05.svg',
  '/src/assets/CELULAS-04.svg',
  '/src/assets/CELULAS-05.svg',
];

export const AutoScrollCarousel = () => {
  const scrollRef = useRef(null);
  const [speed, setSpeed] = useState(1); // velocidad inicial
  const animationRef = useRef();

  // Reemplazo de useAnimationFrame con requestAnimationFrame nativo
  useEffect(() => {
    const animate = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += speed;
        
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden whitespace-nowrap scroll-smooth select-none"
      onMouseEnter={() => setSpeed(0)}    // cuando entra el mouse, pausa el scroll
      onMouseLeave={() => setSpeed(1)}    // cuando sale el mouse, vuelve a la velocidad original
    >
      {[...images, ...images].map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`carousel-img-${i}`}
          className="inline-block w-110 h-70 object-cover mx-2 shadow-lg"
          draggable={false}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}