
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
    'index.csr.html': {size: 24309, hash: '23a74a27c2fee8004684ee5d0813d409d8b2a65b2bdc0c723c493b367a83d77f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '84ea77c56f9fd6907b6c5733810afb9baeeec77cf685a60737814b4f28b3676c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 48266, hash: 'c7fcdb93268eebf31bd454386a9b1267649fccf4aec4282b6075f051eee6c17e', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 47434, hash: 'bb63264de94105ef883db858836aff89cd34148e11f5b7d8dc185aecd198fafe', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: '3deac5f7062c3778c70b63c839511fe48cb1187a77482a4678c774bd717ac081', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
