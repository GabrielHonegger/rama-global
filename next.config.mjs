// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Apply the Content Security Policy to all routes
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
              default-src 'self'; 
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://www.google.com https://www.gstatic.com https://www.googletagmanager.com; 
              style-src 'self' 'unsafe-inline'; 
              img-src 'self' data: https://www.googletagmanager.com; 
              connect-src 'self'; 
              font-src 'self';
              frame-src 'self' https://www.google.com;
              frame-ancestors 'none'; 
              object-src 'none';` 
              .replace(/\s{2,}/g, ' ').trim(),
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'Referrer-Policy',
              value: 'same-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'geolocation=(), camera=(), microphone=(), payment=()',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  