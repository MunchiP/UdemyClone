
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
    'index.csr.html': {size: 24309, hash: '7b229a2caa4eb6c44a5265d67246820fa7696e5aef18a724d60a46abe63c9ff6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17883, hash: '1d1a30297bb98864223568461a23d852bc2b7a30826693f8a491ef1461bcd060', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Iniciar-sesion/index.html': {size: 49163, hash: 'e231fa23cd2a58434c36c17369b5a77de3ae0dc3345aa154421da1ace1341da6', text: () => import('./assets-chunks/Iniciar-sesion_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44334, hash: 'f9060d84313530cb85b1495f564a6e4af399d094bd4fd7edf6ce6fae57ac4dc6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'InicioPrivado/index.html': {size: 44256, hash: '32dea952f76a483f3d2a020afeca23a642df93f0813921ffc712053d0b377ca2', text: () => import('./assets-chunks/InicioPrivado_index_html.mjs').then(m => m.default)},
    'Registrarse/index.html': {size: 49466, hash: '1d7a27941b5570626eba9c33be9df66d66928496c9a1afe8e2f2187faecfad93', text: () => import('./assets-chunks/Registrarse_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
