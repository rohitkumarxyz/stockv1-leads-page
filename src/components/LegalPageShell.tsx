import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, type LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

type LegalPageShellProps = {
  title: string;
  lastUpdated?: string;
  icon: LucideIcon;
  children: ReactNode;
};

const LegalPageShell = ({ title, lastUpdated, icon: Icon, children }: LegalPageShellProps) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={handleContactClick} />

      <main className="legal-page-main pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h1>
            </div>
            {lastUpdated ? <p className="text-gray-500">Last updated: {lastUpdated}</p> : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 space-y-8 text-gray-700 leading-relaxed">
              {children}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer onContactClick={handleContactClick} />
    </div>
  );
};

export default LegalPageShell;
