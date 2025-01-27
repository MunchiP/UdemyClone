
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
    'index.csr.html': {size: 24309, hash: '1b426805be1b0cee63c0204d49ef33d4c5efe5db8d0c31ed6ea3689247e3ba9a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: 'c54f2ecde2d0eb7194c9231f0222bcfaed40c0999a194cd91d72281399430a67', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 49466, hash: '7549f6c1a7522f9d111361ddd9e23670f897693746e9e43353ac7f581794216c', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 49178, hash: '3cd4c39daa128bb5084408af18e8118cc8d15fc62498d4a9e8cd228c3ba5af52', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: 'b36f627dff359bdab907a2b0035f1cb10052623107601547543a3317e6b17688', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
