/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    //         // !! WARN !!
    //         // Dangerously allow production builds to successfully complete even if
    //         // your project has type errors.
    //         // !! WARN !!
    ignoreBuildErrors: true,
    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  },
};

module.exports = nextConfig;
