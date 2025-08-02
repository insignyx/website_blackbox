// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from the Integration page
// 6. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: '-service_6cal5pt', // Replace with your EmailJS service ID
  templateId: 'template_h2itsfs', // Replace with your EmailJS template ID
  publicKey: '-AVzcSjIQpjUEha7w', // Replace with your EmailJS public key
}

// Email template variables that will be available in your EmailJS template:
// {{from_name}} - Contact person's name
// {{from_email}} - Contact person's email
// {{company}} - Company name
// {{phone}} - Phone number
// {{service}} - Service requested
// {{budget}} - Budget range
// {{timeline}} - Project timeline
// {{message}} - Custom message
// {{to_email}} - Recipient email (connect@insignyx.com)

// Example EmailJS template:
/*
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service Needed: {{service}}
Budget Range: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

Please respond to this inquiry at: {{from_email}}

Best regards,
Insignyx Technologies Website
*/