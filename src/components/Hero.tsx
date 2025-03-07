import { ArrowRight, Calendar, Clock, MapPin, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-medium mb-6">
            ¡Totalmente GRATIS!
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Estrategia CampeSENA: Certifica tu Experiencia Laboral
          </h1>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-1 rounded-xl mb-8 transform hover:scale-[1.02] transition-all">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <h2 className="text-3xl font-bold text-blue-800">¡Proximamente en Socorro, Santander!</h2>
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="grid md:grid-cols-3 gap-4 text-lg">
                  <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-800">Fecha</p>
                      <p className="text-blue-700">27 de marzo 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-800">Hora</p>
                      <p className="text-blue-700">8:30am</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-blue-800">Lugar</p>
                      <p className="text-blue-700">Cámara de Comercio Socorro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              ¡Gran oportunidad para los campesinos! Certifica lo que ya sabes hacer sin necesidad de estudiar desde cero.
            </p>
            
            <div className="bg-green-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">¿Por qué certificarse?</h2>
              <ul className="text-lg text-gray-700 space-y-4 text-left">
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <ArrowRight className="flex-shrink-0 w-6 h-6 text-green-600 mt-1" />
                  <span>Acceso a recursos del FONDO EMPRENDER para proyectos productivos</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <ArrowRight className="flex-shrink-0 w-6 h-6 text-green-600 mt-1" />
                  <span>Mayor reconocimiento en el mercado laboral</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <ArrowRight className="flex-shrink-0 w-6 h-6 text-green-600 mt-1" />
                  <span>Acceso a créditos y subsidios para el campo</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <ArrowRight className="flex-shrink-0 w-6 h-6 text-green-600 mt-1" />
                  <span>Aumenta la confianza de clientes y compradores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
