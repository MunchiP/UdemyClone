
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
    'index.csr.html': {size: 24309, hash: 'e09eac4125a61fd7c9894bcf45f7b4d500340df305dbf77e6c6f26e2cd5567c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '48ded38d0505aed1c23708abfc0fd7c792d45e8ee8c2ea7098bce1592528801e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 49466, hash: '9c5e1cb1fa9aaf7e1247196a22168800baf0b09e56d6022abb64ffb6b3be9297', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 49178, hash: '6630831ba1325fe3f5374daab5c4b0afba23dc9b4fc43df5ba825590d7064dfd', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: '6176a448b5e36d5b3e3fc517bcefd7e681fd2f51299bbbe1c5352907e8ad3820', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
