/** @type {import("next").NextConfig} */
const nextConfig = {
  // Hide the floating "N" dev-status badge in `next dev`. Production
  // builds don't render it anyway; this just keeps it off while
  // working locally so it doesn't overlap the page UI.
  devIndicators: false,
  async redirects() {
    return [
      // Legacy URL Google still crawls (returns 404). The homepage is `/`.
      { source: '/home', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
