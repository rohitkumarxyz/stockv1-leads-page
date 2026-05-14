import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  BarChart3,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';
import { site } from '../config/site';

const About = () => {
  const stats = [
    { number: '2K+', label: 'Happy Clients', icon: Users },
    { number: '10K+', label: 'Hours of Research', icon: Target },
    { number: '8+', label: 'Years Experience', icon: Award },
    { number: '1500+', label: 'Trades Executed', icon: BarChart3 }
  ];
  const features = [
    {
      icon: TrendingUp,
      title: 'Expert Market Analysis',
      description: 'Our team of experienced analysts provides comprehensive market research and insights.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk management strategies to protect your investments and maximize returns.'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Get instant market updates, signals, and expert advice through multiple channels.'
    },
    {
      icon: Target,
      title: 'SEBI Registered',
      description: `We operate as a SEBI Registered Research Analyst (${site.sebiRegistrationNo}) with BSE Enlistment No. ${site.bseEnlistmentNo}, ensuring transparent, ethical, and fully compliant research services.`
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
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6"
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">WHO WE ARE</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              style={{ lineHeight: '1.1' }}
            >
              Expert Market
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500" style={{ lineHeight: '1.1' }}>
                Analysis
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            >
              Trade Stock Research Services is a leading provider of comprehensive 
              stock market recommendation services. We specialize in delivering research-backed 
              insights and expert market analysis to help investors make informed decisions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Our team of experienced analysts and market experts brings years of industry 
              knowledge to provide you with accurate market predictions, risk management 
              strategies, and personalized investment advice across all segments including 
              stock market, stock trading, bank nifty options, and more.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Live Market Analysis</h4>
                    <p className="text-sm text-gray-600">Real-time insights</p>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">NIFTY 50</span>
                    <span className="text-sm font-bold text-green-600">+2.5%</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-end justify-between p-4">
                    <div className="w-2 h-16 bg-green-500 rounded"></div>
                    <div className="w-2 h-20 bg-green-500 rounded"></div>
                    <div className="w-2 h-12 bg-green-500 rounded"></div>
                    <div className="w-2 h-24 bg-green-500 rounded"></div>
                    <div className="w-2 h-18 bg-green-500 rounded"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>9:30 AM</span>
                    <span>12:00 PM</span>
                    <span>3:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
