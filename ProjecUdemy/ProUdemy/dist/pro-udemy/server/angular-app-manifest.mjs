
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
<<<<<<< HEAD
<<<<<<< HEAD
    'index.csr.html': {size: 24309, hash: '6df3ff413707b8dca40972bac067e45eb8a24044e95bec8777e2968ba24bb39f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '4243933ce6ed4231a1d76a2e8cee53a7ca4ab922e979e4666b80edc2e49de842', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 47768, hash: 'be258871a046b4dbfd4a3bc975eeb2124b4756ea78bcc28695e79bf327c65e56', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: '7b2c0f6857944dfbc68956ae3de0970ab3c878c70740c2904ea84e293db70a87', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 47435, hash: 'b60928f9c95b25bf94cfa1d998a905b4e7c96ad48e48edd1f44f8e961cfec122', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
=======
    'index.csr.html': {size: 24309, hash: '23a74a27c2fee8004684ee5d0813d409d8b2a65b2bdc0c723c493b367a83d77f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '84ea77c56f9fd6907b6c5733810afb9baeeec77cf685a60737814b4f28b3676c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 48266, hash: 'c7fcdb93268eebf31bd454386a9b1267649fccf4aec4282b6075f051eee6c17e', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 47434, hash: 'bb63264de94105ef883db858836aff89cd34148e11f5b7d8dc185aecd198fafe', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: '3deac5f7062c3778c70b63c839511fe48cb1187a77482a4678c774bd717ac081', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
>>>>>>> Frontend
=======
    'index.csr.html': {size: 24309, hash: 'e09eac4125a61fd7c9894bcf45f7b4d500340df305dbf77e6c6f26e2cd5567c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '48ded38d0505aed1c23708abfc0fd7c792d45e8ee8c2ea7098bce1592528801e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'registrarse/index.html': {size: 49466, hash: '9c5e1cb1fa9aaf7e1247196a22168800baf0b09e56d6022abb64ffb6b3be9297', text: () => import('./assets-chunks/registrarse_index_html.mjs').then(m => m.default)},
    'iniciar-sesion/index.html': {size: 49178, hash: '6630831ba1325fe3f5374daab5c4b0afba23dc9b4fc43df5ba825590d7064dfd', text: () => import('./assets-chunks/iniciar-sesion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: '6176a448b5e36d5b3e3fc517bcefd7e681fd2f51299bbbe1c5352907e8ad3820', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
>>>>>>> Frontend
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
