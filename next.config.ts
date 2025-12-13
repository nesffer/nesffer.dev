import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${process.env.BETTER_AUTH_URL}/api/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;
