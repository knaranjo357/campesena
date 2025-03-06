import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProcessSteps } from './components/ProcessSteps';
import { FAQ } from './components/FAQ';
import { CertificationList } from './components/CertificationList';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProcessSteps />
      <FAQ />
      <CertificationList />
      <FloatingWhatsApp />
    </div>
  );
}

export default App