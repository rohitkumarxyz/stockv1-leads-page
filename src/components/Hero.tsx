import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Users,
  Target
} from 'lucide-react';
import PhoneInput from './PhoneInput';
import CitySelect from './CitySelect';
import { sendFormSubmissionEmail } from '../services/emailService';
import type { FormSubmissionData } from '../services/emailService';
import { testEmailConfiguration } from '../utils/emailTest';

interface HeroProps {
  onFormSuccess: () => void;
  onContactClick: () => void;
}

const Hero = ({ onFormSuccess, onContactClick }: HeroProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: '',
    segment: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Test email configuration first
    testEmailConfiguration();

    try {
      // Validate required fields
      if (!formData.fullName || !formData.email || !formData.mobile || !formData.state) {
        throw new Error('Please fill in all required fields');
      }

      if (!formData.privacy) {
        throw new Error('Please accept the Privacy Policy and Terms & Conditions');
      }

      // Send email only to owner (rohitsharma001914@gmail.com)
      const ownerEmailResult = await sendFormSubmissionEmail(formData as FormSubmissionData);

      if (ownerEmailResult.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          state: '',
          segment: '',
          privacy: false
        });
        // Navigate to thank you page after a short delay
        setTimeout(() => {
          onFormSuccess();
        }, 2000);
      } else {
        throw new Error('Failed to send emails. Please try again.');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { icon: Users, value: '2K+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '10K+', label: 'Hours of Research' },
    { icon: Award, value: '8+', label: 'Years Experience' },
    { icon: Target, value: '1500+', label: 'Trades Executed' }
  ];

  return (
    <section id="home" className="hero-section relative min-h-screen  flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 sm:pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8"
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">Soch kar . Samjh kar . Nivesh kar</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight descender-safe"
              style={{ lineHeight: '1.2', wordSpacing: '0.05em', paddingBottom: '0.1em' }}
            >
              <span className="block text-white mb-1 sm:mb-2 pb-1">Research Based</span>
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent pb-1">
                Stock Tips & Recommendations
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-lg descender-safe"
              style={{ lineHeight: '1.6', paddingBottom: '0.1em' }}
            >
              Expert Equity, F&O, and Commodity tips with proven accuracy. Over 2000+ subscribers
              trust us for daily intraday & positional calls.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
            >
              {[
                { icon: TrendingUp, text: 'Research Based Calls' },
                { icon: Shield, text: 'SEBI Registered' },
                { icon: 'whatsapp', text: 'WhatsApp Support' },
                { icon: BarChart3, text: 'Real Time Alerts' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 md:p-4 border border-white/20"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {typeof benefit.icon === 'string' ? (
                      <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    )}
                  </div>
                  <span className="font-semibold text-white text-sm sm:text-base descender-safe" style={{ lineHeight: '1.4', paddingBottom: '0.05em' }}>{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12"
            >
              <motion.a
                href="https://wa.me/8527506837"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl text-sm sm:text-base"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Connect Now</span>
              </motion.a>
              <motion.button
                onClick={onContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-base sm:text-lg md:text-2xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-blue-200 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-6 shadow-2xl border border-white/20 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none">
              {/* Form Header */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center mb-8"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <span className="text-base sm:text-lg md:text-xl">📈</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1.5 sm:mb-2">
                  Get Expert Stock Market Advice
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  Join 2K+ successful Indian traders
                </p>
                <div className="flex items-center justify-center space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                  <div className="flex items-center space-x-0.5 sm:space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">4.9/5 Rating</span>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 gap-2.5 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-xs sm:text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-xs sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Mobile *
                  </label>
                  <PhoneInput
                    value={formData.mobile}
                    onChange={(value) => setFormData(prev => ({ ...prev, mobile: value }))}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Your City *
                  </label>
                  <CitySelect
                    value={formData.state}
                    onChange={(value) => setFormData(prev => ({ ...prev, state: value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Trading Segment
                  </label>
                  <select
                    name="segment"
                    value={formData.segment}
                    onChange={handleInputChange}
                    className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-xs sm:text-sm"
                  >
                    <option value="">Select Segment</option>
                    <option value="equity">Equity</option>
                    <option value="futures">Futures</option>
                    <option value="options">Options</option>
                    <option value="commodity">Commodity</option>
                  </select>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 flex-shrink-0"
                  />
                  <label className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    I agree to the <span className="text-blue-600 font-semibold">Privacy Policy</span> and <span className="text-blue-600 font-semibold">Terms & Conditions</span>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full font-bold py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl text-xs sm:text-sm ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-semibold">Thank you for your submission!</p>
                      <p className="text-green-600 text-sm">Our investment expert Rohit will contact you within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 text-red-600">⚠️</div>
                    <div>
                      <p className="text-red-800 font-semibold">Submission failed</p>
                      <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>SEBI Registered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>NSE & BSE Listed Shares</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;