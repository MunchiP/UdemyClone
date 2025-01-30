
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Registrarse"
  },
  {
    "renderMode": 2,
    "route": "/Iniciar-sesion"
  },
  {
    "renderMode": 2,
    "route": "/InicioPrivado"
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
    'index.csr.html': {size: 24309, hash: '86ed82573988e975b4a8d502aee3b0c282b8f7f28eb19bc47692cf1c133fb9ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: 'ad632327ff8bc8db3bb321b5f66163b31d3f271125ab75d121a0d913d012e57f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Iniciar-sesion/index.html': {size: 49163, hash: '9659895317f4d93faa90bf32422fabc68401ada3f328eb889a93d46155dbed5a', text: () => import('./assets-chunks/Iniciar-sesion_index_html.mjs').then(m => m.default)},
    'Registrarse/index.html': {size: 49466, hash: 'a3bc1652512fb0e5f671ec822da487326853017aad9956677d43452dba9a6d75', text: () => import('./assets-chunks/Registrarse_index_html.mjs').then(m => m.default)},
    'InicioPrivado/index.html': {size: 44924, hash: '2ab43e167f9e1fe3998ad43f0bee9142bb6006da64c4b6eba8fc48440c8c652b', text: () => import('./assets-chunks/InicioPrivado_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: '4e2c628a80f7bbc4427629bc91debc4ec3d277486ece3c916d1c10017aac1b4f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
