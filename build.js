const { buildSync } = require('esbuild');

buildSync({
    entryPoints: ['./src/index.jsx'],
    minify: true,
    bundle: true,
    platform: 'node',
    target: ['node14.17'],
    outfile: './build/static/index.js',
    sourcemap: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl', '.woff2': 'file' },
});
