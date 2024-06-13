const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
  pwa: {
    dest: 'public',
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/api\.unsplash\.com\/photos\/random.*$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'unsplash-cache',
          networkTimeoutSeconds: 10,
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  manifest: {
    name: "Next.JS Progressive Web App",
    short_name: "Next PWA",
    theme_color: "#ffffff",
    background_color: "#004740",
    display: "fullscreen",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    splash_pages: null,
  },
};

module.exports = withPlugins([], withPWA(nextConfig));
