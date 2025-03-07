import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full text-left py-4 flex justify-between items-center gap-4"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-green-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-green-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "¿Cuántas personas se necesitan para organizar una certificación?",
      answer: "Para organizar una jornada de certificación en tu municipio, necesitamos un mínimo de personas interesadas. Esto nos ayuda a optimizar los recursos y garantizar que el evaluador pueda atender a todos los participantes de manera efectiva."
    },
    {
      question: "¿Cómo puedo ayudar como líder comunitario?",
      answer: "Puedes informar a la comunidad, sobre la certificación y sus beneficios, motivar a los trabajadores del campo a participar."
    },
    {
      question: "¿Qué documentos necesito para certificarme?",
      answer: "Fotocopia de la cédula y/o física"
    },
    {
      question: "¿Cuánto tiempo dura el proceso de certificación?",
      answer: "4 horas."
    },
    {
      question: "¿Tiene algún costo la certificación?",
      answer: "No, el proceso de certificación es completamente GRATUITO. El SENA asume todos los costos como parte de su compromiso con el desarrollo rural."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Todo lo que necesitas saber sobre el proceso de certificación
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};