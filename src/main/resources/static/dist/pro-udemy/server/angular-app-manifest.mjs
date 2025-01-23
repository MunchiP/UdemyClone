
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
    'index.csr.html': {size: 24309, hash: '70862a6b23584094ac1b79f5c46b645583621ffaf60d6059210103c0ce6d9f6a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '8bcb4cd9e24734f7755d051a8bc0b307e1efb6e12bffdeb8a8f91e3cbb2768a8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 47768, hash: 'a6874ffd6c05197422013e3083f8490be9dbf853a16608dac278951e2f1fce8a', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: 'bbd0df51748c45335848534192640ecb81f932421929c5abca4e54ad10f28ac0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 46323, hash: 'e0978de9da8b20d374c55675aa60869461317f026774f049bce1c8cfb7aedfa4', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
