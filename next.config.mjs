/** @type {import('next').NextConfig} */
const nextConfig = {  
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          pathname: "/images/**"
        },
        {
          protocol: "https",
          hostname: "https://lh3.googleusercontent.com/*",
          pathname: "/images/**"
        },
      ],
    },
  };
  
  export default nextConfig;
  