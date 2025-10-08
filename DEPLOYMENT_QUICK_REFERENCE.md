# 🚀 Render Deployment - Quick Reference

## 📝 Deployment Order

```
1️⃣ PostgreSQL Database
   ↓
2️⃣ Backend (Web Service)
   ↓
3️⃣ Frontend (Static Site)
```

---

## 🔑 Required Information

### For Backend:
```env
DATABASE_URL=postgres://user:pass@host:5432/db     # From Render PostgreSQL
PORT=5001
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=xxxx-xxxx-xxxx-xxxx                     # App Password
GMAIL_FROM=your-email@gmail.com
NOTIFY_EMAIL=recipient@example.com
```

### For Frontend:
```env
VITE_API_URL=https://your-backend.onrender.com/api  # Your backend URL
```

---

## 📂 Root Directories (IMPORTANT!)

```
Backend:  landingpage/hospiceconnect/backend
Frontend: landingpage/hospiceconnect
```

---

## 🛠️ Build Commands

### Backend:
```
Build: npm install
Start: npm start
```

### Frontend:
```
Build: npm install && npm run build
Publish: dist
```

---

## 🗄️ Database Setup SQL

Run this after creating PostgreSQL:

```sql
CREATE TABLE IF NOT EXISTS submissions (
  id SERIAL PRIMARY KEY,
  care_recipient VARCHAR(255),
  main_concern TEXT,
  medical_situation VARCHAR(255),
  current_care_location VARCHAR(255),
  urgency_level VARCHAR(50),
  first_name VARCHAR(255),
  phone VARCHAR(20),
  email VARCHAR(255),
  best_time VARCHAR(255),
  care_preference TEXT,
  insurance_coverage TEXT,
  special_requests TEXT,
  terms_consent BOOLEAN DEFAULT FALSE,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ✅ Testing URLs

### Backend Health Check:
```
https://your-backend.onrender.com/api/admin/submissions
```
Should return: `{"submissions":[]}`

### Frontend:
```
https://your-frontend.onrender.com
```

### Admin Dashboard:
```
https://your-frontend.onrender.com/admin
```

---

## 🔧 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Backend won't start | Check DATABASE_URL is set |
| Frontend blank page | Verify VITE_API_URL is correct |
| No email | Use Gmail App Password |
| CORS error | Add FRONTEND_URL to backend env |
| Database error | Check tables are created |

---

## 📱 Gmail App Password

1. https://myaccount.google.com/apppasswords
2. Create "HospiceConnect" app password
3. Copy 16-character code
4. Use as GMAIL_PASS (remove spaces)

---

## 🔄 Update Deployment

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Render auto-deploys in ~5 minutes ✨

---

## 💰 Free Tier Limits

- PostgreSQL: 90 days free, then $7/month
- Backend: 750 hours/month (free)
- Frontend: 100GB bandwidth/month (free)

**Keep backend awake:** Use UptimeRobot (free)

---

## 🆘 Emergency Commands

### Force Redeploy:
1. Go to service in Render
2. Click "Manual Deploy"
3. Select "Clear cache & deploy"

### View Logs:
1. Click on service
2. Go to "Logs" tab
3. Watch real-time logs

### Database Shell:
1. Go to database in Render
2. Click "Connect"
3. Use provided connection details

---

## 📊 Deployment Status Checklist

```
□ GitHub repo created and code pushed
□ Render account created
□ PostgreSQL database running (green)
□ Backend deployed and running (green)
□ Frontend deployed and running (green)
□ Form submission tested ✅
□ Email notification received ✅
□ Admin dashboard working ✅
```

---

## 🔗 Important Links

- Render Dashboard: https://dashboard.render.com
- GitHub Repo: https://github.com/YOUR-USERNAME/hospiceconnect
- Gmail App Passwords: https://myaccount.google.com/apppasswords

---

**For detailed instructions, see: `RENDER_DEPLOYMENT_GUIDE.md`**

