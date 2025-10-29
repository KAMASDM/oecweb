/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // When CRM opens in new window, map its asset requests to the crm folder
      {
        source: '/oeccrm/:path*',
        destination: '/crm/:path*',
      },
      // Handle CRM client-side routing - serve index.html for all CRM routes
      {
        source: '/crm/login',
        destination: '/crm/index.html',
      },
      {
        source: '/crm/:path*',
        destination: '/crm/index.html',
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all CRM files
        source: '/crm/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https: wss: ws:; frame-ancestors 'self';"
          },
        ],
      },
      {
        // Also apply CSP to the CRM launcher page
        source: '/oeccrm/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https: wss: ws:; frame-ancestors 'self';"
          },
        ],
      },
    ];
  },
};

export default nextConfig;
