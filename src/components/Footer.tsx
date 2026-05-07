import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Shield,
  Target,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

interface FooterProps {
  onContactClick?: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact', isContact: true },
    { name: 'Privacy Policy', href: '/privacy', isRoute: true }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                TradeStock
              </h1>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              TradeStock is India's leading provider of comprehensive 
              stock market recommendation services. We specialize in delivering SEBI registered 
              research and expert market analysis to help Indian investors make informed decisions 
              with our proven track record of success.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isContact ? (
                    <button
                      onClick={onContactClick}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </button>
                  ) : link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Have queries?</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    1016, Gali No. 2, Bhoor Colony, Sector 29, Faridabad, Haryana, 121008
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:8527506837"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  +91 8527506837
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:chahatmangla.ra@gmail.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  chahatmangla.ra@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={onContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">SEBI Registered</h4>
              <p className="text-gray-400 text-sm">All strategies are SEBI registered and compliant</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Optimized Risk-Reward Ratio</h4>
              <p className="text-gray-400 text-sm">Proven track record of successful trades</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Expert Support</h4>
              <p className="text-gray-400 text-sm">24/7 expert guidance and support</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              <p className="mb-2">
                <strong>Disclaimer:</strong> Equity Investments and Trading are subjected to market risk. 
                Please read all the schemes related documents carefully before investing. Consult your 
                financial advisor before execution of any trade.
              </p>
              <p>
                Copyright 2025, TradeStock Research Services, All Rights Reserved. | 
                Design And Developed by Webzo Technologies.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 2K+ Indian Traders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;