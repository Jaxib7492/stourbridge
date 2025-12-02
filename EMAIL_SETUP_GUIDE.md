# Email Notification Setup Guide

This guide will walk you through setting up email notifications for form submissions on your Stourbridge Hearing Centre website.

## Overview

When someone fills out the contact form or booking form, you will automatically receive an email notification with all the details.

---

## Step-by-Step Setup

### Step 1: Create a Resend Account

1. Go to **https://resend.com/signup**
2. Click "Sign up" and create a free account
3. Verify your email address
4. You'll get 100 free emails per day (perfect for a small business)

### Step 2: Get Your API Key

1. Once logged in, go to the **API Keys** section in the left sidebar
2. Click "**Create API Key**"
3. Give it a name like "Stourbridge Hearing Notifications"
4. Click "**Create**"
5. **IMPORTANT:** Copy the API key (it starts with `re_`) - you won't be able to see it again!

### Step 3: Add API Key to Supabase

1. Go to your **Supabase Dashboard**: https://supabase.com/dashboard
2. Select your project
3. Click on **Settings** (gear icon) in the left sidebar
4. Click on **Edge Functions**
5. Scroll down to "**Function Secrets**"
6. Click "**Add a new secret**"
7. Enter:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Paste your Resend API key (starts with `re_`)
8. Click "**Save**"

### Step 4: Configure Email Recipients

By default, emails are sent to both:
- **hafizjazib6@gmail.com**
- **stourbridgehearingcentre@gmail.com**

If you want to change these email addresses:

1. Open `src/components/BookingForm.tsx`
2. Find line 48: `to: ['hafizjazib6@gmail.com', 'stourbridgehearingcentre@gmail.com']`
3. Modify the array to add/remove email addresses
4. Do the same in `src/pages/ContactPage.tsx` on line 38

**Example:** To add a third email:
```javascript
to: ['hafizjazib6@gmail.com', 'stourbridgehearingcentre@gmail.com', 'third@email.com']
```

### Step 5: Test the Setup

1. Go to your website
2. Fill out the contact form or booking form
3. Submit the form
4. Check your email inbox (and spam folder)
5. You should receive a beautifully formatted email with all the form details

---

## Email Sending Options

### Option A: For Testing (Free, No Setup)

**From Email:** `onboarding@resend.dev`
**To Email:** Any email address you want

This works immediately with no additional setup. Perfect for testing!

### Option B: For Production (Recommended)

Use your own domain (e.g., notifications@stourbridgehearing.co.uk)

**Steps:**
1. In Resend dashboard, click "**Domains**"
2. Click "**Add Domain**"
3. Enter your domain name
4. Add the DNS records shown to your domain provider
5. Wait for verification (usually takes a few minutes)
6. Update the "from" email in the edge function

To update the sender email:
1. Open `supabase/functions/send-email-notification/index.ts`
2. Find line with: `from: "Stourbridge Hearing <onboarding@resend.dev>"`
3. Change to: `from: "Stourbridge Hearing <notifications@yourdomain.com>"`
4. Redeploy the function

---

## What Happens When a Form is Submitted?

1. **Customer fills out form** → Form data is saved to Supabase database
2. **Email is sent** → Edge function sends formatted email to your inbox
3. **You get notified** → Professional HTML email with all details
4. **Customer gets confirmation** → Success message on website

---

## Email Format

You'll receive beautiful HTML emails with:
- Customer name
- Email address (clickable)
- Phone number (clickable)
- Service requested
- Preferred date/time
- Message content
- Professional branding with your colors

---

## Troubleshooting

### Not receiving emails?

1. **Check spam folder** - First time emails might go to spam
2. **Verify API key** - Make sure it's correctly added to Supabase secrets
3. **Check Resend dashboard** - Go to "Logs" to see if emails were sent
4. **Verify email address** - Make sure the recipient email is correct

### Emails going to spam?

1. **Verify your domain** in Resend (Option B above)
2. **Add SPF/DKIM records** - Resend provides these in the domain settings
3. **Whitelist sender** - Add `onboarding@resend.dev` to your contacts

### Edge function not working?

1. Open browser console (F12)
2. Submit a form and check for errors
3. The function might not be deployed - contact support

---

## Costs

- **Resend Free Tier:** 100 emails/day, 3,000/month - FREE
- **Resend Pro (if needed):** $20/month for 50,000 emails

For a small business, the free tier is more than enough!

---

## Security

✅ API key is stored securely in Supabase secrets
✅ Edge functions are protected and serverless
✅ No sensitive data exposed to frontend
✅ All emails are sent through secure API

---

## Support

If you need help:
1. Check the Resend logs: https://resend.com/logs
2. Check Supabase edge function logs
3. Check browser console for errors

---

## Quick Reference

**Resend Dashboard:** https://resend.com/dashboard
**Supabase Dashboard:** https://supabase.com/dashboard
**Change recipient email:** Update `BookingForm.tsx` and `ContactPage.tsx`
**Edge function location:** `supabase/functions/send-email-notification/index.ts`

---

## Next Steps

Once setup is complete, you'll receive instant email notifications for:
- ✅ Booking requests
- ✅ Contact form submissions
- ✅ All customer inquiries

The system is now fully automated and requires no maintenance!
