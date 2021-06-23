const { buildSync } = require('esbuild');
const chokidar = require('chokidar');

const generateBuild = () => {
  buildSync({
    entryPoints: ['./src/index.jsx'],
    outfile: './build/static/index.js',
    minify: true,
    target: ['node14.17'],
    bundle: true,
    sourcemap: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl', '.woff2': 'file' },
  });
};
chokidar
  .watch('.', { ignored: /build|node_modules|.git/ })
  .on('all', (event, path) => {
    console.log(event, path);
    generateBuild();
  });
