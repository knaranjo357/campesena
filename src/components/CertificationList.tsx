import { useState } from 'react';
import { CertificationCard } from './CertificationCard';
import { Filter } from 'lucide-react';
import { Modal } from './ui/Modal';

type Category = 'all' | 'rural' | 'urban';

interface ContactInfo {
  email: string;
  phone: string;
  evaluator?: string;
  formUrl?: string;
}

const ruralCertifications = [
  {
    code: "260101047",
    title: "Vender Productos y Servicios",
    description: "Certifica tu experiencia en la venta de productos y servicios agrícolas, mejorando tus oportunidades de negocio.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Venta de productos agrícolas"
      }
    ],
    contact: {
      email: "cbmartinez@sena.edu.co",
      phone: "3183911098"
    }
  },
  {
    code: "260201077",
    title: "Guía de Turismo Local",
    description: "Certifica tu experiencia como guía turístico local y abre nuevas oportunidades en el sector turístico.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533551037358-c8f7182cdb79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Guía turístico"
      }
    ],
    contact: {
      email: "cbmartinez@sena.edu.co",
      phone: "3183911098"
    }
  }
];

const urbanCertifications = [
  {
    code: "260201094",
    title: "🍼 Asear espacios domésticos",
    description: "Certifica tus habilidades en la limpieza y mantenimiento de espacios.",
    images: [{ url: "https://imgs.search.brave.com/ZwKGoJM9fxpSOKZqjKC3ZH99WpCAhZaXhyBbM2ElXrs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hZG1hZ2F6aW5l/LmNvbS9waG90b3Mv/NjE4YTVkNWU1MzJj/YWU5MDhhYWYyODI1/L21hc3Rlci93XzE2/MDAsY19saW1pdC85/NTE3MC5qcGc", alt: "Limpieza" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201072",
    title: "✅ Coordinar servicios de alojamiento",
    description: "Certifica tu experiencia en la gestión de servicios de hospedaje.",
    images: [{ url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3", alt: "Alojamiento" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201076",
    title: "🎉 Dirigir eventos",
    description: "Certifica tus capacidades en la organización y dirección de eventos.",
    images: [{ url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3", alt: "Eventos" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201095",
    title: "✨ Diseñar paquetes turísticos",
    description: "Certifica tu experiencia en la creación de experiencias turísticas.",
    images: [{ url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3", alt: "Turismo" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201098",
    title: "👤 Procesar consumos del huésped",
    description: "Certifica tus habilidades en la gestión de servicios hoteleros.",
    images: [{ url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3", alt: "Consumos" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201068",
    title: "👮‍♂️ Asistir al huésped",
    description: "Certifica tu experiencia en servicio al cliente hotelero.",
    images: [{ url: "https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3", alt: "Asistencia" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201096",
    title: "🏠 Arreglar habitaciones",
    description: "Certifica tus habilidades en el mantenimiento de habitaciones.",
    images: [{ url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3", alt: "Habitaciones" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201092",
    title: "🧺 Acondicionar prendas",
    description: "Certifica tu experiencia en el cuidado de prendas.",
    images: [{ url: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3", alt: "Prendas" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201091",
    title: "🌊 Conducir descenso de balsa inflable",
    description: "Certifica tus habilidades en deportes acuáticos.",
    images: [{ url: "https://imgs.search.brave.com/b5-OjbjFPzYtvgyKw1wZ46hCw2O1ab45D1PPdgcAcek/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJhbmNlLXZveWFn/ZS5jb20vdmlzdWFs/cy9wcm9wcy9kZXNj/ZW5zby1yaW9zLWJh/bHNhLWtheWFrLWlu/ZmxhYmxlLWFsdG9z/LWFscGVzLTEyMTAx/MC0xX3c2MDAud2Vi/cA", alt: "Rafting" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201084",
    title: "🛄 Emitir tiquete de viaje",
    description: "Certifica tu experiencia en servicios de transporte.",
    images: [{ url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3", alt: "Tiquetes" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201069",
    title: "🍔 Repartir domicilios",
    description: "Certifica tus habilidades en servicio de entrega.",
    images: [{ url: "https://imgs.search.brave.com/_ct-WkUY-Wfh_pO2zDCOLXSQ2vI0SLNV-8evxhViFRM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS9kOWFiYTEx/OS9kbXMzcmVwL211/bHRpL29wdC9jbG9z/ZS11cC1oYW5kcy1n/ZXR0aW5nLWJveC0x/OTIwdy5qcGc", alt: "Domicilios" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  },
  {
    code: "260201097",
    title: "📍 Reservar servicios de viajes y turismo",
    description: "Certifica tu experiencia en gestión de reservas turísticas.",
    images: [{ url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3", alt: "Reservas" }],
    contact: { email: "ajmateusv@sena.edu.co", phone: "3106522788", formUrl: "https://forms.gle/zn69U21GSymjPgAUA" }
  }
];

export const CertificationList = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedCertification, setSelectedCertification] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = (certification: any) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Certificaciones Disponibles
            </h2>
        <br></br>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-green-600" />
              <select
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category)}
              >
                <option value="all">Todas las certificaciones</option>
                <option value="rural">Categoría Rural (Santander)</option>
                <option value="urban">Categoría Urbana (Socorro)</option>
              </select>
            </div>
          </div>

          {(selectedCategory === 'all' || selectedCategory === 'rural') && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Certificaciones Rurales - Disponible en todo Santander
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {ruralCertifications.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    {...cert}
                    onContactClick={() => handleContactClick(cert)}
                  />
                ))}
              </div>
            </div>
          )}

          {(selectedCategory === 'all' || selectedCategory === 'urban') && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Certificaciones Urbanas - Exclusivo para Socorro, Santander
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {urbanCertifications.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    {...cert}
                    onContactClick={() => handleContactClick(cert)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedCertification && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`Contacto para certificación: ${selectedCertification.title}`}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Detalles de la certificación:</h4>
              <p className="text-gray-600">{selectedCertification.description}</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    `Hola, me interesa certificarme en la norma ${selectedCertification.code} - ${selectedCertification.title}. Soy del municipio de: `
                  );
                  window.open(`https://wa.me/${selectedCertification.contact.phone}?text=${message}`, '_blank');
                }}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                Contactar por WhatsApp
              </button>

              {selectedCertification.contact.formUrl && (
                <a
                  href={selectedCertification.contact.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Agiliza tu trámite - Llena el formulario
                </a>
              )}

              <div className="text-sm text-gray-600">
                <p>Email: {selectedCertification.contact.email}</p>
                <p>Teléfono: {selectedCertification.contact.phone}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};