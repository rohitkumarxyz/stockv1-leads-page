import axios from 'axios';

// Form submission data interface
export interface FormSubmissionData {
  fullName: string;
  email: string;
  mobile: string;
  state: string;
  segment: string;
  investment: string;
  privacy: boolean;
}

// Backend API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// Send form submission via backend API
export const sendFormSubmissionEmail = async (formData: FormSubmissionData) => {
  try {
    console.log('\n📧 Submitting lead via backend API...');
    console.log('API URL:', `${API_BASE_URL}/api/submit-lead`);
    console.log('Form Data:', formData);

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.mobile || !formData.state) {
      throw new Error('Missing required fields: fullName, email, mobile, state');
    }

    if (!formData.privacy) {
      throw new Error('Privacy policy must be accepted');
    }

    // Prepare data for API
    const apiData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      mobile: formData.mobile.trim(),
      state: formData.state.trim(),
      segment: formData.segment || '',
      investment: formData.investment || '',
      privacy: Boolean(formData.privacy)
    };

    // Make API call to backend
    const response = await axios.post(`${API_BASE_URL}/api/submit-lead`, apiData, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // 10 second timeout
    });

    console.log('✅ Lead submitted successfully via backend API:', response.data);
    return { 
      success: true, 
      messageId: response.data.messageId,
      message: response.data.message 
    };

  } catch (error: any) {
    console.error('❌ Error submitting lead via backend API:', error);
    
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.error || 'Server error occurred';
      return { 
        success: false, 
        error: errorMessage,
        status: error.response.status 
      };
    } else if (error.request) {
      // Network error - backend not reachable
      return { 
        success: false, 
        error: 'Unable to connect to server. Please check your internet connection and try again.' 
      };
    } else {
      // Other error
      return { 
        success: false, 
        error: error.message || 'An unexpected error occurred' 
      };
    }
  }
};

// Note: User confirmation emails are disabled - only owner notifications are sent
