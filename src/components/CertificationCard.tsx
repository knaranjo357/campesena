import { ImageSlider } from './ImageSlider';

interface CertificationCardProps {
  code: string;
  title: string;
  description: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
  onContactClick: () => void;
}

export const CertificationCard = ({ 
  code, 
  title, 
  description, 
  images,
  onContactClick 
}: CertificationCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]">
      <ImageSlider images={images} />
      <div className="p-6">
        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
          Norma {code}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button
          onClick={onContactClick}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Quiero certificarme
        </button>
      </div>
    </div>
  );
};