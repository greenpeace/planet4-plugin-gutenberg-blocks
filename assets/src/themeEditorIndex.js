import { setupThemeEditor } from 'use-theme-editor/build/initializeThemeEditor';
import { p4ServerThemes } from './theme/p4ServerThemes';

const getLocalStorageNamespace = () => {
  const base = `${document.documentElement.dataset.base}`;

  if (!base) {
    return '';
  }

  const [, rawNs] = base.split(window.location.origin);

  if (!rawNs || rawNs === '/') {
    return '';
  }

  return rawNs.replace(/^\//, '').replace(/\/*$/, '') + '/';
};

document.addEventListener('DOMContentLoaded', async () => {
  setupThemeEditor({
    serverThemes: p4ServerThemes,
    localStorageNamespace: getLocalStorageNamespace(),
  });
});
