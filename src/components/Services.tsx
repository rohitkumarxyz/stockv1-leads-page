import { motion } from 'framer-motion';
import { site } from '../config/site';
import { 
  TrendingUp, 
  BarChart3, 
  Activity, 
  ArrowRight,
  Shield,
  Zap,
  CheckCircle,
  Award
} from 'lucide-react';

interface ServicesProps {
  onContactClick: () => void;
}

const Services = ({ onContactClick }: ServicesProps) => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Intraday Trading Service',
      description: 'Get accurate intraday trading calls for Nifty, Bank Nifty, and stocks with real-time market analysis and expert insights for maximum profit potential.',
      features: ['Real-time signals', 'Risk management', 'Market analysis', 'Expert support'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: BarChart3,
      title: 'Futures & Options Services',
      description: 'Professional F&O trading strategies for Indian markets with comprehensive research and risk management techniques for Nifty & Bank Nifty options.',
      features: ['Options strategies', 'Futures guidance', 'Risk analysis', 'Portfolio optimization'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: Activity,
      title: 'Commodity Trading Services',
      description: 'Research-driven commodity trading recommendations across MCX with detailed technical analysis and market trend insights for better returns.',
      features: ['Technical analysis', 'Trend identification', 'Entry/exit signals', 'Market research'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    }
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
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8"
          >
            Professional
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Trading Services
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We provide comprehensive stock market research services for Indian markets with SEBI registered strategies 
            and expert market analysis to help you make informed trading decisions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-4 sm:mb-6 md:mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-2 sm:space-x-3"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <motion.a
                    href={`https://wa.me/${site.whatsappE164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base"
                  >
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Connect Now</span>
                  </motion.a>
                  <motion.button
                    onClick={onContactClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-bold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg text-xs sm:text-sm md:text-base`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Why Choose TradeStock?</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              We combine cutting-edge technology with expert analysis to deliver 
              the most accurate trading advice for Indian stock markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3">SEBI Registered</h4>
              <p className="text-blue-100 text-xs sm:text-sm md:text-base">All strategies are SEBI registered and compliant with Indian regulations</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3">Real-time Updates</h4>
              <p className="text-blue-100 text-xs sm:text-sm md:text-base">Get instant market updates and trading signals via WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3">Research Based Analysis</h4>
              <p className="text-blue-100 text-xs sm:text-sm md:text-base">In-depth research-driven analysis powering every call we share</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;