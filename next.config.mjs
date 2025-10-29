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
            value: "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https: http:; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: data: blob:; style-src 'self' 'unsafe-inline' https: http: data:; img-src 'self' data: blob: https: http:; font-src 'self' data: https: http:; connect-src 'self' https: http: wss: ws: data:; media-src 'self' data: blob: https: http:; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; worker-src 'self' blob:; child-src 'self' blob:;"
          },
        ],
      },
      {
        // Completely permissive CSP for CRM launcher
        source: '/oeccrm',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src * 'unsafe-eval' 'unsafe-inline' data: blob:; default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline' data:; img-src * data: blob:; font-src * data:; connect-src * data:; media-src * data: blob:; object-src *; base-uri *; frame-ancestors *; worker-src * blob:; child-src * blob:;"
          },
        ],
      },
      {
        // Also for trailing slash
        source: '/oeccrm/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src * 'unsafe-eval' 'unsafe-inline' data: blob:; default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; style-src * 'unsafe-inline' data:; img-src * data: blob:; font-src * data:; connect-src * data:; media-src * data: blob:; object-src *; base-uri *; frame-ancestors *; worker-src * blob:; child-src * blob:;"
          },
        ],
      },
    ];
  },
};

export default nextConfig;
