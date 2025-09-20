// src/preloadImages.js

// Automatically import all images in the assets folder
const importAll = (r) => r.keys().map(r);

const images = importAll(require.context("./assets", false, /\.(png|jpe?g|svg|webp)$/));

export const preloadImages = () => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
