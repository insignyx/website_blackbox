# Deployment Guide

## Environment Variables Setup

### For Vercel Deployment

The application requires environment variables to be configured in Vercel for proper functionality:

1. **Access Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Navigate to your project

2. **Configure Environment Variables**
   - Go to Settings > Environment Variables
   - Add the following variables:

   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Environment Settings**
   - Set variables for: **Production**, **Preview**, and **Development**
   - This ensures consistency across all deployment environments

4. **Redeploy**
   - After adding variables, trigger a new deployment
   - You can do this by pushing a new commit or manually redeploying

### EmailJS Configuration (Optional)

EmailJS is used for sending email notifications when job applications are submitted. This is **optional** - job applications will still be saved to Supabase even if EmailJS is not configured.

1. **Setup EmailJS** (if you want email notifications):
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Create an account and verify your email
   - Create a new service (Gmail, Outlook, etc.)
   - Create an email template using the variables listed in `src/config/emailjs.ts`
   - Get your Public Key from the Integration page

2. **Update Configuration**:
   - Edit `src/config/emailjs.ts`
   - Replace placeholder values with your actual EmailJS credentials:
     ```typescript
     export const emailjsConfig = {
       serviceId: 'your_actual_service_id',
       templateId: 'your_actual_template_id', 
       publicKey: 'your_actual_public_key',
     }
     ```

3. **Graceful Fallback**:
   - If EmailJS is not configured, applications still save successfully
   - Only email notifications are skipped
   - No errors are thrown to the user

### Common Issues

- **Blank Screen**: Usually caused by missing Supabase environment variables
- **Supabase Configuration Error**: Environment variables not set in Vercel
- **Job Application Failures**: Supabase client not initialized properly
- **EmailJS 400 Error**: Invalid EmailJS credentials (application still saves successfully)
- **Email Notifications Not Sent**: EmailJS not configured (this is optional)

### Verification

1. **Supabase Setup**:
   - Check browser console for environment variable debug logs
   - Look for "✅ Supabase client initialized successfully" message
   - Test job application form functionality

2. **EmailJS Setup** (if configured):
   - Look for "✅ Email notification sent successfully" in console
   - If not configured, you'll see "📧 EmailJS not configured, skipping email notification"
   - Applications save successfully regardless of email status

### Local Development

1. Copy `.env.example` to `.env`
2. Replace placeholder values with actual Supabase credentials
3. Run `npm run dev`

## Troubleshooting

### Supabase Issues

If you see "Supabase Configuration Error" alerts:

1. Verify environment variables are set in Vercel dashboard
2. Check that variable names match exactly (case-sensitive)
3. Ensure values don't contain extra spaces or quotes
4. Redeploy after making changes

### EmailJS Issues

If you see EmailJS 400 errors:

1. **This is normal if EmailJS is not configured** - applications still save successfully
2. If you want email notifications:
   - Check `src/config/emailjs.ts` for valid credentials
   - Ensure service ID doesn't start with '-' (invalid)
   - Verify template ID and public key are correct
   - Test EmailJS configuration in their dashboard

### Debug Information

Check browser console for detailed logs:
- Supabase initialization status
- EmailJS configuration status
- Application submission progress
- Specific error messages with context

For more help, check the browser console for detailed debugging information.