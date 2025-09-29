// src/utils/preloadImages.js
export const preloadAllImages = () => {
  // --- Step 1: Preload 13 specific critical images ---
  const criticalImages = [
    require("../assets/bahrainp.webp"),
    require("../assets/CHINAp.webp"),
    require("../assets/egyptp.jpg"),
     require("../assets/indiap.webp"),
    require("../assets/JORDANp.webp"),
    require("../assets/KUWAITp.webp"),
     require("../assets/PAKISTANp.webp"),
    require("../assets/QATARp.webp"),
    require("../assets/TAIWANp.jpg"),
    require("../assets/THAILANDp.webp"),
    require("../assets/UAEP.webp"),
    require("../assets/VIETNAMp.webp"),
  ];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
  console.log(`Preloaded ${criticalImages.length} critical images`);

  // --- Step 2: Automatically preload all other images in assets folder ---
  const otherImages = require.context("../assets", false, /\.(png|jpe?g|jpg|svg|gif|webp)$/);

  otherImages.keys().forEach((key) => {
    // Skip the images already preloaded explicitly
    if (!criticalImages.includes(otherImages(key))) {
      const img = new Image();
      img.src = otherImages(key);
    }
  });
  console.log(`Automatically preloaded ${otherImages.keys().length} images from assets`);
};
