# Quick Start - Email Notifications

## 🚀 3-Minute Setup

### 1️⃣ Get Resend API Key (2 minutes)
```
1. Go to: https://resend.com/signup
2. Create free account
3. Click "API Keys" → "Create API Key"
4. Copy the key (starts with re_)
```

### 2️⃣ Add to Supabase (1 minute)
```
1. Go to: https://supabase.com/dashboard
2. Select your project
3. Settings → Edge Functions → Function Secrets
4. Add new secret:
   Name: RESEND_API_KEY
   Value: [paste your key]
5. Save
```

### 3️⃣ Done! ✅
Test by submitting a form on your website.

---

## 📧 What You Get

Every form submission sends you an email with:
- ✅ Customer name
- ✅ Email (clickable)
- ✅ Phone (clickable)
- ✅ Service requested
- ✅ Preferred time
- ✅ Message

**Sent to:**
- hafizjazib6@gmail.com
- stourbridgehearingcentre@gmail.com

---

## 🔧 Change Email Addresses?

Edit these files and modify the email array:
- `src/components/BookingForm.tsx` (line 48)
- `src/pages/ContactPage.tsx` (line 38)

---

## ❓ Not Working?

1. Check spam folder
2. Verify API key is saved in Supabase
3. Check https://resend.com/logs

---

**Full Guide:** See EMAIL_SETUP_GUIDE.md
