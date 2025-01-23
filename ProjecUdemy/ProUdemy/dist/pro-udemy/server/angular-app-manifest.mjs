
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/registrarse"
  },
  {
    "renderMode": 2,
    "route": "/iniciar-sesion"
  },
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 24309, hash: '6df3ff413707b8dca40972bac067e45eb8a24044e95bec8777e2968ba24bb39f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '4243933ce6ed4231a1d76a2e8cee53a7ca4ab922e979e4666b80edc2e49de842', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 47435, hash: 'b60928f9c95b25bf94cfa1d998a905b4e7c96ad48e48edd1f44f8e961cfec122', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: '7b2c0f6857944dfbc68956ae3de0970ab3c878c70740c2904ea84e293db70a87', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 47768, hash: 'be258871a046b4dbfd4a3bc975eeb2124b4756ea78bcc28695e79bf327c65e56', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
