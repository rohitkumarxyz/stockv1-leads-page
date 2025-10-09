import axios from 'axios';
import { emailConfig, getSenderInfo, isDevelopmentMode, getEnvVar } from '../config/emailConfig';

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

// Send form submission email to owner using Brevo API
export const sendFormSubmissionEmail = async (formData: FormSubmissionData) => {
  try {
    console.log('\n📧 Email Service Debug Info:');
    console.log('API Key exists:', !!getEnvVar('VITE_BREVO_API_KEY'));
    console.log('API Key (first 10 chars):', getEnvVar('VITE_BREVO_API_KEY').substring(0, 10) + '...');
    console.log('Sender Email:', getEnvVar('VITE_BREVO_SENDER_EMAIL'));
    console.log('Owner Email:', emailConfig.ownerEmail);
    console.log('VITE_DEV_MODE value:', getEnvVar('VITE_DEV_MODE'));
    console.log('Current MODE:', import.meta.env.MODE);
    console.log('Development Mode:', isDevelopmentMode());
    console.log('Form Data:', formData);

    // For development/testing - log form data to console instead of sending email
    if (isDevelopmentMode()) {
      console.log('\n📧 Form Submission Email (Development Mode):');
      console.log('Owner Email:', emailConfig.ownerEmail);
      console.log('Form Data:', formData);
      console.log('Timestamp:', new Date().toISOString());
      return { success: true, messageId: 'dev-mode' };
    }
    
    const senderInfo = getSenderInfo();
    const emailData = {
      sender: senderInfo,
      to: [
        {
          email: emailConfig.ownerEmail,
          name: emailConfig.ownerName
        }
      ],
      subject: `🔥 NEW LEAD: ${formData.fullName} - StockGo Form Submission`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Lead Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .form-data { background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0; }
            .field { margin: 15px 0; padding: 10px; background: #f8f9fa; border-radius: 5px; }
            .field-label { font-weight: bold; color: #495057; margin-bottom: 5px; }
            .field-value { color: #212529; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 NEW LEAD - IMMEDIATE ACTION REQUIRED</h1>
              <p>StockGo Investment Platform</p>
            </div>
            <div class="content">
              <div class="urgent">
                <strong>🔥 HOT LEAD ALERT:</strong> A potential client has submitted the form and is ready to invest! Contact them within 1 hour for best conversion rate.
              </div>
              
              <div class="form-data">
                <h3>📋 Lead Information</h3>
                
                <div class="field">
                  <div class="field-label">👤 Full Name:</div>
                  <div class="field-value">${formData.fullName}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">📧 Email:</div>
                  <div class="field-value"><a href="mailto:${formData.email}">${formData.email}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">📱 Mobile:</div>
                  <div class="field-value"><a href="tel:${formData.mobile}">${formData.mobile}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">🏙️ City:</div>
                  <div class="field-value">${formData.state}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">📊 Investment Segment:</div>
                  <div class="field-value">${formData.segment || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">💰 Investment Amount:</div>
                  <div class="field-value">${formData.investment || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">✅ Privacy Policy:</div>
                  <div class="field-value">${formData.privacy ? 'Accepted' : 'Not Accepted'}</div>
                </div>
              </div>
              
              <div class="urgent">
                <strong>📞 IMMEDIATE ACTION REQUIRED:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li><strong>Call NOW:</strong> <a href="tel:${formData.mobile}" style="color: #28a745; font-weight: bold;">${formData.mobile}</a></li>
                  <li><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #007bff;">${formData.email}</a></li>
                  <li><strong>Investment Interest:</strong> ${formData.segment || 'Not specified'}</li>
                  <li><strong>Capital Available:</strong> ${formData.investment || 'Not specified'}</li>
                  <li><strong>Location:</strong> ${formData.state}</li>
                </ul>
              </div>
              
              <p><strong>Submission Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              
              <p>Best regards,<br>StockGo Lead System</p>
            </div>
            <div class="footer">
              <p>This is an automated message from your lead form system.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    console.log('\n🚀 Making API call to Brevo...');
    console.log('URL:', emailConfig.brevoApiUrl);
    console.log('Headers:', {
      'accept': 'application/json',
      'api-key': getEnvVar('VITE_BREVO_API_KEY').substring(0, 10) + '...',
      'content-type': 'application/json'
    });
    
    const response = await axios.post(emailConfig.brevoApiUrl, emailData, {
      headers: {
        'accept': 'application/json',
        'api-key': getEnvVar('VITE_BREVO_API_KEY'),
        'content-type': 'application/json'
      }
    });

    console.log('Form submission email sent successfully via Brevo API:', response.data);
    return { success: true, messageId: response.data.messageId };
  } catch (error: any) {
    console.error('Error sending form submission email via Brevo API:', error.response?.data || error.message);
    return { success: false, error: error.response?.data?.message || error.message };
  }
};

// Note: User confirmation emails are disabled - only owner notifications are sent
