
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
    'index.csr.html': {size: 24309, hash: '4b1b1b440ef23ffe0ad9a45d3062b0379b16a8c943577489eea7f78a16fae1b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: 'bc1cd063ab1e1a41fdf1f94175e3509c488ac99543dcd0f445a900a889929208', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 49163, hash: '736da90987eae44fa3dacffff16d41d4fb01eff2e339d227ef2fe871b55bff73', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 49466, hash: 'fd48d25b88821e146ded0ccdb6b8db0d58f13caa79af96ecd643ccea83e4b1cf', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: '4a13af14aa913dcf8fc6443ed8e282ee1ece61c32c2be21698e71a63298b01e3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
