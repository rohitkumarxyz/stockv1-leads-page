// Email configuration test utility
import { emailConfig, getEnvVar, getSenderInfo, isDevelopmentMode } from '../config/emailConfig';

export const testEmailConfiguration = () => {
  console.log('\n🔧 Email Configuration Test:');
  console.log('================================');
  
  // Check environment variables
  console.log('Environment Variables:');
  console.log('- VITE_BREVO_API_KEY:', getEnvVar('VITE_BREVO_API_KEY') ? '✅ Set' : '❌ Missing');
  console.log('- VITE_BREVO_SENDER_EMAIL:', getEnvVar('VITE_BREVO_SENDER_EMAIL') || '❌ Missing');
  console.log('- VITE_BREVO_SENDER_NAME:', getEnvVar('VITE_BREVO_SENDER_NAME') || '❌ Missing');
  console.log('- VITE_OWNER_EMAIL:', getEnvVar('VITE_OWNER_EMAIL') || '❌ Missing');
  console.log('- VITE_DEV_MODE:', getEnvVar('VITE_DEV_MODE') || 'Not set');
  
  // Check configuration
  console.log('\nConfiguration:');
  console.log('- Owner Email:', emailConfig.ownerEmail);
  console.log('- Owner Name:', emailConfig.ownerName);
  console.log('- Brevo API URL:', emailConfig.brevoApiUrl);
  
  // Check sender info
  const senderInfo = getSenderInfo();
  console.log('\nSender Information:');
  console.log('- Name:', senderInfo.name);
  console.log('- Email:', senderInfo.email);
  
  // Check mode
  console.log('\nMode:');
  console.log('- Development Mode:', isDevelopmentMode() ? '✅ Enabled' : '❌ Disabled');
  console.log('- Current Mode:', import.meta.env.MODE);
  
  console.log('\n================================\n');
  
  return {
    hasApiKey: !!getEnvVar('VITE_BREVO_API_KEY'),
    hasSenderEmail: !!getEnvVar('VITE_BREVO_SENDER_EMAIL'),
    isDevMode: isDevelopmentMode(),
    senderInfo,
    ownerEmail: emailConfig.ownerEmail
  };
};
