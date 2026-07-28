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
      // Canonical host: apex -> www, permanent (308). www.trueyy.com is our
      // canonical host. The `host` match is anchored to the bare apex so it
      // never fires on www (no redirect loop). NOTE: for this to take effect
      // in production, the apex domain must reach Next.js — i.e. Vercel must
      // NOT be doing its own platform-level apex->www redirect (which is a
      // temporary 307). Assign `trueyy.com` to the project with "No Redirect"
      // so this rule issues the permanent 308 instead.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'trueyy.com' }],
        destination: 'https://www.trueyy.com/:path*',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
