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
  Instagram,
} from 'lucide-react';
import { site } from '../config/site';

interface FooterProps {
  onContactClick?: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const footerLinkClass =
    'text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{site.brandName}</h1>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              {site.brandName} is India&apos;s leading provider of comprehensive stock market recommendation services. We
              specialize in delivering SEBI registered research and expert market analysis to help Indian investors make
              informed decisions with our proven track record of success.
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

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Services &amp; packages</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#home" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/#services" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="/#packages" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Research packages</span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onContactClick}
                  className={`${footerLinkClass} text-left w-full`}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Contact Us</span>
                </button>
              </li>
              <li>
                <Link to="/compliance" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Compliance</span>
                </Link>
              </li>
              <li>
                <Link to="/disclosures" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Disclosures</span>
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Disclaimer</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className={footerLinkClass}>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Terms &amp; risk disclosure</span>
                </Link>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-6 mt-10">Have queries?</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{site.addressLine}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href={`tel:${site.salesPhone}`} className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  <span className="text-gray-500 text-xs block sm:inline sm:mr-1">Sales</span>
                  {site.salesPhoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 break-all"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <motion.button
              type="button"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-3">Principal officer</h4>
              <p>
                <strong className="text-gray-200">Name:</strong> {site.principalName}
              </p>
              <p>
                <strong className="text-gray-200">Email:</strong>{' '}
                <a href={`mailto:${site.email}`} className="hover:text-primary-400">
                  {site.email}
                </a>
              </p>
              <p>
                <strong className="text-gray-200">Phone (sales):</strong> {site.salesPhoneDisplay}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Compliance officer</h4>
              <p>
                <strong className="text-gray-200">Name:</strong> {site.complianceOfficerName}
              </p>
              <p>
                <strong className="text-gray-200">Email:</strong>{' '}
                <a href={`mailto:${site.email}`} className="hover:text-primary-400">
                  {site.email}
                </a>
              </p>
              <p>
                <strong className="text-gray-200">Phone (sales):</strong> {site.salesPhoneDisplay}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-gray-800 pt-10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">SEBI registered</h4>
              <p className="text-gray-400 text-sm">RA registration no. {site.sebiRegistrationNo}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">BSE enlistment</h4>
              <p className="text-gray-400 text-sm">BSE Enlistment No. {site.bseEnlistmentNo}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Expert support</h4>
              <p className="text-gray-400 text-sm">Research and assistance during market hours</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              <p className="mb-2">
                <strong>Disclaimer:</strong> Equity investments and trading are subject to market risk. Please read all
                scheme-related documents carefully before investing. Consult your financial advisor before execution of
                any trade.
              </p>
              <p>
                Copyright {new Date().getFullYear()}, {site.companyLegalName}. All rights reserved. | Design and
                developed by Webzo Technologies.
              </p>
              <p className="mt-2 text-xs text-gray-500">
                SEBI Registered Research Analyst | Registration No: {site.sebiRegistrationNo} | BSE Enlistment No.:{' '}
                {site.bseEnlistmentNo}
              </p>
            </div>

            <div className="flex items-center space-x-4 flex-shrink-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 2K+ Indian traders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
