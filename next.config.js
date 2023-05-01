/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "target.scene7.com",
      "m.media-amazon.com",
      "i5.walmartimages.com",
      "sangabrielcomidas.com",
      "spoonfulapp.com",
      "klbtheme.com",
      "ongolemart.com",
    ],
  },
  publicRuntimeConfig: {
    APP_NAME: "bacola",
    APP_LOGO_URL: "",
  },
};
