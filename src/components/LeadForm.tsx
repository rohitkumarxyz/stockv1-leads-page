import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  CheckCircle,
  Star,
  Shield
} from 'lucide-react';
import PhoneInput from './PhoneInput';
import CitySelect from './CitySelect';
import { sendFormSubmissionEmail } from '../services/emailService';
import type { FormSubmissionData } from '../services/emailService';
import { testEmailConfiguration } from '../utils/emailTest';

interface LeadFormProps {
  onFormSuccess: () => void;
}

export interface LeadFormRef {
  openForm: () => void;
}

const LeadForm = forwardRef<LeadFormRef, LeadFormProps>(({ onFormSuccess }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: '',
    segment: '',
    investment: '',
    privacy: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    openForm: () => setIsOpen(true)
  }));

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
    setSubmitError(null);

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
        setIsSubmitted(true);
        // Navigate to thank you page after a short delay
        setTimeout(() => {
          onFormSuccess();
        }, 2000);
      } else {
        throw new Error('Failed to send email. Please try again.');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitError(error.message || 'An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      {/* Floating CTA Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/9211034704"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:9211034704"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Phone className="w-6 h-6 text-white" />
        </motion.a>

        {/* Form Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Star className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl p-4 sm:p-6 max-w-sm w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-sm">👋</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Get Expert Advice
                    </h3>
                    <p className="text-xs text-gray-600">
                      Connect with our investment experts
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Success State */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Your enquiry has been submitted successfully. Our investment expert Rohit will contact you within 24 hours.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-800">
                      <strong>Next Steps:</strong> We'll analyze your requirements and provide personalized investment advice.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Error Message */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4"
                    >
                      <p className="text-red-800 text-sm">{submitError}</p>
                    </motion.div>
                  )}
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
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
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
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Segment
                    </label>
                    <select
                      name="segment"
                      value={formData.segment}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                    >
                      <option value="">Select Segment</option>
                      <option value="equity">Equity</option>
                      <option value="futures">Futures</option>
                      <option value="options">Options</option>
                      <option value="commodity">Commodity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Amount
                    </label>
                    <select
                      name="investment"
                      value={formData.investment}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm"
                    >
                      <option value="">Select Amount</option>
                      <option value="50k-1l">₹50K - ₹1L</option>
                      <option value="1l-5l">₹1L - ₹5L</option>
                      <option value="5l-10l">₹5L - ₹10L</option>
                      <option value="10l+">₹10L+</option>
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
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    type="submit"
                    disabled={isSubmitting}
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
              )}

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>SEBI Verified</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>5X Growth Potential</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

LeadForm.displayName = 'LeadForm';

export default LeadForm;
