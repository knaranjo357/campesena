export const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8">
          <img 
            src="https://www.soydebuenaventura.com/media/transparent/20230802_logosena.png" 
            alt="SENA Logo" 
            className="h-16 object-contain"
          />
          <img 
            src="https://th.bing.com/th/id/OIP.tcykkNfMXpIR5fTYHYkjZAHaCl?rs=1&pid=ImgDetMain" 
            alt="Cámara de Comercio Logo" 
            className="h-12 object-contain"
          />
        </div>
      </div>
    </header>
  );
};