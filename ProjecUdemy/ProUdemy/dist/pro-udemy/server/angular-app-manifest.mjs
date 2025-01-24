
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
    'index.csr.html': {size: 24309, hash: '243e5dea4eca3abbc77226b1cc21af6c8620e7693c94dfec11711ecdc89555a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: 'e1a9cc98e74e053188658bfdaad0c29be8d7177f12e0de3fc2365c2c16d275db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 48679, hash: '51672b1e7140ea5731cd5d8f2d24cc24ba2ce77626bbd38862bf434e6cd3c8d9', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 47434, hash: '649d374011adafddffc3549409eadd54c45a6f7b751a1f76f7e788ecae7b56f8', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: 'a593ff547a9cf9f4af1fa4a5d3fd650f84b59e5f5c991adca67a217e03193ec7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
