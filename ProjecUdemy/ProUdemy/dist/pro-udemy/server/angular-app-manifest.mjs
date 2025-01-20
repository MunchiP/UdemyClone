
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
    'index.csr.html': {size: 24309, hash: '996bb8e13c1a417089ea120a94a2141a8157be6579dea3121da3ccf6c5d68ea6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: 'd52543d8818aab9391e250000c8ffd9dcf046ac7cd42bc1e79a474d1ed2303aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 46374, hash: '1000f3b3b574eae799bc52474a42e2dcc8b7cef7f86ea01c5c535cc7613d63e7', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44255, hash: '53b5a2f7934be38c727f2e899c29cfdf45a6092f59275610196f4c93f4550cbe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 44307, hash: 'fab655622e9f6d7c941208d39ebb6cc21426c59abe5a6fdaa1e1de8e15832384', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
