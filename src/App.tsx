import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CertificationList } from './components/CertificationList';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FAQ } from './components/FAQ';
import { ProcessSteps } from './components/ProcessSteps';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProcessSteps />
      <CertificationList />
      <FAQ />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;