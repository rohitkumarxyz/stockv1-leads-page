# Email Setup Guide for TradeStock Lead Form

This guide explains how to set up email functionality for the TradeStock lead form using Brevo (formerly Sendinblue) email service.

## Overview

When a user submits the lead form, the system will:
1. Send a detailed email to the owner (rohitsharma001914@gmail.com) with all form data
2. Send a confirmation email to the user who submitted the form

## Setup Instructions

### 1. Create a Brevo Account

1. Go to [Brevo (Sendinblue)](https://www.brevo.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Log in to your Brevo account
2. Go to **Settings** → **API Keys**
3. Create a new API key with **SMTP** permissions
4. Copy the API key (you'll need this for the environment variables)

### 3. Set Up Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Brevo API Key (Required)
VITE_BREVO_API_KEY=your_actual_api_key_here

# Sender Information (Required)
VITE_BREVO_SENDER_EMAIL=your-verified-email@domain.com
VITE_BREVO_SENDER_NAME=TradeStock Team

# Owner Email (Where form submissions will be sent)
VITE_OWNER_EMAIL=rohitsharma001914@gmail.com
```

### 4. Verify Your Sender Email

1. In Brevo, go to **Settings** → **Senders & IP**
2. Add and verify the email address you want to use as the sender
3. This email will appear as the "From" address in all emails

### 5. Test the Setup

1. Start your development server: `npm run dev`
2. Open the lead form and submit test data
3. Check the browser console for email logs (in development mode)
4. Check your email inbox for the form submission

## Development vs Production

### Development Mode
- Emails are logged to the browser console instead of being sent
- No API key required for testing
- Useful for development and debugging

### Production Mode
- Requires valid Brevo API key
- Emails are actually sent via Brevo API
- Set `NODE_ENV=production` in your environment

## Email Templates

The system includes two email templates:

### 1. Owner Notification Email
- Sent to: rohitsharma001914@gmail.com
- Contains: All form data, contact information, and action items
- Subject: "New Lead Form Submission - [User Name]"

### 2. User Confirmation Email
- Sent to: The user who submitted the form
- Contains: Thank you message and next steps
- Subject: "Thank you for your interest in TradeStock!"

## Troubleshooting

### Common Issues

1. **"Invalid API Key" Error**
   - Verify your API key is correct
   - Ensure the API key has SMTP permissions
   - Check that the key is properly set in environment variables

2. **"Sender Not Verified" Error**
   - Verify your sender email in Brevo dashboard
   - Use a verified domain for better deliverability

3. **Emails Not Sending**
   - Check browser console for error messages
   - Verify all environment variables are set correctly
   - Test with a simple email first

### Testing

To test the email functionality:

1. **Development Testing:**
   ```bash
   npm run dev
   # Submit form and check console logs
   ```

2. **Production Testing:**
   ```bash
   # Set up environment variables
   npm run build
   npm run preview
   # Submit form and check email inbox
   ```

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all sensitive data
- Regularly rotate your API keys
- Monitor your Brevo account for unusual activity

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your Brevo account settings
3. Test with a simple email first
4. Contact Brevo support for API-related issues

## Cost Information

- Brevo offers a free tier with 300 emails/day
- Perfect for small to medium websites
- Upgrade plans available for higher volumes

