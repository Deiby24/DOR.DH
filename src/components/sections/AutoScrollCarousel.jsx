import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  '/src/assets/CELULAS-05.svg',
  '/src/assets/CELULAS-04.svg',
  '/src/assets/ADN2.png',
  '/src/assets/CELULA02.png',
];

export const AutoScrollCarousel = () => {
  const scrollRef = useRef(null);
  const [speed, setSpeed] = useState(1);
  const animationRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // Duplicamos las imágenes múltiples veces para crear el efecto infinito
  const duplicatedImages = [...images, ...images, ...images, ...images, ...images, ...images];

  useEffect(() => {
    const animate = () => {
      if (scrollRef.current && !isHovered) {
        const container = scrollRef.current;
        container.scrollLeft += speed;
        
        // Cuando llegamos a la mitad del contenido duplicado, volvemos al inicio
        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
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
  }, [speed, isHovered]);



  return (
    <div className="w-full overflow-hidden  py-8">
      <div
        ref={scrollRef}
        className="flex overflow-hidden whitespace-nowrap select-none"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}


      >
        {duplicatedImages.map((src, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 mx-4"
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
              z: 50
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 300
            }}
          >
            <img
              src={src}
              alt={`carousel-img-${i}`}
              className="w-90 h-70 object-cover rounded-2xl  duration-300"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Indicador de velocidad */}

    </div>
  );
};