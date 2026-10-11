import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/signup", destination: "/register", permanent: true }];
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;


