# Helixar Environment Setup Guide

## Prerequisites

- Node.js 18+ installed
- Git repository access
- Vercel account (free tier)
- Firebase project (free tier)
- Google AI Studio account (for Gemini API)

## Local Development Setup

### 1. Clone and Install
```bash
git clone [repository-url]
cd Final-site
npm install
```

### 2. Environment Variables
Create `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Gemini API (Server-side only)
GEMINI_API_KEY=your_gemini_api_key

# App Configuration
NEXT_PUBLIC_APP_ID=helixar
```

### 3. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create new project or select existing
3. Enable Authentication (Email/Password, Google)
4. Create Firestore database
5. Set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /artifacts/{appId}/users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /artifacts/{appId}/users/{userId}/analyses/{analysisId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4. Run Development Server
```bash
npm run dev
```

## Production Deployment

### 1. Vercel Setup
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure environment variables in Vercel dashboard
4. Set up custom domain (optional)

### 2. Environment Variables in Vercel
Add all environment variables from `.env.local` to Vercel project settings.

### 3. Deploy
```bash
# Automatic deployment on push to main branch
git push origin main

# Or manual deployment
vercel --prod
```

## Monitoring Setup

### 1. Google Analytics
1. Go to [Google Analytics](https://analytics.google.com)
2. Create new property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to environment variables

### 2. Firebase Monitoring
1. Enable Firebase Performance Monitoring
2. Set up Firebase Alerts for budget thresholds
3. Configure error reporting

### 3. Vercel Monitoring
1. Enable Vercel Analytics (optional)
2. Set up build notifications
3. Monitor usage in dashboard

## Cost Monitoring Setup

### 1. Create Monitoring Spreadsheet
Create a Google Sheet with the following tabs:
- **Weekly Usage**: Track all service usage
- **Cost Analysis**: Calculate costs per user/feature
- **Alerts**: Document any issues or approaching limits

### 2. Set Up Alerts
- **Firebase**: Budget alerts at 80% of free tier
- **Vercel**: Build failure notifications
- **Manual**: Calendar reminders for weekly checks

### 3. Monitoring Schedule
- **Daily**: Check Gemini API usage
- **Weekly**: Review all service dashboards
- **Monthly**: Comprehensive cost analysis

## Security Checklist

### 1. Environment Variables
- [ ] All API keys are in environment variables
- [ ] No secrets in code or version control
- [ ] Production keys are different from development

### 2. Firebase Security
- [ ] Firestore rules are properly configured
- [ ] Authentication is enabled
- [ ] Storage rules are secure

### 3. API Security
- [ ] Input validation implemented
- [ ] Rate limiting configured
- [ ] CORS properly set up

## Performance Optimization

### 1. Build Optimization
- [ ] Enable Next.js optimizations
- [ ] Configure image optimization
- [ ] Enable compression

### 2. Runtime Optimization
- [ ] Implement proper caching
- [ ] Optimize API calls
- [ ] Monitor bundle size

### 3. Monitoring
- [ ] Set up Core Web Vitals tracking
- [ ] Monitor API response times
- [ ] Track user experience metrics

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Environment Variables
- Ensure all variables are set in Vercel
- Check variable names match exactly
- Restart development server after changes

#### Firebase Issues
- Verify project configuration
- Check security rules
- Ensure authentication is enabled

#### API Issues
- Verify API keys are valid
- Check rate limits
- Monitor error logs

### Support Resources
- **Next.js**: https://nextjs.org/docs
- **Firebase**: https://firebase.google.com/docs
- **Vercel**: https://vercel.com/docs
- **Google AI**: https://ai.google.dev/docs

## Maintenance

### Weekly Tasks
- [ ] Check all service usage
- [ ] Review error logs
- [ ] Update dependencies
- [ ] Monitor performance

### Monthly Tasks
- [ ] Comprehensive security review
- [ ] Cost analysis and optimization
- [ ] Performance audit
- [ ] User feedback review

### Quarterly Tasks
- [ ] Major dependency updates
- [ ] Architecture review
- [ ] Scaling assessment
- [ ] Feature planning

## Emergency Procedures

### Service Outages
1. Check service status pages
2. Implement fallback mechanisms
3. Communicate with users
4. Document incident

### Security Breaches
1. Immediately rotate affected keys
2. Review access logs
3. Assess impact
4. Implement fixes
5. Notify stakeholders

### Cost Overruns
1. Identify cause
2. Implement immediate cost controls
3. Optimize usage
4. Plan for scaling

---

**Remember**: Always test changes in development before deploying to production. Monitor costs closely and stay within free tier limits. 