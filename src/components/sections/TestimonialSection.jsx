import React from "react";
import { Star, Play, MapPin  } from "lucide-react";
import Fondoimg from "../../assets/FORUM.svg";
import CHRISTIANHELD from "../../assets/CHRISTIAN HELD.png";
import Adriana from "../../assets/Adriana.png";
import nelson from "../../assets/Testimonial3.png";

export const TestimonialSection = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center
                 h-[220vh] min-h-[1450px]
                 sm:h-[220vh] sm:min-h-[1300px]
                 md:h-[250vh] md:min-h-[1450px]
                 lg:h-[140vh] lg:min-h-[1100px]
                 xl:h-[150vh] xl:min-h-[1200px]"
      
    >

      <div className="absolute w-full h-full bg-cover bg-center opacity-40"
        style={{
        backgroundImage: `url(${Fondoimg})`,
      }}

      ></div>
      {/* Gradientes */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent z-10
                      h-24 sm:h-32 md:h-40"></div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent z-10
                      h-24 sm:h-32 md:h-40"></div>

      {/* Contenido principal */}
      <div className="relative z-20 h-full flex items-center justify-center
                      px-4 sm:px-6 md:px-9 lg:px-12
                      py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="w-full max-w-6xl
                        grid grid-cols-1 gap-6 sm:gap-6
                        lg:grid-cols-8 lg:gap-6
                        items-stretch">
          
          {/* Card principal - Solo Video */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/80
                          lg:col-span-4
                          p-6 sm:p-6 md:p-7 lg:p-8">
            <div className="flex flex-col items-center justify-center space-y-20 md:space-y-20 h-container">
              
              {/* Mapa Interactivo Ampliado */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-xl flex-shrink-0 group cursor-pointer
                           w-full h-96 sm:w-full sm:h-[450px] md:w-full md:h-[500px] lg:h-[400px] xl:h-[450px]"
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/place/DR.+DIEGO+HERN%C3%81NDEZ+Z.+OZONOTERAPIA,+TRATAMIENTOS+HIPERBARICOS,+COLONTERAPIA/@6.1973973,-75.5741339,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468287f76f024f:0x5e9415e8a866e128!8m2!3d6.1973973!4d-75.5741339!16s%2Fg%2F11rg5qm7m5',
                    '_blank'
                  )
                }
              >
                {/* Imagen de fondo por defecto */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-left transition-all duration-500 ease-in-out
                             group-hover:scale-110 group-hover:opacity-30"
                  style={{
                    backgroundImage: `url(${Fondoimg})`,
                  }}
                ></div>

                {/* Google Maps Embed - Oculto por defecto, visible en hover */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5012989789875!2d-75.57413389999999!3d6.1973972999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468287f76f024f%3A0x5e9415e8a866e128!2sDR.%20DIEGO%20HERN%C3%81NDEZ%20Z.%20OZONOTERAPIA%2C%20TRATAMIENTOS%20HIPERBARICOS%2C%20COLONTERAPIA!5e0!3m2!1ses-419!2sco!4v1749050664883!5m2!1ses-419!2sco"
                  className="w-full h-full object-cover border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Overlay con gradiente y texto instructivo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-transparent group-hover:via-transparent group-hover:to-transparent transition-all duration-500"></div>
                
                {/* Texto instructivo - Se oculta en hover */}
                <div className="absolute bottom-4 left-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-sm font-medium">Roll over the mouse to see the map</p>
                </div>

                {/* Botón de ubicación - Más visible en hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="bg-[#5AA8A2] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1F3D3D] transition-all duration-300
                               w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                               group-hover:scale-110 group-hover:bg-[#1F3D3D] group-hover:shadow-2xl z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        'https://www.google.com/maps/place/DR.+DIEGO+HERN%C3%81NDEZ+Z.+OZONOTERAPIA,+TRATAMIENTOS+HIPERBARICOS,+COLONTERAPIA/@6.1973973,-75.5741339,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468287f76f024f:0x5e9415e8a866e128!8m2!3d6.1973973!4d-75.5741339!16s%2Fg%2F11rg5qm7m5',
                        '_blank'
                      );
                    }}
                  >
                    <MapPin className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Widget de Rating Horizontal - Ahora en la parte inferior */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-3 w-full max-w-md">
                <a  href='https://g.page/r/CSjhZqjoFZReEAE/review' target="blank" className="flex items-center justify-between">
                  {/* Logo de Google pequeño */}
                  <a  className="flex-shrink-0">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </a>

                  {/* Contenido central */}
                  <div className="flex-1 text-center px-3">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <span className="font-bold text-gray-800 text-xs sm:text-sm">EXCELLENT</span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-yellow-400 w-3 h-3"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-xs">
                      Based on <span className="font-semibold">39 reviews</span>
                    </p>
                  </div>

                  {/* Texto de llamada a la acción */}
                  <div className="flex-shrink-0 text-right">
                    <p className="text-gray-700 text-[0.6rem] sm:text-sm font-medium">
                      Click to<br />leave a review
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Card de reseñas */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50
                          lg:col-span-4
                          p-5 sm:p-5 md:p-6">
            <div className="space-y-4 sm:space-y-5 h-full flex flex-col justify-center">
              
              {/* Primera reseña */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30
                              p-4 sm:p-4 md:p-6">
                <div className="flex items-start mb-3 sm:mb-3 md:mb-4">
                  <img
                    src={CHRISTIANHELD}
                    alt="CHRISTIAN HELDr"
                    className="rounded-full object-cover mr-3 sm:mr-3 md:mr-4
                               w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-800 
                                     text-sm sm:text-sm md:text-base">
                        
                        CHRISTIAN HELD
                      </h4>
                      <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">3 weeks ago</p>
                  </div>
                </div>

                <div className="flex items-center mb-3 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4 sm:w-4 sm:h-4" />
                  ))}
                  <div className="bg-blue-500 rounded-full ml-2 flex items-center justify-center
                                  w-3 h-3 sm:w-3 sm:h-3">
                    <div className="bg-white rounded-full w-1 h-1 sm:w-1 sm:h-1"></div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-medium
                              text-sm sm:text-sm">
                  Of Dr. Diego Hernandez, I can say with total certainty that he is an exceptional professional. His medical knowledge is impressive, always up to date, clear in his explanations and precise in his diagnoses....
                </p>
              </div>

              {/* Segunda reseña */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30
                              p-4 sm:p-4 md:p-6">
                <div className="flex items-start mb-3 sm:mb-3 md:mb-4">
                  <img
                    src={nelson}
                    alt="Jhon Bradley"
                    className="rounded-full object-cover mr-3 sm:mr-3 md:mr-4  
                               w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-800
                                     text-sm sm:text-sm md:text-base">                       
                          Henry Kuehner
                      </h4>
                      <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">1 weeks ago</p>
                  </div>
                </div>

                <div className="flex items-center mb-3 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4 sm:w-4 sm:h-4" />
                  ))}
                  <div className="bg-blue-500 rounded-full ml-2 flex items-center justify-center
                                  w-3 h-3 sm:w-3 sm:h-3">
                    <div className="bg-white rounded-full w-1 h-1 sm:w-1 sm:h-1"></div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-medium 
                              text-sm sm:text-sm">
                  So I have to say the service has been spectacular here with Diego Hernandez. Since the very beginning of this year and January, whenever we started. I actually did five different procedures here, including NAD plus, muscle sculpt,glutathione, and now just starting with the hyperbaric chamber today.....
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30
                              p-4 sm:p-4 md:p-6">
                <div className="flex items-start mb-3 sm:mb-3 md:mb-4">
                  <img
                    src={Adriana}
                    alt="Adriana Rodriguez"
                    className="rounded-full object-cover mr-3 sm:mr-3 md:mr-4  
                               w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-800
                                     text-sm sm:text-sm md:text-base">
                        Adriana Rodriguez
                      </h4>
                      <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">3 weeks ago</p>
                  </div>
                </div>

                <div className="flex items-center mb-3 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4 sm:w-4 sm:h-4" />
                  ))}
                  <div className="bg-blue-500 rounded-full ml-2 flex items-center justify-center
                                  w-3 h-3 sm:w-3 sm:h-3">
                    <div className="bg-white rounded-full w-1 h-1 sm:w-1 sm:h-1"></div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-medium 
                              text-sm sm:text-sm">
                  The best in Medellin the unique attention very professional I recommend them to million are super u very delicate in their work which is the most important thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};