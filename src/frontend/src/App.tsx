import HeroSection from './components/HeroSection';
import OriginSection from './components/OriginSection';
import PowersSection from './components/PowersSection';
import VillainsSection from './components/VillainsSection';
import AppearancesSection from './components/AppearancesSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OriginSection />
        <PowersSection />
        <VillainsSection />
        <AppearancesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
