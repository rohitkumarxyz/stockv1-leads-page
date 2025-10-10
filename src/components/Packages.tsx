import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Target,
  Zap,
  HandCoins,
  MessageCircle
} from 'lucide-react';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(1);

  const packages = [
    {
      id: 1,
      name: 'Welcome Package',
      price: '₹ 25k + GST',
      originalPrice: '₹ 50k',
      discount: '50% OFF',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      features: [
        'Capital 50k min to 1 Lakh',
        'Potential growth trading in all segments',
        'Proper research and support',
        'WhatsApp & Call support',
        'Risk management guidance'
      ],
      popular: false,
      icon: Star
    },
    {
      id: 2,
      name: 'Silver Package',
      price: '₹ 50K + GST',
      originalPrice: '₹ 100k',
      discount: '50% OFF',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'from-gray-50 to-gray-100',
      borderColor: 'border-gray-200',
      features: [
        'Capital minimum 1 lakh required',
        'Potential growth trading',
        'Proper research and support',
        'Priority support',
        'Advanced analytics'
      ],
      popular: false,
      icon: Shield
    },
    {
      id: 3,
      name: 'Golden Package',
      price: '₹ 1 Lakh + GST',
      originalPrice: '₹ 2 Lakh',
      discount: '50% OFF',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-200',
      features: [
        'Minimum 3 lakh capital required',
        'Return 2.5 lakh to 3 lakh',
        'Potential growth trading',
        'Personal portfolio manager',
        'Exclusive market insights'
      ],
      popular: true,
      icon: Target
    },
    {
      id: 4,
      name: 'Diamond Package',
      price: '₹ 5 Lakh + GST',
      originalPrice: '₹ 10 Lakh',
      discount: '50% OFF',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      features: [
        'Minimum 10 lakh capital required',
        'Return 20 to 25 lakh return',
        'Potential growth trading in all segments',
        'Dedicated relationship manager',
        'Custom trading strategies'
      ],
      popular: false,
      icon: Zap
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
    <section id="packages" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
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
            Expert Market
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 pb-1">
              Analysis
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed descender-safe"
            style={{ lineHeight: '1.6', paddingBottom: '0.1em' }}
          >
            Choose the perfect package that suits your investment goals and capital requirements. 
            All packages come with our signature "Pay After Profit" guarantee.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                pkg.popular ? 'border-primary-500 lg:scale-105' : pkg.borderColor
              } ${selectedPackage === pkg.id ? 'ring-2 ring-primary-500' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-3 sm:mb-4 md:mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4`}
                >
                  <pkg.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2 descender-safe" style={{ lineHeight: '1.3', paddingBottom: '0.05em' }}>{pkg.name}</h3>
                
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-col items-center justify-center space-y-1 mb-1.5 sm:mb-2">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <span className="text-xs sm:text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                      <span className="bg-green-100 text-green-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold">
                        {pkg.discount}
                      </span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${pkg.color} text-white font-semibold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base`}
                >
                  <HandCoins className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span>Pay After Profit</span>
                </motion.button>
              </div>

              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-xs sm:text-sm descender-safe" style={{ lineHeight: '1.4', paddingBottom: '0.05em' }}>{feature}</span>
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
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Connect Now</span>
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base"
                >
                  <span>Enquiry Now</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
              Potential Growth Trading Advisory in all Segments
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed descender-safe" style={{ lineHeight: '1.6', paddingBottom: '0.1em' }}>
              Get Research-Driven Intraday Advisory Strategies with our expert analysis and Precision-Based Insights. 
              Join thousands of successful traders who trust our advisory services.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto text-xs sm:text-sm md:text-base"
            >
              <span>Enquiry Now</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
