import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Users,
  Clock
} from 'lucide-react';

interface ThankYouProps {
  onBackToHome: () => void;
}

const ThankYou = ({ onBackToHome }: ThankYouProps) => {
  const features = [
    { icon: TrendingUp, text: 'Expert Market Analysis' },
    { icon: Shield, text: 'SEBI Registered Advisory' },
    { icon: Users, text: '15K+ Happy Clients' },
    { icon: Star, text: '5X Growth Potential' }
  ];

  const nextSteps = [
    {
      icon: Clock,
      title: 'Within 24 Hours',
      description: 'Our expert will analyze your requirements and contact you'
    },
    {
      icon: MessageCircle,
      title: 'Personal Consultation',
      description: 'Get personalized investment strategy based on your goals'
    },
    {
      icon: TrendingUp,
      title: 'Start Trading',
      description: 'Begin your journey with our proven strategies'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-3 sm:px-4 py-4 sm:py-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto text-center w-full">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-white/20"
        >
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4"
          >
            Thank You! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
          >
            Your form has been submitted successfully! Our investment expert will contact you within 24 hours.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-2 sm:p-3 md:p-4 border border-blue-200"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-6 sm:mb-8"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">What happens next?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">{step.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-blue-200"
          >
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Need immediate assistance?</h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="https://wa.me/8527506837"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>WhatsApp Now</span>
              </motion.a>
              <motion.a
                href="tel:8527506837"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Call Now</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <motion.button
              onClick={onBackToHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg text-sm sm:text-base"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.a
              href="#packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-gray-700 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>View Packages</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="text-white/80 text-xs sm:text-sm mt-6 sm:mt-8"
        >
          We'll be in touch soon! 📧
        </motion.p>
      </div>
    </div>
  );
};

export default ThankYou;
