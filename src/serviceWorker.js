export const register = () => {
  window.addEventListener("load", () => {
    const swUrl = `${process.env.PUBLIC_URL}/customServiceWorker.js`;

    if ("serviceWorker" in navigator) 
      navigator.serviceWorker.register(swUrl);
  });
};