import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "cdn.example.com",
//         pathname: "/images/**",
//       },
//     ],
//   },
// };
const nextConfig = {
  swcMinify: false,          // ← this line disables the problematic SWC binary
};

export default nextConfig;
