// Email configuration
export const emailConfig = {
  // Owner email where form submissions will be sent
  ownerEmail: 'help.tradestock@gmail.com',
  ownerName: 'Chhahat Agarwal',
  
  // Brevo API configuration
  brevoApiUrl: 'https://api.brevo.com/v3/smtp/email',
  
  // Default sender information (can be overridden by environment variables)
  defaultSender: {
    name: 'StockGo Lead Form',
    email: 'noreply@stockgo.com'
  }
};

// Environment variables (with fallbacks)
export const getEnvVar = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] || fallback;
};

// Get sender information from environment or use defaults
export const getSenderInfo = () => ({
  name: getEnvVar('VITE_BREVO_SENDER_NAME', emailConfig.defaultSender.name),
  email: getEnvVar('VITE_BREVO_SENDER_EMAIL', emailConfig.defaultSender.email)
});

// Check if we're in development mode
export const isDevelopmentMode = (): boolean => {
  // If VITE_DEV_MODE is explicitly set to false, use production mode
  if (getEnvVar('VITE_DEV_MODE') === 'false') {
    return false;
  }
  
  // Otherwise, check other conditions
  return import.meta.env.MODE === 'development' || 
         !getEnvVar('VITE_BREVO_API_KEY') || 
         getEnvVar('VITE_BREVO_API_KEY') === 'your_brevo_api_key_here' ||
         getEnvVar('VITE_DEV_MODE') === 'true';
};

