import { ClipboardCheck, Eye, MessageSquare } from 'lucide-react';

export const ProcessSteps = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Proceso de Certificación
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-semibold text-lg mb-2">1. Conocimiento</h4>
          <p className="text-gray-600">Entrevista sobre tu experiencia en la labor</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-semibold text-lg mb-2">2. Desempeño</h4>
          <p className="text-gray-600">Observación del trabajo en campo</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ClipboardCheck className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-semibold text-lg mb-2">3. Producto</h4>
          <p className="text-gray-600">Diligenciar documentación básica</p>
        </div>
      </div>
      <div className="mt-8 p-4 bg-green-50 rounded-lg text-center">
        <p className="text-lg text-green-800">
          El proceso es totalmente gratuito y lo realizamos en tu comunidad. ¡No tienes que desplazarte!
        </p>
      </div>
    </div>
  );
};