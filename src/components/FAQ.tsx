import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  CheckCircle, 
  Target,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import PhoneInput from './PhoneInput';
import CitySelect from './CitySelect';
import { sendFormSubmissionEmail } from '../services/emailService';
import type { FormSubmissionData } from '../services/emailService';
import { testEmailConfiguration } from '../utils/emailTest';
import { site } from '../config/site';

interface FAQProps {
  onFormSuccess: () => void;
  onContactClick: () => void;
}

const FAQ = ({ onFormSuccess, onContactClick }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState(0);
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

  const faqs = [
    {
      question: 'What Are Trade Stock Research Services?',
      answer: 'Trade Stock Research Services is a comprehensive platform that provides:',
      features: [
        'Financial Planning - Personalized investment strategies based on your financial goals',
        'Diversification - Portfolio optimization across different asset classes',
        'Risk Profiling - Assessment of your risk tolerance and investment capacity',
        'Rebalancing - Regular portfolio adjustments based on market conditions',
        'Easy to understand philosophy - Simple, transparent investment approach'
      ]
    },
    {
      question: 'Why Choose Trade Stock Research Services?',
      answer: 'We offer several advantages that make us the preferred choice:',
      features: [
        'SEBI Registered Research Analyst (INH000018577)',
        'Research-backed insights and market analysis',
        'Real-time updates and expert guidance',
        'Personalized support and risk management',
        'Transparent, GST-inclusive subscription pricing'
      ]
    },
    {
      question: 'Why should I hire Share Market Research services?',
      answer: 'Professional research services provide numerous benefits:',
      features: [
        'Expert market analysis and insights',
        'Risk management and portfolio optimization',
        'Time-saving research and analysis',
        'Access to professional trading strategies',
        'Emotional discipline and objective decision making'
      ]
    },
    {
      question: 'How do I get started with Trade Stock Research Services?',
      answer: 'Getting started is simple and quick:',
      features: [
        'Fill out the enquiry form or connect with us on WhatsApp',
        'Speak to our team to choose the segment that suits you',
        'Pick a subscription duration (Weekly, Monthly, Quarterly, Half Yearly or Yearly)',
        'Complete payment and receive onboarding details',
        'Start receiving research-based calls and alerts'
      ]
    },
    {
      question: 'How will I receive your research calls and alerts?',
      answer: 'We deliver our research through multiple convenient channels:',
      features: [
        'Real-time WhatsApp alerts for entry, exit and stop-loss',
        'Phone call support during market hours',
        'Email summaries and research reports',
        'Timely follow-up notifications on open positions'
      ]
    },
    {
      question: 'Are your services SEBI registered?',
      answer: 'Yes, we are fully SEBI compliant:',
      features: [
        'SEBI Registered Research Analyst (INH000018577)',
        'All research follows SEBI Research Analyst Regulations',
        'Transparent, ethical and fully compliant research services',
        'Mandatory risk disclosures with every recommendation'
      ]
    },
    {
      question: 'Can I cancel or change my subscription?',
      answer: 'Our subscription policy is flexible and transparent:',
      features: [
        'Choose any duration that suits you - Weekly to Yearly',
        'Upgrade to a different segment by contacting our team',
        'Renewals are not auto-charged - confirm with us each time',
        'All charges are exclusive of GST and disclosed upfront'
      ]
    },
    {
      question: 'What support do you provide?',
      answer: 'We offer comprehensive support including:',
      features: [
        'WhatsApp and phone support during market hours',
        'Real-time market updates and alerts',
        'Risk management guidance with every call',
        'Market analysis and research reports'
      ]
    }
  ];

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
        throw new Error('Please accept the Privacy Policy');
      }

      // Send email only to owner (rohitsharma001914@gmail.com)
      const ownerEmailResult = await sendFormSubmissionEmail(formData as FormSubmissionData);

      if (ownerEmailResult.success) {
        setSubmitStatus('success');
        // Navigate to thank you page after a short delay
        setTimeout(() => {
          onFormSuccess();
        }, 2000);
      } else {
        throw new Error('Failed to send email. Please try again.');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
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
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">FAQ</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Find Answers to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                Common Questions
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Trade Stock is a leading provider of intraday tips and stock market research services. 
              Here are answers to the most frequently asked questions about our services.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-primary-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 mb-4">{faq.answer}</p>
                          <ul className="space-y-2">
                            {faq.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 sticky top-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  <button onClick={onContactClick} className="text-primary-600 hover:text-primary-700 font-bold">
                    Enquiry Now To Grow Your Profit!!!
                  </button>
                </h3>
                <p className="text-gray-600">
                  Get personalized investment advice from our experts
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your City *
                    </label>
                    <CitySelect
                      value={formData.state}
                      onChange={(value) => setFormData(prev => ({ ...prev, state: value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Segment
                  </label>
                  <select
                    name="segment"
                    value={formData.segment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Segment</option>
                    <option value="equity">Equity</option>
                    <option value="futures">Futures</option>
                    <option value="options">Options</option>
                    <option value="commodity">Commodity</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label className="text-sm text-gray-700">
                    I Accept Privacy Policy
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Now</span>
                      <ArrowRight className="w-5 h-5" />
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

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <a href={`tel:${site.salesPhone}`} className="hover:text-primary-600">
                      {site.salesPhoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <a href={`mailto:${site.email}`} className="hover:text-primary-600 break-all">
                      {site.email}
                    </a>
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

export default FAQ;
