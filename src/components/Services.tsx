import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  Activity, 
  ArrowRight,
  Target,
  Shield,
  Zap,
  CheckCircle,
  Award,
  MessageCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Intraday Trading Advisory',
      description: 'Get accurate intraday trading calls for Nifty, Bank Nifty, and stocks with real-time market analysis and expert insights for maximum profit potential.',
      features: ['Real-time signals', 'Risk management', 'Market analysis', 'Expert support'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: BarChart3,
      title: 'Futures & Options Advisory',
      description: 'Professional F&O trading strategies for Indian markets with comprehensive research and risk management techniques for Nifty & Bank Nifty options.',
      features: ['Options strategies', 'Futures guidance', 'Risk analysis', 'Portfolio optimization'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: Activity,
      title: 'Swing Trading Advisory',
      description: 'Medium-term trading strategies with detailed technical analysis for Indian stocks and market trend predictions for better returns.',
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
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200 rounded-full px-6 py-3 mb-8"
          >
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-600">Our Services</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8"
          >
            Professional
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Trading Services
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We provide comprehensive stock market advisory services for Indian markets with SEBI registered strategies 
            and expert market analysis to help you make informed trading decisions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6 sm:mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-2 sm:space-x-3"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <motion.a
                    href="https://wa.me/9211034704"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect Now</span>
                  </motion.a>
                  <motion.a
                    href="home"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
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
          className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Why Choose TradeStock?</h3>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              We combine cutting-edge technology with expert analysis to deliver 
              the most accurate investment advice for Indian stock markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">SEBI Registered</h4>
              <p className="text-blue-100 text-sm sm:text-base">All strategies are SEBI registered and compliant with Indian regulations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Real-time Updates</h4>
              <p className="text-blue-100 text-sm sm:text-base">Get instant market updates and trading signals via WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">5X Growth Potential</h4>
              <p className="text-blue-100 text-sm sm:text-base">Proven track record of successful trades in Indian markets</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;