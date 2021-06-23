const { buildSync } = require('esbuild');

buildSync({
  entryPoints: ['./src/index.jsx'],
  outfile: './build/static/index.js',
  minify: true,
  target: ['node14.17'],
  bundle: true,
  sourcemap: true,
  loader: { '.svg': 'dataurl', '.png': 'dataurl', '.woff2': 'file' },
});
