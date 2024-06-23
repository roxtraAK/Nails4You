/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "kitchen-flow-editor",
    "@mui/material/styles/ThemeProvider",
  ],
};

export default nextConfig;
