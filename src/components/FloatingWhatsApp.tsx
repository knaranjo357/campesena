import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hola, me interesa certificar mis competencias laborales. Soy del municipio de: "
    );
    window.open(`https://wa.me/3183911098?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center gap-2 z-50"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">Contáctanos por WhatsApp</span>
    </button>
  );
};