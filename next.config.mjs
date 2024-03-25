/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath should match the repository name if you are deploying to GitHub pages
  basePath: "/portfolio-fe",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
