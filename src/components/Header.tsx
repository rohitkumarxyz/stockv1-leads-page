import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, Star, TrendingUp } from 'lucide-react';
import { site } from '../config/site';

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200'
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white h-8 sm:h-10">
        <div className="container mx-auto px-3 sm:px-6 flex justify-between items-center text-xs sm:text-sm h-full">
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-6">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <a
                href={`tel:${site.salesPhone}`}
                className="font-semibold text-xs sm:text-sm descender-safe hover:text-blue-300 transition-colors"
                style={{ lineHeight: '1.4', paddingBottom: '0.05em' }}
              >
                {site.salesPhoneDisplay}
              </a>
            </div>
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm descender-safe" style={{ lineHeight: '1.4', paddingBottom: '0.05em' }}>SEBI Registered</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 lg:space-x-6">
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1 text-xs sm:text-sm"
            >
              <span className="hidden lg:inline">Request Callback</span>
              <span className="lg:hidden">Callback</span>
              <ArrowUpRight className="w-2 h-2 sm:w-3 sm:h-3" />
            </a>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-xs sm:text-sm">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-all duration-300 h-16 sm:h-20 md:h-24 lg:h-24 ${isScrolled ? 'bg-white/95' : 'bg-white/90'}`}>
        <div className="container mx-auto px-3 sm:px-6 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center flex-shrink-0"
            >
              <div className="flex h-10 max-w-[120px] sm:h-12 sm:max-w-[140px] md:h-14 md:max-w-[160px] lg:h-16 lg:max-w-[180px]">
                <img
                  src="/logo.png"
                  alt="TradeStock Logo"
                  className="h-full w-auto object-contain object-left"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-semibold transition-colors duration-300 relative group ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3 flex-shrink-0">
              <motion.a
                href={`https://wa.me/${site.whatsappE164}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-bold py-1.5 sm:py-2 px-2 sm:px-3 lg:py-2.5 lg:px-5 rounded-lg transition-all duration-300 flex items-center space-x-1 lg:space-x-2 text-xs sm:text-sm lg:text-base ${
                  isScrolled 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-green-600/90 hover:bg-green-700/90 text-white'
                }`}
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline">Connect Now</span>
                <span className="lg:hidden">Connect</span>
              </motion.a>
              <motion.button
                onClick={onContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-1.5 sm:py-2 px-2 sm:px-3 lg:py-2.5 lg:px-5 rounded-lg transition-all duration-300 flex items-center space-x-1 lg:space-x-2 shadow-lg text-xs sm:text-sm lg:text-base"
              >
                <span className="hidden lg:inline">Get Started</span>
                <span className="lg:hidden">Start</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 sm:p-3 rounded-lg transition-colors duration-300 flex-shrink-0 ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 sm:w-7 sm:h-7 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`} />
              ) : (
                <Menu className={`w-6 h-6 sm:w-7 sm:h-7 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-xl overflow-hidden"
      >
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <nav className="flex flex-col space-y-2 sm:space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg hover:bg-blue-50 text-sm sm:text-base"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
              <a
                href={`https://wa.me/${site.whatsappE164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg transition-all duration-300 w-full text-center flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
                <span>Connect Now</span>
              </a>
              <button onClick={onContactClick} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg transition-all duration-300 w-full text-center block text-sm sm:text-base">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;