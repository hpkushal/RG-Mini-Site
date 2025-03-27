# Deployment Guide

## Overview

The Risk-Reward Simulator is a Next.js application optimized for deployment on Vercel. This guide covers deployment procedures, environment configuration, and monitoring.

## Prerequisites

- Node.js 18.x or later
- npm 8.x or later
- Git
- Vercel account
- Environment variables configured

## Environment Variables

Required environment variables:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics
NEXT_PUBLIC_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Authentication
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-key

# Database
DATABASE_URL=postgresql://username:password@host:port/database

# External Services
SUPPORT_SERVICE_API_KEY=your-support-service-key
```

## Build Process

### Standard Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

## Deployment Options

### Vercel Deployment (Recommended)

1. **One-Click Deployment**
   - Fork the repository
   - Visit [https://vercel.com/new](https://vercel.com/new)
   - Import your forked repository
   - Configure environment variables
   - Deploy

2. **Using Vercel CLI**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

### Self-Hosted Deployment

#### Docker Deployment

1. Build the Docker image:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. Run with Docker:
```bash
docker build -t risk-reward-simulator .
docker run -p 3000:3000 risk-reward-simulator
```

#### Manual Deployment

1. Set up the server:
```bash
# Install PM2
npm install -g pm2

# Start the application
pm2 start npm --name "risk-reward-simulator" -- start
```

## Continuous Integration/Deployment

### GitHub Actions Workflow

```yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

## Post-Deployment Verification

1. **Application Health Check**
   - Verify all pages load correctly
   - Test user authentication
   - Confirm API connections
   - Check analytics integration

2. **Performance Verification**
   - Run Lighthouse tests
   - Check Core Web Vitals
   - Verify CDN caching
   - Test response times

## Rollback Procedure

### Vercel Rollback

```bash
# List deployments
vercel ls

# Rollback to previous deployment
vercel rollback
```

### Manual Rollback

1. Identify the last working commit
2. Reset to that commit:
```bash
git reset --hard <commit-hash>
git push -f origin main
```

## Performance Monitoring

### Tools Setup

1. **Vercel Analytics**
   ```javascript
   // pages/_app.js
   export function reportWebVitals(metric) {
     console.log(metric)
   }
   ```

2. **Error Tracking**
   ```javascript
   // pages/_app.js
   Sentry.init({
     dsn: "your-sentry-dsn"
   });
   ```

## Security Considerations

1. **SSL Configuration**
   - Enable HTTPS
   - Configure SSL certificates
   - Set up security headers

2. **Environment Security**
   - Use secret management
   - Implement rate limiting
   - Enable DDoS protection

## Troubleshooting Common Issues

### Build Failures

```bash
# Clear cache and node_modules
rm -rf .next node_modules
npm cache clean --force
npm install
```

### Runtime Errors

1. Check logs:
```bash
vercel logs
```

2. Debug environment variables:
```bash
vercel env ls
```

### Performance Issues

1. Enable debug mode:
```bash
NODE_ENV=development npm start
```

2. Monitor memory usage:
```bash
pm2 monit
```

## Support and Contact

For deployment assistance:
- Open an issue on GitHub
- Contact: support@example.com
- Documentation: docs.example.com 