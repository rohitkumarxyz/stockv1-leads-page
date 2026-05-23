// Form submission data interface
export interface FormSubmissionData {
  fullName: string;
  email: string;
  mobile: string;
  state: string;
  segment: string;
  privacy: boolean;
}

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzko9O5B8T668-c2ZtTC0GVyEiF-SL539VZhDh-6luW0r6N635vwcbUYqsGSyCuRnzO/exec';

export const sendFormSubmissionEmail = async (formData: FormSubmissionData) => {
  try {
    if (!formData.fullName || !formData.email || !formData.mobile || !formData.state) {
      throw new Error('Missing required fields: fullName, email, mobile, state');
    }

    if (!formData.privacy) {
      throw new Error('Privacy policy must be accepted');
    }

    const payload = {
      name: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.mobile.trim(),
      city: formData.state.trim(),
      segment: formData.segment || '',
      privacy: formData.privacy ? 'Yes' : 'No',
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error submitting lead:', error);
    return {
      success: false,
      error: error.message || 'An unexpected error occurred',
    };
  }
};
