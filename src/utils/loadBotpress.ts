let botpressLoaded = false;

export const loadBotpress = () => {
  if (botpressLoaded) return;
  botpressLoaded = true;

  const configScript = document.createElement('script');
  configScript.src =
    'https://files.bpcontent.cloud/2025/08/25/17/20250825174929-BSP8HJ81.js';
  configScript.async = true;

  const injectScript = document.createElement('script');
  injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
  injectScript.async = true;
  injectScript.onload = () => document.body.appendChild(configScript);

  document.body.appendChild(injectScript);
};
