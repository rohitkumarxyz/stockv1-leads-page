import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Activity,
  CreditCard,
} from 'lucide-react';
import { site } from '../config/site';

interface PackagesProps {
  onContactClick: () => void;
}

type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  paymentUrl: string;
};

type ServiceTab = {
  id: 'equity' | 'fno' | 'commodity';
  label: string;
  shortLabel: string;
  icon: typeof TrendingUp;
  color: string;
  borderColor: string;
  ringColor: string;
  features: string[];
  plans: Plan[];
};

const Packages = ({ onContactClick }: PackagesProps) => {
  const [activeTab, setActiveTab] = useState<ServiceTab['id']>('equity');

  const serviceTabs: ServiceTab[] = [
    {
      id: 'equity',
      label: 'Equity Cash Services',
      shortLabel: 'Equity Cash',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      ringColor: 'ring-blue-500',
      features: [
        'Daily research-based equity calls',
        'Real-time entry & exit alerts',
        'NSE & BSE listed shares',
        'WhatsApp & Call support',
        'Risk management guidance',
      ],
      plans: [
        {
          name: 'Weekly',
          price: '₹2,999',
          paymentUrl: 'https://superprofile.bio/vp/equity-weekly-service',
        },
        {
          name: 'Monthly',
          price: '₹12,800',
          paymentUrl: 'https://superprofile.bio/vp/equity-monthly-service',
        },
        {
          name: 'Quarterly',
          price: '₹32,000',
          paymentUrl: 'https://superprofile.bio/vp/equity-quarterly-service',
        },
        {
          name: 'Half Yearly',
          price: '₹48,000',
          paymentUrl: 'https://superprofile.bio/vp/equity-half-yearly-service',
        },
        {
          name: 'Yearly',
          price: '₹64,000',
          popular: true,
          paymentUrl: 'https://superprofile.bio/vp/equity-yearly-service',
        },
      ],
    },
    {
      id: 'fno',
      label: 'Futures & Options Services',
      shortLabel: 'F & O',
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-200',
      ringColor: 'ring-green-500',
      features: [
        'Nifty & Bank Nifty F&O calls',
        'Real-time strategy alerts',
        'Risk-managed positional setups',
        'WhatsApp & Call support',
        'Expert market analysis',
      ],
      plans: [
        {
          name: 'Weekly',
          price: '₹2,999',
          paymentUrl: 'https://superprofile.bio/vp/futures---options-weekly-service',
        },
        {
          name: 'Monthly',
          price: '₹15,000',
          paymentUrl: 'https://superprofile.bio/vp/futures---options-monthly-service',
        },
        {
          name: 'Quarterly',
          price: '₹40,000',
          paymentUrl: 'https://superprofile.bio/vp/futures---options-quarterly-service',
        },
        {
          name: 'Half Yearly',
          price: '₹75,000',
          paymentUrl: 'https://superprofile.bio/vp/futures---options-half-yearly-services',
        },
        {
          name: 'Yearly',
          price: '₹1,20,000',
          popular: true,
          paymentUrl: 'https://superprofile.bio/vp/futures---options-yearly-service',
        },
      ],
    },
    {
      id: 'commodity',
      label: 'Commodity Services',
      shortLabel: 'Commodity',
      icon: Activity,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-200',
      ringColor: 'ring-purple-500',
      features: [
        'MCX commodity research calls',
        'Real-time entry & exit alerts',
        'Trend identification on Crude, Gold, Silver & more',
        'WhatsApp & Call support',
        'Risk management guidance',
      ],
      plans: [
        {
          name: 'Weekly',
          price: '₹3,499',
          paymentUrl: 'https://superprofile.bio/vp/commodity-weekly-service',
        },
        {
          name: 'Monthly',
          price: '₹16,000',
          paymentUrl: 'https://superprofile.bio/vp/commodity-monthly-service',
        },
        {
          name: 'Quarterly',
          price: '₹45,000',
          paymentUrl: 'https://superprofile.bio/vp/commodity-quarterly-service',
        },
        {
          name: 'Half Yearly',
          price: '₹80,000',
          paymentUrl: 'https://superprofile.bio/vp/commodity-half-yearly-service',
        },
        {
          name: 'Yearly',
          price: '₹1,25,000',
          popular: true,
          paymentUrl: 'https://superprofile.bio/vp/commodity-yearly-service',
        },
      ],
    },
  ];

  const activeService = serviceTabs.find((tab) => tab.id === activeTab) ?? serviceTabs[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="packages" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Our Packages</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 descender-safe"
            style={{ lineHeight: '1.2', paddingBottom: '0.1em' }}
          >
            Research-Based
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 pb-1">
              Service Packages
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed descender-safe"
            style={{ lineHeight: '1.6', paddingBottom: '0.1em' }}
          >
            Choose the perfect plan for your trading goals across Equity Cash, F&amp;O, and Commodity
            segments. All charges are exclusive of GST.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12"
        >
          {serviceTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 border-2 ${
                  isActive
                    ? `bg-gradient-to-r ${tab.color} text-white border-transparent shadow-lg`
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
                aria-pressed={isActive}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Plan Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6"
          >
            {activeService.plans.map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -8 }}
                className={`relative min-w-0 w-full bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  plan.popular
                    ? `${activeService.borderColor} ring-2 ring-offset-2 ${activeService.ringColor}`
                    : 'border-gray-100'
                } flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`bg-gradient-to-r ${activeService.color} text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap`}
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${activeService.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <activeService.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 descender-safe" style={{ lineHeight: '1.3', paddingBottom: '0.05em' }}>
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">
                    {activeService.shortLabel}
                  </p>

                  <div className="mb-1">
                    <span className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 ml-1">/-</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-500">+ GST</p>
                </div>

                <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 flex-1">
                  {activeService.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto w-full min-w-0 flex flex-col gap-2 sm:gap-2.5">
                  <a
                    href={plan.paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full min-w-0 max-w-full box-border items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-gradient-to-r ${activeService.color} px-3 py-2.5 sm:px-4 sm:py-3 min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:opacity-95 active:opacity-90 touch-manipulation`}
                  >
                    <CreditCard className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" aria-hidden />
                    <span className="text-center leading-tight">Pay &amp; subscribe</span>
                  </a>
                  <a
                    href={`https://wa.me/${site.whatsappE164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full min-w-0 max-w-full box-border items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-green-600 px-3 py-2.5 sm:px-4 sm:py-3 min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-green-700 active:bg-green-800 touch-manipulation"
                  >
                    <img src="/whatsapp.png" alt="" className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <span className="text-center leading-tight">Connect Now</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GST Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8"
        >
          <strong>Note:</strong> Mentioned service / product charges are exclusive of GST.
        </motion.p>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-4 sm:p-6 md:p-8 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 descender-safe" style={{ lineHeight: '1.2', paddingBottom: '0.1em' }}>
              Research-Based Recommendations Across All Segments
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed descender-safe" style={{ lineHeight: '1.6', paddingBottom: '0.1em' }}>
              Get research-driven intraday and positional recommendations with our expert analysis
              and precision-based insights. Join the growing community of traders who trust our
              research services.
            </p>
            <motion.button
              onClick={onContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto text-xs sm:text-sm md:text-base"
            >
              <span>Enquiry Now</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
