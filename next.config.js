const path = require('path');
const withOffline = require('next-offline');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const withReactSvg = require('next-react-svg');

dotenvLoad();
const withNextEnv = nextEnv();

module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'CacheFirst',
      },
      {
        urlPattern: /api/,
        handler: 'NetworkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true',
            },
          },
        },
      },
    ],
  },
});

module.exports = withNextEnv({
  // Next.js config.
});

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    return config;
  },
});
