import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  /**
   * The New Dimension concept site (statically exported with
   * basePath /new-dimension) contains next/image srcs that stay
   * unprefixed when images are unoptimized. The ARYONIX site itself
   * never uses /images/*, so these beforeFiles rewrites are a safe,
   * source-preserving way to serve the concept's assets in place.
   */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/images/:path*",
          destination: "/new-dimension/images/:path*",
        },
        {
          source: "/nd-monogram.svg",
          destination: "/new-dimension/nd-monogram.svg",
        },
      ],
    };
  },
};

export default nextConfig;
