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
        ],
      },
    ];
  },
};

export default nextConfig;
