import { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LeadForm, { type LeadFormRef } from './components/LeadForm';
import ThankYou from './components/ThankYou';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'thank-you'>('home');
  const leadFormRef = useRef<LeadFormRef>(null);

  const handleFormSuccess = () => {
    setCurrentPage('thank-you');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleContactClick = () => {
    if (leadFormRef.current) {
      leadFormRef.current.openForm();
    }
  };

  if (currentPage === 'thank-you') {
    return <ThankYou onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onFormSuccess={handleFormSuccess} />
      <Services />
      <About />
      <Packages />
      <Testimonials />
      <FAQ onFormSuccess={handleFormSuccess} />
      <Footer onContactClick={handleContactClick} />
      <LeadForm ref={leadFormRef} onFormSuccess={handleFormSuccess} />
    </div>
  );
}

export default App;