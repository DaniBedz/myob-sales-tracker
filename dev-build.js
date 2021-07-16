
const { serve } = require('esbuild');

const env = require('./.env.dev.js');

serve({
    servedir: './build',
},{
    define: {
        'process.env.REACT_APP_FIREBASE_API_KEY': `"${env.REACT_APP_FIREBASE_API_KEY}"`,
        'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': `"${env.REACT_APP_FIREBASE_AUTH_DOMAIN}"`,
        'process.env.REACT_APP_FIREBASE_PROJECT_ID': `"${env.REACT_APP_FIREBASE_PROJECT_ID}"`,
        'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': `"${env.REACT_APP_FIREBASE_STORAGE_BUCKET}"`,
        'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID': `"${env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}"`,
        'process.env.REACT_APP_FIREBASE_APP_ID': `"${env.REACT_APP_FIREBASE_APP_ID}"`,

    },
    entryPoints: ['./src/index.jsx'],
    outdir: './build/static',
    minify: false,
    bundle: true,
    sourcemap: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl', '.woff2': 'file' },
});
