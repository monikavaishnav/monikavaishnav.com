import type { NextConfig } from "next";

// Deploying to GitHub Pages (custom domain via CNAME) — static export, no Node server.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
