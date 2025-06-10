import '../styles/styles.css';

import App from './pages/app';
import { registerServiceWorker } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.getElementById('main-content'),
    navbar: document.getElementById('navbar'),
    footer: document.getElementById('footer'),
    skipLinkButton: document.getElementById('skip-link'),
  });

  await app.renderPage();
  await registerServiceWorker();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
});
