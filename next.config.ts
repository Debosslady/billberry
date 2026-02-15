/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     
    qualities: [75, 85],
 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      
    ],
  },

  
  swcMinify: false,
};

export default nextConfig;