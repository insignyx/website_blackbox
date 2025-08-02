# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable email notifications for the contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Subject:
```
New Contact Form Submission from {{from_name}}
```

### Content:
```
Hello,

You have received a new contact form submission from the Insignyx Technologies website:

**Contact Information:**
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

**Project Details:**
Service Needed: {{service}}
Budget Range: {{budget}}
Timeline: {{timeline}}

**Message:**
{{message}}

**Reply to:** {{from_email}}

---
This message was sent from the Insignyx Technologies contact form.
```

4. Set the "To Email" field to: `connect@insignyx.com`
5. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "General" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const emailjsConfig = {
  serviceId: 'your_service_id_here',     // Replace with your Service ID
  templateId: 'your_template_id_here',   // Replace with your Template ID
  publicKey: 'your_public_key_here',     // Replace with your Public Key
}
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the contact form
4. Check your email (connect@insignyx.com) for the notification

## Troubleshooting

### Common Issues:

1. **"Email service is not configured" error**
   - Make sure you've updated the `emailjs.ts` config file with real values
   - Ensure the public key doesn't contain `YOUR_PUBLIC_KEY`

2. **Email not received**
   - Check your EmailJS dashboard for delivery status
   - Verify the "To Email" in your template is correct
   - Check spam/junk folders

3. **Authentication errors**
   - Verify your email service is properly connected
   - Check if your email provider requires app-specific passwords

### EmailJS Limits (Free Plan):
- 200 emails per month
- Rate limit: 50 emails per hour

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles the actual email sending securely
- No sensitive credentials are stored in the frontend

## Support

If you encounter issues:
1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Contact EmailJS support
3. For website-specific issues, contact the development team