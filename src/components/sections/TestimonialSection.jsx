import React from "react";
import { Star, Play, MapPin  } from "lucide-react";
import Fondoimg from "../../assets/FORUM.svg";
import CHRISTIANHELD from "../../assets/CHRISTIAN HELD.png";
import Adriana from "../../assets/Adriana.png";
import nelson from "../../assets/nelso.png";
// Simulando el SVG de fondo para la demo

export const TestimonialSection = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center
                 h-[220vh] min-h-[1200px]
                 sm:h-[220vh] sm:min-h-[1100px]
                 md:h-[250vh] md:min-h-[1000px]
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
                      px-4 sm:px-6 md:px-8 lg:px-12
                      py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="w-full max-w-6xl
                        grid grid-cols-1 gap-6 sm:gap-6
                        lg:grid-cols-5 lg:gap-6
                        items-stretch">
          
          {/* Card principal - Video + Rating */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/80
                          lg:col-span-3
                          p-6 sm:p-6 md:p-7 lg:p-8">
            <div className="flex flex-col items-center justify-center space-y-8 md:space-y-8 h-full
                            lg:flex-row lg:space-y-0 lg:space-x-8 xl:space-x-12">
              
              {/* Video */}
            < div
  className="relative rounded-3xl overflow-hidden shadow-xl flex-shrink-0
             w-72 h-80 sm:w-72 sm:h-88 md:w-80 md:h-130"
  style={{ backgroundColor: "#D4A574" }}
>
  {/* Google Maps Embed */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5012989789875!2d-75.57413389999999!3d6.1973972999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468287f76f024f%3A0x5e9415e8a866e128!2sDR.%20DIEGO%20HERN%C3%81NDEZ%20Z.%20OZONOTERAPIA%2C%20TRATAMIENTOS%20HIPERBARICOS%2C%20COLONTERAPIA!5e0!3m2!1ses-419!2sco!4v1749050664883!5m2!1ses-419!2sco"
    className="w-full h-full object-cover border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  
  

  {/* Overlay que redirige al hacer clic */}
  <div
    className="absolute inset-0 z-10 cursor-pointer hover:bg-[#1F3D3D]/20"
    onClick={() =>
      window.open(
        'https://www.google.com/maps/place/DR.+DIEGO+HERN%C3%81NDEZ+Z.+OZONOTERAPIA,+TRATAMIENTOS+HIPERBARICOS,+COLONTERAPIA/@6.1973973,-75.5741339,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468287f76f024f:0x5e9415e8a866e128!8m2!3d6.1973973!4d-75.5741339!16s%2Fg%2F11rg5qm7m5',
        '_blank'
      )
    }
  ></div>

  {/* Botón de ubicación */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div
      className="bg-[#5AA8A2] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1F3D3D] transition-colors pointer-events-auto cursor-pointer
                 w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 z-20"
      onClick={(e) => {
        e.stopPropagation();
        window.open(
          'https://www.google.com/maps/place/DR.+DIEGO+HERN%C3%81NDEZ+Z.+OZONOTERAPIA,+TRATAMIENTOS+HIPERBARICOS,+COLONTERAPIA/@6.1973973,-75.5741339,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468287f76f024f:0x5e9415e8a866e128!8m2!3d6.1973973!4d-75.5741339!16s%2Fg%2F11rg5qm7m5',
          '_blank'
        );
      }}
    >
      <MapPin className="text-white w-6 h-6 sm:w-5 sm:h-5 md:w-8 md:h-8" />
    </div>
  </div>
</div>

              {/* Rating de Google */}
              <div className="flex flex-col items-center space-y-6 sm:space-y-6 md:space-y-8 flex-1">
                {/* Logo de Google */}
                <p className="text-gray-700 text-lg sm:text-lg md:text-xl font-semibold text-center">
                  Click the logo to leave a review
                </p>    
                <a href='https://g.page/r/CSjhZqjoFZReEAE/review' target="blank" className="bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#999EA6] 
                                w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24">
                  <svg className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 24 24">
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

                {/* Contenido del rating */}
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 mb-4 sm:mb-4 md:mb-6
                                 text-2xl sm:text-2xl md:text-3xl">
                    EXCELLENT
                  </h3>

                  {/* Estrellas */}
                  <div className="flex justify-center mb-4 sm:mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400
                                   w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4 sm:mb-4 md:mb-6
                                text-base sm:text-base md:text-xl">
                    Based on <span className="font-semibold">39 reviews</span>
                  </p>

                  {/* Google logo pequeño */}
                  <div className="flex justify-center">
                    <svg className="w-14 h-5 sm:w-14 sm:h-5 md:w-16 md:h-6" viewBox="0 0 272 92">
                      <path
                        fill="#4285F4"
                        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                      />
                      <path
                        fill="#EA4335"
                        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                      />
                      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
                      <path
                        fill="#EA4335"
                        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                      />
                      <path
                        fill="#4285F4"
                        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card de reseñas */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50
                          lg:col-span-2
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
                          Nelson Calderón
                      </h4>
                      <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">2 weeks ago</p>
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
                  Dr. Diego is a great professional. I recommend him without any doubt.
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