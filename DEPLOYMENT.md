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

### Common Issues

- **Blank Screen**: Usually caused by missing environment variables
- **Supabase Configuration Error**: Environment variables not set in Vercel
- **Job Application Failures**: Supabase client not initialized properly

### Verification

1. Check browser console for environment variable debug logs
2. Look for "✅ Supabase client initialized successfully" message
3. Test job application form functionality

### Local Development

1. Copy `.env.example` to `.env`
2. Replace placeholder values with actual Supabase credentials
3. Run `npm run dev`

## Troubleshooting

If you see "Supabase Configuration Error" alerts:

1. Verify environment variables are set in Vercel dashboard
2. Check that variable names match exactly (case-sensitive)
3. Ensure values don't contain extra spaces or quotes
4. Redeploy after making changes

For more help, check the browser console for detailed debugging information.