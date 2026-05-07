export interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  state: string;
  segment: string;
  privacy: boolean;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  mobile?: string;
  state?: string;
  segment?: string;
  privacy?: string;
}

export const validateForm = (formData: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Full Name validation
  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
    errors.fullName = 'Full name can only contain letters and spaces';
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  // Mobile validation
  if (!formData.mobile.trim()) {
    errors.mobile = 'Mobile number is required';
  } else if (!/^\+91[6-9]\d{9}$/.test(formData.mobile.trim())) {
    errors.mobile = 'Please enter a valid 10-digit mobile number';
  }

  // City validation
  if (!formData.state.trim()) {
    errors.state = 'Please select your city';
  }

  // Segment validation (optional)
  if (formData.segment && formData.segment.trim() === '') {
    errors.segment = 'Please select a valid trading segment';
  }

  // Privacy policy validation
  if (!formData.privacy) {
    errors.privacy = 'You must agree to the Privacy Policy and Terms & Conditions';
  }

  return errors;
};

export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};

export const formatFormData = (formData: FormData) => {
  return {
    fullName: formData.fullName.trim(),
    email: formData.email.trim().toLowerCase(),
    mobile: formData.mobile.trim(),
    city: formData.state.trim(),
    segment: formData.segment.trim() || 'Not specified',
    privacy: formData.privacy,
    submittedAt: new Date().toISOString(),
  };
};


