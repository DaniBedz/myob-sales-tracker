const { build } = require('esbuild');
const chokidar = require('chokidar');
const fs = require('fs-extra');

const generateBuild = async () => {
  await fs.rmdirSync('./build/static', { recursive: true });
  await build({
    entryPoints: ['./src/index.jsx'],
    outdir: './build/static/js',
    minify: true,
    bundle: true,
    platform: 'node',
    sourcemap: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl', '.woff2': 'file' },
  }).catch(() => process.exit(1));
  await fs.move(
    './build/static/js/index.css',
    './build/static/css/index.css',
    (err) => {
      if (err) return console.error(err);
      console.log('success!');
      return null;
    }
  );
};
chokidar
  .watch('.', { ignored: /build|node_modules|.git/ })
  .on('all', (event, path) => {
    console.log(event, path);
    generateBuild();
  });
