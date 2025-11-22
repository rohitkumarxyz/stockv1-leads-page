import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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

function HomePage() {
  const leadFormRef = useRef<LeadFormRef>(null);
  const navigate = useNavigate();

  const handleFormSuccess = () => {
    // Generate a unique token for this submission
    const submissionToken = Date.now().toString(36) + Math.random().toString(36).substr(2);
    navigate(`/thank-you?submitted=true&token=${submissionToken}`);
  };

  const handleContactClick = () => {
    if (leadFormRef.current) {
      leadFormRef.current.openForm();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={handleContactClick} />
      <Hero onFormSuccess={handleFormSuccess} onContactClick={handleContactClick} />
      <Services onContactClick={handleContactClick} />
      <About />
      <Packages onContactClick={handleContactClick} />
      <Testimonials onContactClick={handleContactClick} />
      <FAQ onFormSuccess={handleFormSuccess} onContactClick={handleContactClick} />
      <Footer onContactClick={handleContactClick} />
      <LeadForm ref={leadFormRef} onFormSuccess={handleFormSuccess} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;