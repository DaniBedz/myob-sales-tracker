const { build } = require('esbuild');
const chokidar = require('chokidar');

const generateBuild = () => {
  build({
    entryPoints: ['./src/index.jsx'],
    outdir: './build/static/js',
    minify: true,
    platform: 'node',
    target: ['node14.17'],
    bundle: true,
    sourcemap: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl', '.woff2': 'file' },
  }).catch(() => process.exit(1));
};
chokidar
  .watch('.', { ignored: /build|node_modules|.git/ })
  .on('all', (event, path) => {
    console.log(event, path);
    generateBuild();
  });
