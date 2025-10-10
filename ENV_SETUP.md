# Environment Variables Setup

## Create .env file

Create a `.env` file in your project root directory with the following content:

```env
# Brevo API Key (Required for production)
# Get this from: https://app.brevo.com/settings/keys/api
VITE_BREVO_API_KEY=your_brevo_api_key_here

# Sender Information (Required for production)
# This email must be verified in your Brevo account
VITE_BREVO_SENDER_EMAIL=your-verified-email@domain.com
VITE_BREVO_SENDER_NAME=TradeStock Team

# Owner Email (Where form submissions will be sent)
VITE_OWNER_EMAIL=rohitsharma001914@gmail.com

# Development Mode (Optional - set to true for testing without sending emails)
VITE_DEV_MODE=true
```

## Quick Setup Instructions

1. **Create the file:**
   ```bash
   touch .env
   ```

2. **Copy the content above into the .env file**

3. **For immediate testing (development mode):**
   - Keep `VITE_DEV_MODE=true`
   - You can leave the API key as placeholder
   - Emails will be logged to console instead of being sent

4. **For production:**
   - Set `VITE_DEV_MODE=false` or remove the line
   - Get a real Brevo API key from https://app.brevo.com/
   - Verify your sender email in Brevo dashboard
   - Replace `your_brevo_api_key_here` with your actual API key

## Testing

- **Development mode:** Form submissions will be logged to browser console
- **Production mode:** Emails will be sent to rohitsharma001914@gmail.com

## Important Notes

- Never commit the `.env` file to version control
- The `.env` file is already in `.gitignore`
- Restart your development server after creating/updating the `.env` file
