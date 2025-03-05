import { Phone, Mail, MessageSquare } from 'lucide-react';

export const ContactSection = () => {
  const phoneNumber = "3183911098";
  const email = "cbmartinez@sena.edu.co";
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola, me interesa certificar mis competencias laborales. Soy del municipio de: "
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          ¿Te interesa certificarte?
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              Contáctanos indicando tu municipio para organizar las visitas de evaluación.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <MessageSquare size={20} />
                <span>Contactar por WhatsApp</span>
              </button>
              
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={20} />
                <span>{phoneNumber}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={20} />
                <a href={`mailto:${email}`} className="hover:text-green-600">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};